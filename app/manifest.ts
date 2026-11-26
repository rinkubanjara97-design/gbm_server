import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'G.B.M. Marble & Handicraft Noida',
    short_name: 'GBM Marble',
    description: 'Premier Makrana marble god statues, custom home mandirs, stone jaali, and fountains in Noida Sector 49.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#1A1A1A',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
