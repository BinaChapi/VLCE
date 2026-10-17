import { useLanguage } from '../i18n/LanguageContext'
import { Seo } from '../components/Seo'
import { Kicker, Reveal } from '../components/Reveal'
import { SunMark } from '../components/Header'

const valueIcons = [
  // transparency — eye
  <svg key="0" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 5c5 0 9.3 3 11 7-1.7 4-6 7-11 7S2.7 16 1 12c1.7-4 6-7 11-7Zm0 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>,
  // community — people
  <svg key="1" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05A4.2 4.2 0 0 1 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
  </svg>,
  // impact — target
  <svg key="2" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>,
  // compassion — heart
  <svg key="3" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
  </svg>,
]

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <>
      <Seo title={t.meta.about.title} description={t.meta.about.description} path="/about" />
      {/* intro */}
      <section className="relative overflow-hidden bg-paper grain">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sun-500/40 bg-sun-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sun-700">
              <SunMark className="h-3.5 w-3.5" />
              {a.badge}
            </span>
            <h1 className="font-display mt-6 text-5xl font-black leading-[1.05] tracking-tight text-ink-950 md:text-6xl">
              {a.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/80">{a.intro}</p>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="relative">
              <img
                src={a.heroImage}
                alt={t.brand.name}
                className="w-full rounded-[2rem] object-cover shadow-[0_35px_60px_-25px_rgba(11,40,54,0.45)]"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-lake-600 px-6 py-4 text-white shadow-lg">
                <p className="font-display text-3xl font-black">{a.foundedYear}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-lake-100">
                  {t.programs.keyNumbers[1].label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* who we are + values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Kicker>{a.storyKicker}</Kicker>
            <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-ink-950">
              {a.whoTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-ink-800/75">{a.whoText}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-ink-900/10 bg-paper p-7 transition-all hover:-translate-y-1.5 hover:border-sun-500/50 hover:shadow-[0_20px_40px_-20px_rgba(245,125,18,0.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-100 text-lake-600 transition-colors group-hover:bg-sun-100 group-hover:text-sun-600">
                    {valueIcons[i]}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-ink-950">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why we do it */}
      <section className="bg-paper-2 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
              {a.whyTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-800/75">{a.whyIntro}</p>
            <img
              src={a.storyImage}
              alt={t.brand.name}
              className="mt-8 w-full rounded-3xl object-cover shadow-[0_25px_45px_-20px_rgba(11,40,54,0.35)]"
            />
          </Reveal>
          <div className="flex flex-col justify-center gap-4">
            {a.whyPoints.map((p, i) => (
              <Reveal key={p.strong} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5 transition-all hover:ring-lake-400/60">
                  <span className="font-display text-3xl font-black text-sun-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-950">{p.strong}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-800/70">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* community impact numbers */}
      <section className="bg-lake-600 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-white">
              {a.impactTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-lake-100/90">{a.impactIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {a.impactStats.map((s, i) => (
              <div key={s.label} className="bg-lake-700/80 p-8 transition-colors hover:bg-lake-800">
                <Reveal delay={i * 0.06}>
                  <p className="font-display text-5xl font-black text-white">{s.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-lake-100/90">{s.label}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
