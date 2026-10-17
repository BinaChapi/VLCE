import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Seo } from '../components/Seo'
import { Kicker, Reveal } from '../components/Reveal'
import { SunMark } from '../components/Header'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${c.messageSubject} ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${t.footer.email}?subject=${subject}&body=${body}`
  }

  const cards = [
    {
      title: c.addressTitle,
      body: c.address,
      href: undefined as string | undefined,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.25 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      ),
    },
    {
      title: c.phoneTitle,
      body: c.phoneNumbers,
      href: undefined as string | undefined,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1Z" />
        </svg>
      ),
    },
    {
      title: c.emailTitle,
      body: t.footer.email,
      href: `mailto:${t.footer.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-7.4 4.6a1 1 0 0 1-1.2 0L4 8.2V6.4l8 5 8-5Z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Seo title={t.meta.contact.title} description={t.meta.contact.description} path="/contact" />
      <section className="relative overflow-hidden bg-paper grain">
        <SunMark className="pointer-events-none absolute -left-20 -top-16 h-72 w-72 text-sun-200/50 animate-spin-slow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal>
            <Kicker>{c.touchTitle}</Kicker>
            <h1 className="font-display mt-5 text-5xl font-black tracking-tight text-ink-950 md:text-6xl">
              {c.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-800/80">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group flex gap-5 rounded-3xl border border-ink-900/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-lake-400/60 hover:shadow-[0_18px_35px_-18px_rgba(19,162,201,0.45)]">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-lake-100 p-3 text-lake-600 transition-colors group-hover:bg-sun-100 group-hover:text-sun-600">
                    {card.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-ink-950">{card.title}</h2>
                    {Array.isArray(card.body) ? (
                      <div className="mt-2 space-y-1 text-sm leading-relaxed">
                        {card.body.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="block text-ink-800/75 hover:text-lake-600"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    ) : card.href ? (
                      <a
                        href={card.href}
                        className="mt-2 block whitespace-pre-line text-sm leading-relaxed text-ink-800/75 hover:text-lake-600"
                      >
                        {card.body}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm leading-relaxed text-ink-800/75">{card.body}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-ink-950 p-8 text-white lg:p-10"
            >
              <h2 className="font-display text-3xl font-bold">{c.formTitle}</h2>
              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lake-100/70">
                    {c.formName}
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-sun-400 focus:bg-white/10"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lake-100/70">
                    {c.formEmail}
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-sun-400 focus:bg-white/10"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-lake-100/70">
                    {c.formMessage}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-sun-400 focus:bg-white/10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sun-500 py-3.5 text-sm font-bold text-white transition-all hover:bg-sun-400 hover:shadow-[0_14px_30px_-12px_rgba(245,125,18,0.8)]"
                >
                  {c.formSend}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
