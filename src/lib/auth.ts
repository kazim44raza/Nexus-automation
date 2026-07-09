import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { Role } from '@prisma/client'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { authConfig } from '@/lib/auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        if (!credentials?.email || !credentials?.password) return null

        // Brute-force throttle: 5 attempts / 15 min per IP+email
        const ip = request ? getClientIp(request) : 'unknown'
        const rl = rateLimit(`login:${ip}:${credentials.email}`, 5, 15 * 60_000)
        if (!rl.success) {
          throw new Error('Too many login attempts. Please try again in a few minutes.')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })

        // Run a dummy compare even when the user is missing, to avoid leaking
        // account existence via response timing.
        const hash = user?.password ?? '$2a$12$invalidinvalidinvalidinvalidinvalidinvalidinv'
        const isValid = await bcrypt.compare(credentials.password as string, hash)

        if (!user || !isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        }
      },
    }),
  ],
})
