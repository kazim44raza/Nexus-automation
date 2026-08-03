import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import { authConfig } from '@/lib/auth.config'

/**
 * Edge middleware — defense-in-depth for the admin area.
 * Uses the provider-less authConfig (no Prisma/bcrypt) so it can run on the
 * edge runtime. The (protected) admin layout and every /api/admin route also
 * check the session server-side; this is the outer wall, not the only one.
 */
const { auth } = NextAuth(authConfig)

const TRANSPARENT_PNG = Uint8Array.from([
  137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82,
  0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196,
  137, 0, 0, 0, 13, 73, 68, 65, 84, 8, 215, 99, 96, 96, 96,
  0, 0, 0, 5, 0, 1, 226, 38, 5, 155, 0, 0, 0, 0, 73, 69,
  78, 68, 174, 66, 96, 130,
])

export default auth((req) => {
  const { pathname } = req.nextUrl

  if (pathname === '/favicon.ico') {
    return new NextResponse(TRANSPARENT_PNG, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        Pragma: 'no-cache',
        Expires: '0',
      },
    })
  }

  const isAdminPage = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')
  const isAdminApi = pathname.startsWith('/api/admin')

  if ((isAdminPage || isAdminApi) && !req.auth) {
    if (isAdminApi) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/favicon.ico', '/admin/:path*', '/api/admin/:path*'],
}
