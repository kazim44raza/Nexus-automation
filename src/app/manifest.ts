import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Azorvin',
    short_name: 'Azorvin',
    description: 'Azorvin AI automation systems for service businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111e',
    theme_color: '#07111e',
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
