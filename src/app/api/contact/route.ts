import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { sendLeadNotification, sendLeadWelcome } from '@/lib/email'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  businessName: z.string().optional(),
  industry: z.string().optional(),
  serviceInterest: z.string().optional(),
  challenges: z.string().optional(),
  message: z.string().min(5),
})

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 submissions / 15 min per IP (form-spam protection)
    const ip = getClientIp(req)
    const rl = rateLimit(`contact:${ip}`, 5, 15 * 60_000)
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } }
      )
    }

    const body = await req.json()
    const data = schema.parse(body)

    // Save to DB
    let submission = null
    try {
      submission = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessName: data.businessName,
          message: data.message,
          challenges: data.challenges,
          ipAddress: req.headers.get('x-forwarded-for') ?? undefined,
        },
      })

      // Also create/update a Lead record
      await prisma.lead.upsert({
        where: { email: data.email },
        create: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessName: data.businessName,
          challenges: data.challenges,
          message: data.message,
          source: 'WEBSITE',
        },
        update: {
          name: data.name,
          phone: data.phone ?? undefined,
          businessName: data.businessName ?? undefined,
          challenges: data.challenges ?? undefined,
          message: data.message,
          updatedAt: new Date(),
        },
      })
    } catch {
      // DB offline in dev — still send emails
    }

    // Send emails in parallel (non-blocking if they fail)
    await Promise.allSettled([
      sendLeadNotification(data),
      sendLeadWelcome({ name: data.name, email: data.email }),
    ])

    return NextResponse.json({ success: true, id: submission?.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 422 })
    }
    console.error('[Contact API]', error)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
