import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('sessionId')

  try {
    if (sessionId) {
      const messages = await prisma.chatMessage.findMany({
        where: { sessionId },
        orderBy: { createdAt: 'asc' },
      })
      return NextResponse.json({ messages })
    }

    const sessions = await prisma.chatSession.findMany({
      orderBy: { startedAt: 'desc' },
      take: 50,
      include: { _count: { select: { messages: true } } },
    })
    return NextResponse.json({ sessions })
  } catch {
    return NextResponse.json({ sessions: [], messages: [] })
  }
}
