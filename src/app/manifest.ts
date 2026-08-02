import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Azorvin',
    short_name: 'Azorvin',
    description: 'Voice, messaging, booking, and workflow systems for service businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111e',
    theme_color: '#07111e',
    icons: [
      {
        src: '/logo.png',
        sizes: '200x200',
        type: 'image/png',
      },
    ],
  }
}
