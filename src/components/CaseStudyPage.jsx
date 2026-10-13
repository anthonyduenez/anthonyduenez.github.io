export function DocSection({ eyebrow, title, children }) {
  return (
    <section className="rounded-[2rem] bg-[#0b3f52]/80 p-6 shadow-2xl shadow-black/20 ring-1 ring-emerald-100/15 backdrop-blur-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#dfff8f]/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-emerald-50 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-sm leading-7 text-emerald-50/80 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyPage({
  onBack,
  kicker,
  title,
  description,
  heroSrc,
  heroAlt,
  heroBackgroundClassName = "bg-[#dce9d4]",
  children,
}) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0B3F52] text-white">
      <img
        src="/swamp-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[-10vh] h-[108vh] w-full object-cover object-[center_75%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[15] bg-black/35"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-[10] h-[90vh] w-full bg-gradient-to-t from-[#318BAA] via-[#318BAA]/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-[72vh] z-[10] min-h-[180vh] w-full bg-gradient-to-b from-[#318BAA] via-[#1D6F87] to-[#0B3F52]"
      />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pb-24">
        <header className="pt-6">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full px-1 py-2 text-sm font-semibold text-emerald-50/85 drop-shadow transition hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70"
          >
            ← Back to selected work
          </button>

          <div className="grid items-end gap-8 pb-14 pt-20 lg:grid-cols-[1fr_0.9fr] lg:pt-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfff8f]/85">
                {kicker}
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">
                {description}
              </p>
            </div>

            <figure
              className={`overflow-hidden rounded-[2rem] ${heroBackgroundClassName} shadow-2xl shadow-black/25 ring-1 ring-emerald-100/20`}
            >
              <img
                src={heroSrc}
                alt={heroAlt}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
