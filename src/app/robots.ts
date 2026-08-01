import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // TODO: Update when domain is confirmed
    sitemap: 'https://caiosdogpet.com.br/sitemap.xml',
  }
}
