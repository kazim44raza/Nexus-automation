import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { slugify, estimateReadingTime } from '@/lib/utils'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const publishedOnly = searchParams.get('published') !== 'false'
  const slug = searchParams.get('slug')

  if (slug) {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
      include: { author: { select: { name: true, avatar: true } } },
    })
    if (!post || (publishedOnly && !post.published)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  }

  const posts = await prisma.blogPost.findMany({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { publishedAt: 'desc' },
    include: { author: { select: { name: true, avatar: true } } },
  })

  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const slug = slugify(body.title)
  const readingTime = estimateReadingTime(body.content ?? '')

  const post = await prisma.blogPost.create({
    data: {
      title: body.title,
      slug,
      content: body.content ?? '',
      excerpt: body.excerpt,
      coverImage: body.coverImage,
      authorId: session.user.id,
      published: body.published ?? false,
      publishedAt: body.published ? new Date() : null,
      seoTitle: body.seoTitle ?? body.title,
      seoDescription: body.seoDescription ?? body.excerpt,
      tags: body.tags ?? [],
      readingTime,
    },
  })

  return NextResponse.json(post, { status: 201 })
}

export async function PATCH(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  const post = await prisma.blogPost.update({
    where: { id },
    data: {
      ...data,
      publishedAt: data.published && !data.publishedAt ? new Date() : data.publishedAt,
      readingTime: data.content ? estimateReadingTime(data.content) : undefined,
    },
  })

  return NextResponse.json(post)
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()
  await prisma.blogPost.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
