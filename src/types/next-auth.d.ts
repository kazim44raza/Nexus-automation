import { Role } from '@prisma/client'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: Role
      avatar?: string | null
    }
  }

  interface User {
    id: string
    email: string
    name: string
    role: Role
    avatar?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: Role
  }
}
