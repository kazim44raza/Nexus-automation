import type { NextAuthConfig } from 'next-auth'
import type { Role } from '@prisma/client'

export const authConfig = {
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  providers: [],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role as Role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as Role
      }
      return session
    },
  },
} satisfies NextAuthConfig