import { streamText } from 'ai'
import { NextRequest } from 'next/server'
import { getAIModel } from '@/lib/ai'
import { buildSystemPrompt } from '@/lib/ai/system-prompt'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp, tooManyRequests } from '@/lib/rate-limit'

export const maxDuration = 30

const MAX_MESSAGE_LENGTH = 2000
const MAX_MESSAGES = 20

/** Strip control chars and clamp length to limit prompt-injection / cost abuse. */
function sanitizeContent(raw: unknown): string {
  if (typeof raw !== 'string') return ''
  // eslint-disable-next-line no-control-regex
  return raw.replace(/[\x00-\x1F\x7F]/g, ' ').trim().slice(0, MAX_MESSAGE_LENGTH)
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 10 LLM requests / minute per IP (cost-attack protection)
    const ip = getClientIp(req)
    const rl = rateLimit(`chat:${ip}`, 10, 60_000)
    if (!rl.success) return tooManyRequests(rl.retryAfter)

    const body = await req.json()
    const { messages: rawMessages, sessionId } = body

    if (!rawMessages || !Array.isArray(rawMessages)) {
      return new Response(JSON.stringify({ error: 'Messages required' }), { status: 400 })
    }

    // Sanitize + validate every message before it ever reaches the model
    const messages = rawMessages
      .slice(-MAX_MESSAGES)
      .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant'))
      .map((m: any) => ({ role: m.role as 'user' | 'assistant', content: sanitizeContent(m.content) }))
      .filter((m) => m.content.length > 0)

    if (messages.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid messages' }), { status: 400 })
    }

    // Fetch active knowledge base entries to augment the system prompt
    let knowledgeContext: string | undefined
    try {
      const entries = await prisma.knowledgeEntry.findMany({
        where: { active: true },
        orderBy: { priority: 'desc' },
        take: 20,
        select: { title: true, content: true, category: true },
      })
      const faqs = await prisma.fAQ.findMany({
        where: { published: true },
        orderBy: { sortOrder: 'asc' },
        take: 30,
        select: { question: true, answer: true },
      })

      if (entries.length || faqs.length) {
        knowledgeContext = [
          entries.length ? `### Knowledge Entries\n${entries.map(e => `**${e.title}** (${e.category})\n${e.content}`).join('\n\n')}` : '',
          faqs.length ? `### FAQs\n${faqs.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}` : '',
        ].filter(Boolean).join('\n\n')
      }
    } catch {
      // DB not connected — continue without KB augmentation
    }

    const model = getAIModel()
    const systemPrompt = buildSystemPrompt(knowledgeContext)

    const result = await streamText({
      model,
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxOutputTokens: 600,
    })

    // Persist the latest user message asynchronously (already sanitized)
    if (sessionId && typeof sessionId === 'string') {
      const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')
      if (lastUserMessage) {
        prisma.chatMessage.create({
          data: { sessionId, role: 'USER', content: lastUserMessage.content },
        }).catch(() => {})
      }
    }

    return new Response(result.textStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-cache' },
    })
  } catch (error) {
    console.error('[Chat API]', error)
    return new Response(
      JSON.stringify({ error: 'Chat service unavailable. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
