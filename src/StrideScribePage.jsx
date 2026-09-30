const RUN_FLOW = [
  {
    number: "01",
    title: "Start a run",
    description:
      "The start screen shows the runner's current location on a map and begins a new session.",
  },
  {
    number: "02",
    title: "Track it live",
    description:
      "Distance, pace, elapsed time, and the route update in real time while the run is in progress.",
  },
  {
    number: "03",
    title: "Review the effort",
    description:
      "Completed runs are saved locally so the runner can revisit detailed stats and route history.",
  },
];

const TECHNICAL_NOTES = [
  {
    title: "One shared tracking state",
    description:
      "The app uses a shared runTracker object injected into the SwiftUI environment so the live run state stays available across screens.",
  },
  {
    title: "Location-aware tracking",
    description:
      "CLLocationManager supplies location updates while the tracker calculates distance, pace, and the route coordinates for each run.",
  },
  {
    title: "Local run persistence",
    description:
      "RunData records date, distance, pace, elapsed time, and locations, then serializes completed runs into UserDefaults for local history.",
  },
  {
    title: "Deliberate run controls",
    description:
      "Pause and stop actions use long-press gestures with haptic feedback, while background task support helps the run continue beyond the foreground view.",
  },
];

const APP_SCREENS = [
  {
    image: "/stridescribe-start.jpg",
    title: "Start a run",
    description: "See your location and begin a session from the map.",
  },
  {
    image: "/stridescribe-running.jpg",
    title: "Track live",
    description: "Keep distance, pace, and elapsed time visible while moving.",
  },
  {
    image: "/stridescribe-history.jpg",
    title: "Review history",
    description: "Browse the saved runs that make the experience cumulative.",
  },
  {
    image: "/stridescribe-detail.jpg",
    title: "Inspect the route",
    description: "Open a completed run to see its path and workout metrics.",
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

export default function StrideScribePage({ onBack }) {
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
                Fitness · Running tracker · Shelved
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
                StrideScribe
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">
                A SwiftUI iOS app for recording GPS routes and reviewing live
                pace, distance, elapsed time, and workout history.
              </p>
            </div>

            <figure className="overflow-hidden rounded-[2rem] bg-[#dce9d4] shadow-2xl shadow-black/25 ring-1 ring-emerald-100/20">
              <img
                src="/strideScribeCover.png"
                alt="StrideScribe running route artwork"
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
            A focused running companion
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50] sm:text-lg">
            StrideScribe turns a run into a clear, reviewable record. It keeps
            the live experience simple while connecting location tracking,
            route visualization, and saved workout history in one flow.
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
              <dd className="mt-2 font-semibold">Swift · SwiftUI · MapKit</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Focus
              </dt>
              <dd className="mt-2 font-semibold">Live tracking · Run history</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Status
              </dt>
              <dd className="mt-2 font-semibold">Shelved project</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/anthonyduenez/StrideScribe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View source on GitHub ↗
            </a>
            <a
              href="https://www.notion.so/StrideScribe-Documentation-30ede2abd6a0807eaf39f86e454ddcaa?source=copy_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Read full documentation ↗
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
              App in action
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From starting line to saved run
            </h2>
            <p className="mt-5 text-base leading-7 text-[#315b50] sm:text-lg">
              A look at the core product loop, using the original app screens
              from the project documentation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {APP_SCREENS.map((screen) => (
              <figure key={screen.title}>
                <div className="overflow-hidden rounded-[1.5rem] bg-[#183f54] p-2 shadow-xl shadow-[#183f54]/20 ring-1 ring-[#315b50]/15 sm:p-3">
                  <img
                    src={screen.image}
                    alt={`${screen.title} screen in StrideScribe`}
                    className="aspect-[591/1280] w-full rounded-[1rem] object-cover"
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
          <DocSection eyebrow="The why" title="Problem and motivation">
            <p>
              Running apps can expose a lot of data without making the actual
              experience feel simple. StrideScribe explores a focused flow:
              start a run, see the important numbers while moving, and return
              to the details later.
            </p>
          </DocSection>

          <DocSection eyebrow="The flow" title="How it works">
            <p>
              The app connects three moments into one continuous experience:
              starting a run, tracking it live, and reviewing what happened.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {RUN_FLOW.map((item) => (
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

          <DocSection eyebrow="Reflection" title="What I learned">
            <p>
              This project pushed me to think about more than drawing a route
              on a map. The interesting work was coordinating live state,
              gestures, haptics, persistence, and a calm interface that stays
              readable while someone is moving.
            </p>
            <p className="mt-5">
              The result is a small but complete product loop: capture a run,
              preserve it, and make it useful after the run is over.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            Repository notes
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Organized for iteration
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50]">
            The public repository preserves the Xcode project and main app
            target. The app code is organized around SwiftUI views, a shared
            tracker, local run data, and MapKit-based route detail screens.
          </p>
          <a
            href="https://github.com/anthonyduenez/StrideScribe"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
          >
            Explore the repository ↗
          </a>
        </section>
      </div>
    </main>
  );
}
