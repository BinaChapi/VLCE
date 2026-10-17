import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Seo } from '../components/Seo'
import { Kicker, Reveal } from '../components/Reveal'
import { SunMark } from '../components/Header'

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41Z" />
      </svg>
    </span>
  )
}

function SectionImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <Reveal className="relative">
      <div className="absolute -inset-2 rounded-[2.2rem] border-2 border-dashed border-sun-400/50" />
      <img
        src={src}
        alt={alt}
        className="relative w-full rounded-[2rem] object-cover shadow-[0_30px_55px_-25px_rgba(11,40,54,0.5)]"
      />
      {caption && (
        <p className="absolute bottom-4 left-4 rounded-full bg-ink-950/70 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {caption}
        </p>
      )}
    </Reveal>
  )
}

export default function Programs() {
  const { t } = useLanguage()
  const p = t.programs

  return (
    <>
      <Seo title={t.meta.programs.title} description={t.meta.programs.description} path="/programs" />
      {/* header */}
      <section className="relative overflow-hidden bg-paper grain">
        <SunMark className="pointer-events-none absolute -right-24 top-6 h-80 w-80 text-sun-200/50 animate-spin-slow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal>
            <Kicker>{t.brand.short}</Kicker>
            <h1 className="font-display mt-5 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-ink-950 md:text-6xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-800/80">{p.intro1}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-800/70">{p.intro2}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-6">
              {p.keyNumbers.map((k) => (
                <div
                  key={k.label}
                  className="rounded-2xl border border-ink-900/10 bg-white px-7 py-5 shadow-sm"
                >
                  <p className="font-display text-4xl font-black text-lake-600">{k.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-ink-800/60">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* healthcare */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <SectionImage src={p.healthcare.image} alt={p.healthcare.title} caption={`${t.brand.short} — ${p.healthcare.title}`} />
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-lake-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lake-700">
                {p.healthcare.badge}
              </span>
              <h2 className="font-display mt-5 text-4xl font-black tracking-tight text-ink-950">
                {p.healthcare.title}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-800/75">{p.healthcare.p1}</p>
              <p className="mt-4 leading-relaxed text-ink-800/75">{p.healthcare.p2}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {p.healthcare.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-medium text-ink-900">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl bg-sun-500 px-7 py-4 text-white">
                <span className="font-display text-4xl font-black">{p.healthcare.statValue}</span>
                <span className="max-w-[220px] text-xs font-semibold leading-snug">
                  {p.healthcare.statLabel}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* education */}
      <section className="bg-lake-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Reveal>
                <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
                  {p.education.title}
                </h2>
                <p className="mt-5 leading-relaxed text-ink-800/75">{p.education.p1}</p>
                <p className="mt-4 leading-relaxed text-ink-800/75">{p.education.p2}</p>
              </Reveal>
              <div className="mt-8 flex gap-4">
                {[
                  { v: p.education.stat1Value, l: p.education.stat1Label },
                  { v: p.education.stat2Value, l: p.education.stat2Label },
                ].map((s) => (
                  <Reveal key={s.l} className="flex-1">
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-lake-200">
                      <p className="font-display text-3xl font-black text-lake-600">{s.v}</p>
                      <p className="mt-1 text-xs font-semibold text-ink-800/70">{s.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <SectionImage src={p.education.image} alt={p.education.title} caption={`${t.brand.short} — ${p.education.title}`} />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {p.education.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-lake-200/70 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="font-display text-4xl font-black text-sun-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold text-ink-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* social support */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionImage src={p.social.image} alt={p.social.title} caption={`${t.brand.short} — ${p.social.title}`} />
            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
                {p.social.title}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-800/75">{p.social.p1}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {p.social.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-paper-2 px-6 py-4">
                    <p className="font-display text-2xl font-black text-sun-600">{s.value}</p>
                    <p className="mt-1 max-w-[160px] text-xs font-semibold text-ink-800/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {p.social.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border-2 border-ink-900/8 p-7 transition-all hover:border-lake-400 hover:bg-lake-50">
                  <h3 className="font-display text-xl font-bold text-ink-950 transition-colors group-hover:text-lake-700">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* agape */}
      <section className="relative overflow-hidden bg-ink-950 py-24 grain">
        <SunMark className="pointer-events-none absolute -left-28 bottom-0 h-96 w-96 text-lake-900/40 animate-spin-slow" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal>
                <Kicker light>{t.programs.agape.title}</Kicker>
                <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-white">
                  {p.agape.title}
                </h2>
                <p className="mt-5 leading-relaxed text-lake-100/80">{p.agape.p1}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-3xl bg-sun-500 p-8 text-white">
                  <h3 className="font-display text-2xl font-bold">{p.agape.feastTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">{p.agape.feastText}</p>
                  <div className="mt-6 flex items-baseline gap-3 border-t border-white/25 pt-5">
                    <span className="font-display text-5xl font-black">{p.agape.servedValue}</span>
                    <span className="text-xs font-semibold leading-snug">{p.agape.servedLabel}</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 rounded-3xl border border-lake-400/40 bg-lake-900/50 p-8">
                  <h3 className="font-display text-2xl font-bold text-white">{p.agape.inviteTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lake-100/80">
                    {p.agape.inviteText}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-ink-950 transition-all hover:bg-sun-400"
                  >
                    {t.common.contactUs}
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
                <h3 className="font-display text-2xl font-bold text-ink-950">{p.agape.mealsTitle}</h3>
                <ul className="mt-6 divide-y divide-ink-900/10">
                  {p.agape.meals.map((m) => (
                    <li key={m.date + m.count} className="flex items-center justify-between gap-4 py-3.5">
                      <div>
                        <p className="font-bold text-ink-950">{m.date}</p>
                        <p className="text-xs text-ink-800/60">{m.by}</p>
                      </div>
                      <span className="rounded-full bg-lake-100 px-4 py-1.5 text-sm font-bold text-lake-700">
                        {m.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* bego maed */}
      <section className="bg-paper-2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display max-w-2xl text-4xl font-black tracking-tight text-ink-950">
              {p.bego.title}
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-ink-800/75">{p.bego.intro}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.bego.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="h-full rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-900/10 transition-all hover:-translate-y-1 hover:ring-sun-400/60">
                  <p className="font-display text-4xl font-black text-sun-600">{s.value}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-ink-800/75">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-ink-950 p-8 text-white lg:p-10">
                <h3 className="font-display text-2xl font-bold">{p.bego.whoTitle}</h3>
                <ul className="mt-6 space-y-4">
                  {p.bego.whoPoints.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-sm leading-relaxed text-lake-100/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun-400" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-3xl border-2 border-dashed border-lake-400/60 bg-white p-8 lg:p-10">
                <h3 className="font-display text-2xl font-bold text-ink-950">{p.bego.currentTitle}</h3>
                <p className="mt-4 leading-relaxed text-ink-800/75">{p.bego.currentText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* be human */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
                  {p.behuman.title}
                </h2>
                <p className="mt-5 leading-relaxed text-ink-800/75">{p.behuman.intro}</p>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {p.behuman.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.06}>
                    <div className="h-full rounded-2xl bg-lake-50 p-6 ring-1 ring-lake-200">
                      <p className="font-display text-3xl font-black text-lake-600">{s.value}</p>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-ink-800/75">
                        {s.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <SectionImage src={p.behuman.image} alt={p.behuman.title} caption={`${t.brand.short} — ${p.behuman.title}`} />
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-ink-950 p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-white">{p.behuman.areasTitle}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.behuman.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-lake-400/40 bg-lake-900/40 px-5 py-2.5 text-sm font-semibold text-lake-100 transition-all hover:border-sun-400 hover:bg-sun-500 hover:text-white"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
