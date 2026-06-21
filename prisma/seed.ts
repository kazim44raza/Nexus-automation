import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL ?? 'admin@nexusautomation.ai'
  const password = process.env.ADMIN_PASSWORD ?? 'NexusAdmin2024!'

  const hashed = await hash(password, 12)

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: {
      email,
      password: hashed,
      name: 'Nexus Admin',
      role: 'ADMIN',
    },
  })

  console.log(`✓ Admin user: ${user.email}`)
  console.log(`  Password: ${password}`)
  console.log(`  Login at: http://localhost:3000/admin/login`)

  // Seed some knowledge entries
  await prisma.knowledgeEntry.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'About Nexus Automation',
        content: 'Nexus Automation is a premium AI automation agency that helps businesses grow by automating their sales, support, and operational workflows. We specialize in AI chatbots, voice agents, lead qualification, appointment booking, and business process automation.',
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
        content: 'We offer custom pricing based on your business needs and scale. The best way to get started is to book a free 30-minute discovery call where we analyze your current workflows and identify automation opportunities. Most clients see ROI within 30-60 days.',
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
