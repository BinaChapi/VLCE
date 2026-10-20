import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { SITE_URL } from '../site'

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

interface SeoProps {
  title: string
  description: string
  path: string
}

/** Keeps title, description, canonical and social meta in sync per page & language. */
export function Seo({ title, description, path }: SeoProps) {
  const { lang, t } = useLanguage()
  const ogImage = `${SITE_URL}${t.brand.socialImage}`

  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: lang === 'am' ? 'am_ET' : 'en_US',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: t.brand.full,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })
    upsertLink('canonical', url)
    upsertLink('icon', t.brand.logo)
    upsertLink('apple-touch-icon', t.brand.logo)
  }, [title, description, path, lang, ogImage, t.brand.full, t.brand.logo])

  return null
}
