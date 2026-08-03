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

const TRANSPARENT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"></svg>'

export default auth((req) => {
  const { pathname } = req.nextUrl

  if (pathname === '/favicon.ico') {
    return new NextResponse(TRANSPARENT_ICON, {
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
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
