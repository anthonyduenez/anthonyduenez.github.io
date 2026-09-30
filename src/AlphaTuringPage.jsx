const RESCUE_FLOW = [
  {
    number: "01",
    title: "Scan the environment",
    description:
      "A live camera feed runs through Google Gemini to look for survivors in spaces that may be too unstable or confined for people.",
  },
  {
    number: "02",
    title: "Send the pin",
    description:
      "When a person is found, AlphaTuring sends an immediate location ping to a command-center dashboard and live map.",
  },
  {
    number: "03",
    title: "Keep talking",
    description:
      "ElevenLabs provides reassurance and first-aid guidance, while responders can type a message that is spoken on site.",
  },
];

const TECHNICAL_NOTES = [
  {
    title: "Gemini-powered perception",
    description:
      "The Raspberry Pi 4 runs the AI and communication stack, using a live camera feed to analyze the environment for survivors.",
  },
  {
    title: "Location-aware handoff",
    description:
      "A survivor detection becomes a location event on the command-center dashboard, giving responders a clear place to focus.",
  },
  {
    title: "Voice for survivors and responders",
    description:
      "ElevenLabs gives the rover a voice for reassurance and first-aid guidance, while responder messages can be spoken back on site.",
  },
  {
    title: "A clear hardware/software boundary",
    description:
      "The Arduino Mega 2560 handles motor control and sensors; my contribution focused on the software connecting perception, location, and voice.",
  },
];

const DEMO_VIDEO_URL =
  "https://drive.google.com/file/d/1LwFxbiJc-V8bT_eiQ3DQyM5ryfCtAFKU/preview";
const DEMO_VIDEO_PAGE_URL =
  "https://drive.google.com/file/d/1LwFxbiJc-V8bT_eiQ3DQyM5ryfCtAFKU/view?usp=drivesdk";
const QUACKHACKS_PROJECT_URL =
  "https://2026.quackhacks.org/projects/alphaturing";

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

export default function AlphaTuringPage({ onBack }) {
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
                Robotics software · Search &amp; rescue · QuackHacks 2026
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
                AlphaTuring
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">
                A rescue software stack that helps an autonomous rover find
                survivors, alert responders, and keep people calm while help
                is on the way.
              </p>
            </div>

            <figure className="overflow-hidden rounded-[2rem] bg-[#dce9d4] shadow-2xl shadow-black/25 ring-1 ring-emerald-100/20">
              <img
                src="/alphaTurringIcon.jpg"
                alt="AlphaTuring rover platform used to demonstrate the software"
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
            Turning a camera feed into a rescue response
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50] sm:text-lg">
            AlphaTuring is an autonomous search-and-rescue system for disaster
            environments such as earthquakes and building collapses. A live
            camera feed analyzed by Google Gemini can identify survivors, send
            their location to a command-center dashboard, and use ElevenLabs to
            deliver reassurance and first-aid guidance.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-[#315b50]/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Role
              </dt>
              <dd className="mt-2 font-semibold">Back-end / AI software</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Built with
              </dt>
              <dd className="mt-2 font-semibold">
                Gemini · ElevenLabs · Base44 · Backboard
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Focus
              </dt>
              <dd className="mt-2 font-semibold">Detection · Location · Voice</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Status
              </dt>
              <dd className="mt-2 font-semibold">QuackHacks prototype</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://devpost.com/software/alphaturing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View the Devpost project ↗
            </a>
            <a
              href={DEMO_VIDEO_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Watch the demo ↗
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
              Software in action
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Detect, locate, reassure
            </h2>
            <p className="mt-5 text-base leading-7 text-[#315b50] sm:text-lg">
              The physical rover is the platform. The software connects its
              live camera, onboard compute, location events, and voice
              communication into a rescue system.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#0b3f52] shadow-2xl shadow-[#183f54]/20 ring-1 ring-[#315b50]/20">
            <iframe
              src={DEMO_VIDEO_URL}
              title="AlphaTuring software demonstration video"
              className="aspect-video w-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#315b50]">
            Watch the software connect visual detection, location awareness,
            and communication in the team&apos;s working prototype.{" "}
            <a
              href={DEMO_VIDEO_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#183f54] underline decoration-[#557a63]/60 underline-offset-4 hover:text-[#0d3041]"
            >
              Open the video directly ↗
            </a>
          </p>

        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DocSection eyebrow="The why" title="Reduce the distance to help">
            <p>
              Disaster environments can be dangerous, unstable, or too
              confined for people to search safely. AlphaTuring is designed to
              scout first and shorten the time between spotting a survivor and
              getting responders to the right place.
            </p>
          </DocSection>

          <DocSection eyebrow="The flow" title="How AlphaTuring responds">
            <p>
              The product loop moves from visual detection to a location-aware
              alert, then to voice communication that keeps survivors and
              responders connected.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {RESCUE_FLOW.map((item) => (
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

          <DocSection eyebrow="Reflection" title="Software is the bridge">
            <p>
              This project changed how I think about robotics work. A capable
              chassis matters, but the software determines what the system can
              notice, how it explains that information, and whether a person
              can act on it quickly.
            </p>
            <p className="mt-5">
              My contribution was the software behind the rover: perception,
              AI integration, and voice response. The physical robot and
              circuitry were built by my teammate.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            Project context
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            A team-built rescue prototype
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50]">
            AlphaTuring was built by a four-person team for QuackHacks 2026.
            The project combines a tank-tread chassis, Raspberry Pi 4, Arduino
            Mega 2560, Gemini, ElevenLabs, Base44, and Backboard into a
            battery-powered rescue prototype. This case study focuses on my
            software contribution; the physical chassis and circuitry were
            teammate work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://devpost.com/software/alphaturing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Read the Devpost project ↗
            </a>
            <a
              href={QUACKHACKS_PROJECT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View the QuackHacks page ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
