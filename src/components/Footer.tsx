import { Link } from 'react-router-dom'
import { useLanguage, type Dictionary } from '../i18n/LanguageContext'
import { SunMark } from './Header'

function SocialIcon({ name }: { name: string }) {
  if (name.toLowerCase() === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12Z" />
      </svg>
    )
  }
  if (name.toLowerCase() === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
      </svg>
    )
  }
  if (name.toLowerCase() === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84V9.34a6.37 6.37 0 1 0 5.76 6.33V8.69a8.16 8.16 0 0 0 4.77 1.53V6.78a4.85 4.85 0 0 1-1-.09Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 2.93l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21.07l1.71-1.71" />
    </svg>
  )
}

function SocialIcons({ links }: { links: Dictionary['footer']['socialLinks'] }) {
  return (
    <div className="flex gap-2">
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lake-100 transition-all hover:-translate-y-0.5 hover:bg-sun-500 hover:text-white"
        >
          <SocialIcon name={social.name} />
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/about', label: t.nav.about },
    { to: '/programs', label: t.nav.programs },
    { to: '/impact', label: t.nav.impact },
    { to: '/contact', label: t.nav.contact },
    { to: '/donate', label: t.nav.donate },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-lake-100/80 grain">
      {/* orange horizon line */}
      <div className="h-1 w-full bg-gradient-to-r from-sun-500 via-lake-400 to-sun-500" />
      <SunMark className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-lake-900/40 animate-spin-slow" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={t.brand.logo}
              alt={t.brand.full}
              className="h-14 w-auto rounded-lg bg-white px-2 py-1"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{t.footer.about}</p>
          <div className="mt-6">
            <SocialIcons links={t.footer.socialLinks} />
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">{t.footer.quickLinks}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-sun-400"
                >
                  <span className="h-px w-3 bg-sun-500 transition-all group-hover:w-5" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">{t.footer.programsTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {t.footer.programsList.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lake-400" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">{t.footer.contactTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-sun-400">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.25 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              {t.footer.address}
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-sun-400">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1Z" />
              </svg>
              <span>
                {t.contact.phoneNumbers.map((phone) => (
                  <a key={phone.href} href={phone.href} className="block hover:text-sun-400">
                    {phone.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-sun-400">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-7.4 4.6a1 1 0 0 1-1.2 0L4 8.2V6.4l8 5 8-5Z" />
              </svg>
              <a href={`mailto:${t.footer.email}`} className="break-all hover:text-sun-400">
                {t.footer.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs md:flex-row">
          <p>© {year} {t.footer.rights}</p>
          <p className="flex items-center gap-2 text-lake-100/60">
            <SunMark className="h-3.5 w-3.5 text-sun-500" />
            {t.footer.address}
          </p>
        </div>
      </div>
    </footer>
  )
}
