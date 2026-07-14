export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: 'desc' },
      include: { lead: { select: { name: true, email: true } } },
    })
    return NextResponse.json({ appointments })
  } catch {
    return NextResponse.json({ appointments: [] })
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id, status } = await req.json()
  try {
    const updated = await prisma.appointment.update({ where: { id }, data: { status } })
    return NextResponse.json({ appointment: updated })
  } catch {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}
