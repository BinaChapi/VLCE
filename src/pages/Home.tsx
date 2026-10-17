import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { Seo } from "../components/Seo";
import { Counter } from "../components/Counter";
import { Kicker, Reveal } from "../components/Reveal";
import { SunMark } from "../components/Header";

function Hero() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % t.home.slides.length),
      5200,
    );
    return () => clearInterval(id);
  }, [t.home.slides.length]);

  const current = t.home.slides[slide];

  return (
    <section className="relative overflow-hidden bg-paper grain">
      <SunMark className="pointer-events-none absolute -left-20 top-10 h-72 w-72 text-sun-200/60 animate-spin-slow" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div>
          <Reveal>
            <Kicker>{t.brand.full}</Kicker>
          </Reveal>

          <div className="relative mt-6 min-h-[13rem] sm:min-h-[15rem] lg:min-h-[17rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide + current.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
                  {current.title}
                  <span className="text-sun-500">.</span>
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-800/80">
                  {current.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* slide dots */}
          <div className="mt-2 flex items-center gap-2">
            {t.home.slides.map((s, i) => (
              <button
                key={s.kicker + i}
                onClick={() => setSlide(i)}
                aria-label={`${t.home.slideLabel} ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === slide
                    ? "w-8 bg-sun-500"
                    : "w-2.5 bg-ink-900/20 hover:bg-ink-900/40"
                }`}
              />
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md border-l-2 border-lake-400 pl-4 text-sm leading-relaxed text-ink-800/70">
              {t.home.heroNote}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/donate"
                className="rounded-full bg-sun-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(245,125,18,0.65)] transition-all hover:-translate-y-0.5 hover:bg-sun-600"
              >
                {t.nav.donate}
              </Link>
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink-900/15 px-7 py-3 text-sm font-bold text-ink-900 transition-all hover:border-lake-500 hover:text-lake-600"
              >
                {t.home.ctaPrograms}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Collage */}
        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            {/* offset frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-lake-400/50" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_35px_60px_-25px_rgba(11,40,54,0.45)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={t.brand.full}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <p className="absolute bottom-5 left-6 right-6 text-sm font-semibold text-white/95">
                  {current.kicker} — {t.brand.name}
                </p>
              </div>
            </div>

            {/* floating chip */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-8 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_-18px_rgba(11,40,54,0.5)] sm:-right-8"
            >
              <p className="font-display text-2xl font-black text-sun-600">
                {t.home.supportedBeneficiaries.value}
              </p>
              <p className="text-[11px] font-semibold leading-tight text-ink-800/70">
                {t.home.supportedBeneficiaries.label}
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* ticker */}
      <div className="relative overflow-hidden border-y-2 border-ink-950 bg-sun-500 py-3.5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...t.home.ticker, ...t.home.ticker].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-sm font-bold text-white"
            >
              {item}
              <SunMark className="h-4 w-4 text-ink-950/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Kicker>{t.home.programsKicker}</Kicker>
            <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-ink-950 md:text-5xl">
              {t.home.programsTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-ink-800/70">{t.home.programsIntro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {t.home.programsList.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link to="/programs" className="group block">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
                  <span className="font-display absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-lake-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/85">
                      {p.text}
                    </p>
                  </div>
                  <span className="absolute bottom-6 right-6 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-sun-500 text-lg text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${t.home.backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right -80px bottom -60px",
          backgroundSize: "440px",
          filter: "grayscale(1) invert(1)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <Kicker light>{t.home.impactKicker}</Kicker>
          <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            {t.home.impactTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lake-100/80">
            {t.home.impactIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.stats.map((s, i) => (
            <div
              key={s.label}
              className="group bg-ink-900/60 p-8 transition-colors hover:bg-ink-900"
            >
              <Reveal delay={i * 0.08}>
                <p className="font-display text-5xl font-black text-sun-400">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-wider text-white">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-lake-100/60">
                  {s.text}
                </p>
                <div className="mt-5 h-[3px] w-8 rounded-full bg-lake-400 transition-all duration-500 group-hover:w-full group-hover:bg-sun-500" />
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/impact"
              className="rounded-full border-2 border-lake-400/60 px-6 py-3 text-sm font-bold text-lake-100 transition-all hover:border-lake-400 hover:bg-lake-400/10"
            >
              {t.nav.impact} →
            </Link>
            <Link
              to="/donate"
              className="rounded-full bg-sun-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-sun-600"
            >
              {t.nav.donate}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SupportStrip() {
  const { t } = useLanguage();
  return (
    <section className="bg-lake-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-black tracking-tight text-ink-950 md:text-4xl">
            {t.donate.togetherTitle}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-800/75">
            {t.donate.togetherText}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="rounded-full bg-lake-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-lake-700"
            >
              {t.nav.donate}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-ink-900/15 px-7 py-3 text-sm font-bold text-ink-900 transition-all hover:border-sun-500 hover:text-sun-600"
            >
              {t.common.getInvolved}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <img
            src={t.home.communityImage}
            alt={t.home.communityImageAlt}
            className="w-full rounded-3xl border-8 border-white object-cover shadow-[0_25px_50px_-20px_rgba(13,42,58,0.4)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Seo
        title={t.meta.home.title}
        description={t.meta.home.description}
        path="/"
      />
      <Hero />
      <Programs />
      <ImpactStats />
      <SupportStrip />
    </>
  );
}
