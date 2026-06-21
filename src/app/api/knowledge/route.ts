import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [entries, faqs] = await Promise.all([
    prisma.knowledgeEntry.findMany({ orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }] }),
    prisma.fAQ.findMany({ orderBy: { sortOrder: 'asc' } }),
  ])

  return NextResponse.json({ entries, faqs })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { type, ...data } = body

  if (type === 'faq') {
    const faq = await prisma.fAQ.create({ data })
    return NextResponse.json(faq, { status: 201 })
  }

  const entry = await prisma.knowledgeEntry.create({ data })
  return NextResponse.json(entry, { status: 201 })
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, type, ...data } = await req.json()

  if (type === 'faq') {
    const faq = await prisma.fAQ.update({ where: { id }, data })
    return NextResponse.json(faq)
  }

  const entry = await prisma.knowledgeEntry.update({ where: { id }, data })
  return NextResponse.json(entry)
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, type } = await req.json()

  if (type === 'faq') {
    await prisma.fAQ.delete({ where: { id } })
  } else {
    await prisma.knowledgeEntry.delete({ where: { id } })
  }

  return NextResponse.json({ success: true })
}
