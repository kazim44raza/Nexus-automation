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

export default auth((req) => {
  const { pathname } = req.nextUrl
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
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
