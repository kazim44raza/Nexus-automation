import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

const BASE_URL = 'https://www.azorvin.com'

const industrySlugs = [
  'healthcare', 'dental', 'real-estate', 'legal', 'fitness', 'automotive',
  'home-services', 'ecommerce', 'professional-services',
]

const fallbackBlogPosts = [
  { slug: 'how-we-build-reliable-voice-agents', updatedAt: '2025-06-01' },
  { slug: 'why-we-prefer-n8n', updatedAt: '2025-05-22' },
  { slug: 'automation-is-data-not-chat', updatedAt: '2025-05-15' },
]

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
  { url: `${BASE_URL}/services/chatbots`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/voice-agents`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/business-automation`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/lead-qualification`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/appointment-booking`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/customer-support`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/whatsapp-automation`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/solutions`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/industries`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/work`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/resources`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ...industrySlugs.map(slug => ({
    url: `${BASE_URL}/industries/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })),
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = fallbackBlogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })
    const databaseEntries = posts.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
    const databaseUrls = new Set(databaseEntries.map(entry => entry.url))
    blogEntries = [...databaseEntries, ...blogEntries.filter(entry => !databaseUrls.has(entry.url))]
  } catch {
    // Keep the built-in articles discoverable when the database is unavailable.
  }

  return [...staticRoutes, ...blogEntries]
}
