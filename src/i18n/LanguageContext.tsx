import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../content'
import { requiredContentSections } from '../contentSections'

type Content = typeof import('../content').content

function localize(value: unknown, lang: Lang): unknown {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang))

  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>

    if ('en' in record && 'am' in record && Object.keys(record).length === 2) {
      return record[lang]
    }

    return Object.fromEntries(
      Object.entries(record).map(([key, child]) => [key, localize(child, lang)]),
    )
  }

  return value
}

type Localized<T> = T extends readonly (infer U)[]
  ? Localized<U>[]
  : T extends { en: infer E; am: infer _A }
    ? Localized<E>
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T

export type Dictionary = Localized<Content>

interface LanguageValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageValue | null>(null)

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function getApiError(payload: unknown, status: number): string {
  if (
    isRecord(payload) &&
    isRecord(payload.error) &&
    typeof payload.error.message === 'string'
  ) {
    return payload.error.message
  }

  return `Content request failed (${status})`
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [sourceContent, setSourceContent] = useState<Content | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('vlce-lang')
    return saved === 'am' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    const base = (import.meta.env.VITE_API_BASE_URL || '/api/v1').replace(/\/$/, '')
    const controller = new AbortController()

    async function loadContent() {
      setError(null)

      try {
        const response = await fetch(`${base}/content`, {
          signal: controller.signal,
          cache: 'no-store',
        })
        const payload: unknown = await response.json()

        if (!response.ok) throw new Error(getApiError(payload, response.status))
        if (!isRecord(payload) || payload.success !== true || !isRecord(payload.data)) {
          throw new Error('The content API returned an invalid response.')
        }

        const data = payload.data
        const missingSections = requiredContentSections.filter(
          (key) => !isRecord(data[key]),
        )
        if (missingSections.length > 0) {
          throw new Error(
            `Published database content is incomplete. Missing sections: ${missingSections.join(', ')}.`,
          )
        }
        if (!Array.isArray((data.footer as Record<string, unknown>).socialLinks)) {
          throw new Error(
            'Published database footer content is missing social links. Run the footer social links backfill and retry.',
          )
        }

        setSourceContent(data as Content)
      } catch (loadError) {
        if (controller.signal.aborted) return
        setError(loadError instanceof Error ? loadError.message : 'Unable to load website content.')
      }
    }

    void loadContent()
    return () => controller.abort()
  }, [attempt])

  useEffect(() => {
    localStorage.setItem('vlce-lang', lang)
    document.documentElement.lang = lang === 'am' ? 'am' : 'en'
  }, [lang])

  const setLang = (nextLang: Lang) => setLangState(nextLang)

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper px-6 py-16">
        <section className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-ink-900/10 sm:p-12">
          <h1 className="font-display text-3xl font-black text-ink-950">
            Website content is unavailable
          </h1>
          <p className="mt-4 leading-relaxed text-ink-800/75">{error}</p>
          <p className="mt-3 text-sm text-ink-800/60">
            The website displays content from its published database sections only.
          </p>
          <button
            type="button"
            onClick={() => {
              setSourceContent(null)
              setAttempt((current) => current + 1)
            }}
            className="mt-7 rounded-full bg-sun-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-sun-600"
          >
            Retry
          </button>
        </section>
      </main>
    )
  }

  if (!sourceContent) {
    return (
      <main
        className="flex min-h-screen items-center justify-center bg-paper px-6"
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-ink-800/70">Loading website content...</p>
      </main>
    )
  }

  const t = localize(sourceContent, lang) as Dictionary

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within the loaded LanguageProvider.')
  return context
}
