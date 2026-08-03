import type { Metadata } from 'next'

const DEFAULT_OG_IMAGE = '/azorvin-logo-master.jpg'

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | '/'
  image?: string
  type?: 'website' | 'article'
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const imageSize = image === DEFAULT_OG_IMAGE
    ? { width: 1448, height: 1086 }
    : { width: 1200, height: 630 }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Azorvin',
      type,
      images: [{ url: image, ...imageSize, alt: `${title} — Azorvin` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
