import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAdminRoute = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')
  const isApiAdminRoute = pathname.startsWith('/api/admin')

  if ((isAdminRoute || isApiAdminRoute) && !req.auth) {
    const loginUrl = new URL('/admin/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
