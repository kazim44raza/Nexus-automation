import { NextRequest, NextResponse } from 'next/server'
import { getClientIp, rateLimit } from '@/lib/rate-limit'

const CACHE_REVISION = '2026-08-04-v1'
const COOKIE_NAME = 'azorvin_brand_cache'

export function GET(req: NextRequest) {
  const ip = getClientIp(req)
  const limit = rateLimit(`brand-cache:${ip}`, 60, 60_000)

  if (!limit.success) {
    return new NextResponse(null, {
      status: 429,
      headers: { 'Retry-After': String(limit.retryAfter), 'Cache-Control': 'no-store' },
    })
  }

  const alreadyRefreshed = req.cookies.get(COOKIE_NAME)?.value === CACHE_REVISION
  const response = new NextResponse(null, {
    status: 204,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      ...(alreadyRefreshed ? {} : { 'Clear-Site-Data': '"cache"' }),
    },
  })

  if (!alreadyRefreshed) {
    response.cookies.set(COOKIE_NAME, CACHE_REVISION, {
      httpOnly: true,
      secure: req.nextUrl.protocol === 'https:',
      sameSite: 'lax',
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
    })
  }

  return response
}
