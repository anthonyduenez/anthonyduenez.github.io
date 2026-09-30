const STEPS_FLOW = [
  {
    number: "01",
    title: "Set the rule",
    description:
      "Choose a daily step goal and a cutoff time that gives the day a clear boundary.",
  },
  {
    number: "02",
    title: "Pick the distractions",
    description:
      "Select the apps or categories that should stay out of reach until the goal is met.",
  },
  {
    number: "03",
    title: "Walk to stay unlocked",
    description:
      "HealthKit progress updates throughout the day while the app keeps the deadline visible.",
  },
];

const TECHNICAL_NOTES = [
  {
    title: "HealthKit as the progress source",
    description:
      "StepSummary reads the day’s cumulative step count, observes HealthKit updates in the background, and keeps the progress state available to the rest of the app.",
  },
  {
    title: "System-level app controls",
    description:
      "FamilyControls lets the user choose what to restrict, while DeviceActivity and ManagedSettings apply the selected shield when the deadline is missed.",
  },
  {
    title: "A deadline-aware state machine",
    description:
      "DeadlineEnforcer keeps the core states explicit: before the deadline, goal met, blocked, missed without a selection, or temporarily unblocked.",
  },
  {
    title: "A deliberate emergency escape hatch",
    description:
      "The app includes three emergency unblocks per week. A ten-second hold restores access when the user genuinely needs it, without making the rule effortless to bypass.",
  },
];

const APP_SCREENS = [
  {
    image: "/steps-appstore-hero.jpg",
    title: "Keep apps unlocked",
    description:
      "The home screen makes daily progress, the deadline, and the monster’s mood visible at a glance.",
  },
  {
    image: "/steps-appstore-settings.jpg",
    title: "Choose the rule",
    description:
      "Settings connect blocked apps, the step goal, the time window, and Screen Time permission.",
  },
  {
    image: "/steps-appstore-unblock.jpg",
    title: "Use an emergency unblock",
    description:
      "When access is truly needed, a focused hold restores the selected apps for the day.",
  },
];

function DocSection({ eyebrow, title, children }) {
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

export default function StepsPage({ onBack }) {
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
                Health · Digital wellbeing · Published
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
                Steps
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">
                A HealthKit-powered iOS app that turns a daily walk into a
                simple rule for staying away from selected apps.
              </p>
            </div>

            <figure className="overflow-hidden rounded-[2rem] bg-[#dce9d4] shadow-2xl shadow-black/25 ring-1 ring-emerald-100/20">
              <img
                src="/stepsCover.png"
                alt="Steps artwork showing a walking path and the app character"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </header>

        <section className="rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            At a glance
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Walk first. Scroll later.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50] sm:text-lg">
            Steps connects physical movement to digital access. It reads daily
            activity from HealthKit, gives the user a goal and a deadline, and
            uses Apple&apos;s Screen Time frameworks to protect that decision
            when the deadline arrives.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-[#315b50]/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Role
              </dt>
              <dd className="mt-2 font-semibold">iOS developer</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Built with
              </dt>
              <dd className="mt-2 font-semibold">Swift · SwiftUI · HealthKit</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Focus
              </dt>
              <dd className="mt-2 font-semibold">Movement · App access</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Status
              </dt>
              <dd className="mt-2 font-semibold">Published · v1.0.2</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/us/app/steps-screen-time-control/id6755275144"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View on the App Store ↗
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
              App in action
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A physical goal with a digital consequence
            </h2>
            <p className="mt-5 text-base leading-7 text-[#315b50] sm:text-lg">
              The shipped experience is intentionally direct: see the goal,
              choose what matters, and keep access by moving.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3 sm:gap-6">
            {APP_SCREENS.map((screen) => (
              <figure key={screen.title}>
                <div className="overflow-hidden rounded-[1.5rem] bg-[#183f54] p-2 shadow-xl shadow-[#183f54]/20 ring-1 ring-[#315b50]/15 sm:p-3">
                  <img
                    src={screen.image}
                    alt={`${screen.title} screen in Steps`}
                    className="aspect-[1284/2778] w-full rounded-[1rem] object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-semibold">{screen.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#315b50]">
                    {screen.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DocSection eyebrow="The why" title="Make the intention easier to keep">
            <p>
              Screen-time limits can be easy to ignore because they are
              disconnected from the behavior someone wants to change. Steps
              makes the tradeoff tangible: move toward a goal, then keep the
              apps you chose available.
            </p>
          </DocSection>

          <DocSection eyebrow="The flow" title="A rule that runs through the day">
            <p>
              The product loop moves from configuration to progress to a
              deadline. When the goal is met, access stays open. When it is
              missed, the selected apps are shielded until the next day.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS_FLOW.map((item) => (
            <article
              key={item.number}
              className="rounded-[1.75rem] bg-[#123f51]/85 p-6 shadow-xl shadow-black/15 ring-1 ring-emerald-100/10"
            >
              <p className="text-3xl font-bold text-[#dfff8f]/70">{item.number}</p>
              <h2 className="mt-8 text-xl font-semibold text-emerald-50">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DocSection eyebrow="Implementation" title="Technical decisions">
            <div className="space-y-5">
              {TECHNICAL_NOTES.map((note) => (
                <div key={note.title}>
                  <h3 className="font-semibold text-emerald-50">{note.title}</h3>
                  <p className="mt-1">{note.description}</p>
                </div>
              ))}
            </div>
          </DocSection>

          <DocSection eyebrow="Reflection" title="Designing for follow-through">
            <p>
              The interesting part of Steps is not just reading a step count or
              presenting a lock screen. It is coordinating permissions,
              background updates, deadline logic, system restrictions, and a
              friendly visual system without making the product feel punitive.
            </p>
            <p className="mt-5">
              The result is a small product with a clear promise: move first,
              then scroll with fewer excuses.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            Release context
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            A shipped iOS product
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50]">
            Steps is presented here through its public App Store experience.
            The source repository remains private, while the case study keeps
            the focus on the product decisions and the version that shipped.
          </p>
          <a
            href="https://apps.apple.com/us/app/steps-screen-time-control/id6755275144"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
          >
            Open the public listing ↗
          </a>
        </section>
      </div>
    </main>
  );
}
