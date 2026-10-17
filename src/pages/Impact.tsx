import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Seo } from '../components/Seo'
import { Kicker, Reveal } from '../components/Reveal'
import { SunMark } from '../components/Header'

export default function Impact() {
  const { t } = useLanguage()
  const im = t.impact

  return (
    <>
      <Seo title={t.meta.impact.title} description={t.meta.impact.description} path="/impact" />
      {/* header */}
      <section className="relative overflow-hidden bg-paper grain">
        <SunMark className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 text-sun-200/50 animate-spin-slow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-lake-400/50 bg-lake-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lake-700">
              <SunMark className="h-3.5 w-3.5 text-sun-500" />
              {im.badge}
            </span>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-ink-950 md:text-6xl">
              {im.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-800/80">{im.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* achievements */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Kicker>{im.achievementsTitle}</Kicker>
            <p className="mt-4 max-w-2xl text-ink-800/75">{im.achievementsIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {im.stats.map((s, i) => (
              <div
                key={s.label}
                className="group bg-paper p-8 transition-colors hover:bg-sun-50"
              >
                <Reveal delay={i * 0.05}>
                  <p className="font-display text-5xl font-black text-sun-600 transition-colors group-hover:text-sun-500">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-800/75">{s.label}</p>
                  <div className="mt-5 h-[3px] w-8 rounded-full bg-lake-400 transition-all duration-500 group-hover:w-16 group-hover:bg-sun-500" />
                </Reveal>
              </div>
            ))}
          </div>

          {/* direct support */}
          <Reveal>
            <div className="mt-12 grid gap-10 rounded-3xl bg-lake-50 p-8 ring-1 ring-lake-200 lg:grid-cols-[1.3fr_1fr] lg:p-12">
              <div>
                <h2 className="font-display text-3xl font-black tracking-tight text-ink-950">
                  {im.directTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-800/75">{im.directText}</p>
              </div>
              <div className="flex flex-wrap content-center gap-3">
                {im.directTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-lake-700 ring-1 ring-lake-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-paper-2 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
              {im.journeyTitle}
            </h2>
            <p className="mt-3 text-ink-800/70">{im.journeyIntro}</p>
          </Reveal>

          <div className="relative mt-14">
            <span className="absolute bottom-2 left-[19px] top-2 w-[3px] rounded-full bg-gradient-to-b from-lake-400 via-sun-400 to-lake-400 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-12">
              {im.timeline.map((m, i) => (
                <Reveal key={m.year} delay={0.05}>
                  <div
                    className={`relative flex gap-8 sm:w-1/2 ${
                      i % 2 === 0
                        ? 'sm:pr-12'
                        : 'sm:ml-auto sm:pl-12'
                    }`}
                  >
                    <span
                      className={`absolute left-[8px] top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-paper-2 bg-sun-500 sm:left-auto ${
                        i % 2 === 0 ? 'sm:-right-3' : 'sm:-left-3'
                      }`}
                    />
                    <div className="ml-10 w-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink-900/10 transition-all hover:-translate-y-1 hover:shadow-md sm:ml-0">
                      <p className="font-display text-2xl font-black text-lake-600">{m.year}</p>
                      <h3 className="font-display mt-2 text-xl font-bold text-ink-950">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{m.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* organization */}
      <section className="relative overflow-hidden bg-ink-950 py-24 grain">
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-white">
              {im.storyTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-lake-100/80">
              {im.storyText}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-14 text-xs font-bold uppercase tracking-[0.3em] text-sun-400">
              {im.orgTitle}
            </h3>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-5">
              {im.org.map((o) => (
                <div key={o.label} className="bg-ink-900/70 px-4 py-7">
                  <p className="font-display text-4xl font-black text-white">{o.value}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-lake-100/70">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="rounded-full bg-sun-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-sun-600"
              >
                {t.nav.donate}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-lake-400/60 px-8 py-3 text-sm font-bold text-lake-100 transition-all hover:border-lake-400 hover:bg-lake-400/10"
              >
                {t.common.getInvolved}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
