import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomBytes } from 'crypto'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL ?? 'ahmed@azorvin.com'
  // SECURITY: never ship a hardcoded default password — this repo is public.
  // If ADMIN_PASSWORD isn't set, generate a random one and print it once.
  const generated = !process.env.ADMIN_PASSWORD
  const password = process.env.ADMIN_PASSWORD ?? randomBytes(12).toString('base64url')

  const hashed = await hash(password, 12)

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: {
      email,
      password: hashed,
      name: 'Azorvin Admin',
      role: 'ADMIN',
    },
  })

  console.log(`✓ Admin user: ${user.email}`)
  if (generated) {
    console.log(`  Generated password (save it now — it is not stored anywhere else): ${password}`)
  } else {
    console.log('  Password: (from ADMIN_PASSWORD env var)')
  }
  console.log(`  Login at: http://localhost:3000/admin/login`)

  // Seed some knowledge entries
  await prisma.knowledgeEntry.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'About Azorvin',
        content: 'Azorvin is an AI systems and automation company for service businesses. We design AI chatbots, voice agents, lead qualification, appointment booking, and business workflow automation with clear human handoffs.',
        category: 'Company',
        active: true,
        priority: 10,
      },
      {
        title: 'Services Overview',
        content: 'We offer 6 core services: (1) AI Chatbots for 24/7 lead capture and customer support, (2) Voice Agents for automated phone calls and missed call follow-up, (3) Business Automation for CRM and workflow automation, (4) Lead Qualification for automated prospect scoring, (5) Appointment Booking for 24/7 scheduling, (6) Customer Support automation for ticket resolution.',
        category: 'Services',
        active: true,
        priority: 9,
      },
      {
        title: 'Pricing and Getting Started',
        content: 'We provide custom pricing based on the workflow, integrations, volume, and support required. The best way to start is a discovery call where we review the current process and identify a practical first automation project.',
        category: 'Pricing',
        active: true,
        priority: 8,
      },
    ],
  })

  console.log('✓ Knowledge base seeded')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
