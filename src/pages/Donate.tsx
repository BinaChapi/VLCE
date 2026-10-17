import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { SunMark } from "../components/Header";

const optionIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h1v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9h1a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2Zm-11-2.5A1.5 1.5 0 0 1 10.5 5H7.5A1.5 1.5 0 0 1 9 3.5Zm9.5 16.5H5.5V11h13ZM15 3.5A1.5 1.5 0 0 1 16.5 5h-3A1.5 1.5 0 0 1 15 3.5ZM20 9.5H4V8h16Z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05A4.2 4.2 0 0 1 17 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
  </svg>,
];

export default function Donate() {
  const { t } = useLanguage();
  const d = t.donate;

  return (
    <>
      <Seo
        title={t.meta.donate.title}
        description={t.meta.donate.description}
        path="/donate"
      />
      {/* header */}
      <section className="relative overflow-hidden bg-ink-950 grain">
        <SunMark className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 text-sun-500/20 animate-spin-slow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              <SunMark className="h-3.5 w-3.5" />
              {d.badge}
            </span>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              {d.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-lake-100/85">
              {d.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* options + online payments */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight text-ink-950">
              {d.matterTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-800/75">
              {d.matterIntro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {d.options.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-ink-900/10 bg-white p-8 transition-all hover:-translate-y-1.5 hover:border-sun-500/60 hover:shadow-[0_22px_45px_-22px_rgba(245,125,18,0.45)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-100 text-sun-600 transition-colors group-hover:bg-lake-100 group-hover:text-lake-600">
                    {optionIcons[i]}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-ink-950">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800/70">
                    {o.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* how + payment providers */}
          <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-lake-600 p-9 text-white lg:p-12">
                <SunMark className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 text-lake-500/50" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-lake-100">
                  {d.howTitle}
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-lake-50/90">
                  {d.howText}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-7 py-3 text-sm font-bold text-lake-700 transition-all hover:bg-sun-400 hover:text-white"
                  >
                    {t.common.contactUs}
                  </Link>
                  <Link
                    to="/"
                    className="rounded-full border-2 border-white/40 px-7 py-2.5 text-sm font-bold text-white transition-all hover:border-white"
                  >
                    {t.common.backToHome}
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-[2rem] border-2 border-dashed border-sun-400/70 bg-white p-9 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-sun-600">
                  {d.onlineTitle}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-800/75">
                  {d.onlineText}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {d.paymentProviders.map((m) => (
                    <div
                      key={m.name}
                      className="group relative flex h-24 cursor-not-allowed items-center justify-center overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-900/10 transition-all hover:ring-lake-400/60"
                      title={`${m.name} — ${d.comingSoon}`}
                    >
                      <img
                        src={m.logo}
                        alt={m.name}
                        className="max-h-11 w-auto max-w-[75%] object-contain opacity-80 grayscale-[35%] transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                      <span className="absolute right-2 top-2 rounded-full bg-ink-950 px-2.5 py-1 text-[10px] font-bold text-sun-400">
                        {d.comingSoon}
                      </span>
                    </div>
                  ))}
                  {/* one-liner tile to balance the grid */}
                  <div className="flex h-24 items-center justify-center rounded-2xl border-2 border-dashed border-lake-300 bg-lake-50 px-4 text-center">
                    <p className="text-[11px] font-bold leading-snug text-lake-700">
                      {d.moreProviders}
                    </p>
                  </div>
                </div>

                <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink-800/60">
                  <SunMark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sun-500" />
                  {d.paymentNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* closing */}
      <section className="bg-sun-500 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-black tracking-tight text-white md:text-4xl">
              {d.togetherTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/90">
              {d.togetherText}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
