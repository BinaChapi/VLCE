import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div
      className={`flex items-center rounded-full border p-0.5 text-xs font-semibold ${
        compact ? 'border-ink-800/20' : 'border-ink-800/20'
      }`}
      role="group"
      aria-label={t.common.languageLabel}
    >
      {(['en', 'am'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 transition-colors ${
            lang === l
              ? 'bg-ink-900 text-white'
              : 'text-ink-800 hover:text-sun-600'
          }`}
        >
          {l === 'en' ? 'EN' : 'አማ'}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/programs', label: t.nav.programs },
    { to: '/impact', label: t.nav.impact },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* slim info bar */}
      <div className="hidden bg-ink-950 text-[11px] tracking-wide text-lake-100/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="flex items-center gap-2">
            <SunMark className="h-3 w-3 text-sun-400" />
            {t.common.sinceBadge}
          </p>
          <div className="flex items-center gap-5">
            <a href={t.contact.phoneNumbers[0].href} className="hover:text-sun-400 transition-colors">
              {t.contact.phoneNumbers[0].display}
            </a>
            <a
              href={`mailto:${t.footer.email}`}
              className="hover:text-sun-400 transition-colors"
            >
              {t.footer.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-ink-900/10 bg-paper/95 shadow-[0_1px_0_rgba(11,40,54,0.06),0_12px_30px_-18px_rgba(11,40,54,0.35)] backdrop-blur'
            : 'border-transparent bg-paper'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={t.brand.logo}
              alt={t.brand.full}
              className="h-11 w-auto rounded-lg bg-white px-2 py-1 ring-1 ring-ink-900/10 transition-transform duration-300 group-hover:-rotate-2 md:h-13"
            />
            <span className="leading-tight">
              <span className="font-display block text-lg font-bold text-ink-900 md:text-xl">
                {t.brand.name}
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-600">
                {t.brand.mark}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-sun-600' : 'text-ink-800 hover:text-lake-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-sun-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Link
              to="/donate"
              className="group relative overflow-hidden rounded-full bg-sun-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-sun-600 hover:shadow-[0_10px_25px_-10px_rgba(245,125,18,0.7)]"
            >
              <span className="relative z-10">{t.nav.donate}</span>
            </Link>
          </div>

          {/* mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle compact />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={t.common.menuLabel}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-ink-800/15"
            >
              <span
                className={`h-0.5 w-5 bg-ink-900 transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`}
              />
              <span
                className={`h-0.5 w-5 bg-ink-900 transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-ink-900/10 lg:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-base font-semibold ${
                        isActive ? 'bg-sun-100 text-sun-700' : 'text-ink-800 hover:bg-lake-50'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Link
                  to="/donate"
                  className="mt-2 rounded-full bg-sun-500 px-4 py-3 text-center text-base font-bold text-white"
                >
                  {t.nav.donate}
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-17a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm0 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM1 11h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2Zm20 0h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM4.2 3.2a1 1 0 0 1 1.4 0L7 4.6A1 1 0 1 1 5.6 6L4.2 4.6a1 1 0 0 1 0-1.4Zm14.2 14.2a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1-1.4 1.4l-1.4-1.4a1 1 0 0 1 0-1.4ZM19.8 3.2a1 1 0 0 1 0 1.4L18.4 6A1 1 0 1 1 17 4.6l1.4-1.4a1 1 0 0 1 1.4 0ZM5.6 17.4a1 1 0 0 1 0 1.4L4.2 20.2A1 1 0 0 1 2.8 18.8l1.4-1.4a1 1 0 0 1 1.4 0Z" />
    </svg>
  )
}
