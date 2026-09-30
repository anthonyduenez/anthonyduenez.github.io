const DESIGN_FLOW = [
  {
    number: "01",
    title: "Research the friction",
    description:
      "Start with the difficulty of finding local, ethical options in a marketplace shaped by overconsumption.",
  },
  {
    number: "02",
    title: "Prototype the journey",
    description:
      "Move from sketches to a higher-fidelity flow for discovering, browsing, and understanding local listings.",
  },
  {
    number: "03",
    title: "Iterate together",
    description:
      "Use feedback, competitive analysis, and rapid design decisions to turn a broad idea into a clearer product concept.",
  },
];

const DESIGN_DECISIONS = [
  {
    title: "Lead with the local map",
    description:
      "A map-based entry point makes nearby yard sales and thrift opportunities feel discoverable instead of hidden across separate services.",
  },
  {
    title: "Keep browsing and context connected",
    description:
      "The prototype pairs a feed of listings with location, categories, and details so users can understand what is nearby before committing time.",
  },
  {
    title: "Move from low-fi to hi-fi",
    description:
      "The team used sketches and wireframes to explore the structure first, then refined the strongest ideas into a more complete mobile prototype.",
  },
  {
    title: "Design for a shared point of view",
    description:
      "The final direction came from brainstorming, competitive analysis, and iterative critique across a four-person team that started as strangers.",
  },
];

const DESIGN_ARTIFACTS = [
  {
    image: "/ethocal-process-flow.png",
    title: "Lo-fi to hi-fi",
    description:
      "The design moved from rough flows and wireframes toward a more complete mobile experience.",
    imageClassName: "object-center",
    imageAspectClassName: "aspect-[16/5]",
  },
  {
    image: "/ethocal-brainstorming.png",
    title: "Brainstorming",
    description:
      "Rapid idea generation and shared critique helped the team identify real issues, user frustrations, and promising directions.",
    imageClassName: "object-center",
    imageAspectClassName: "aspect-[2/1]",
  },
  {
    image: "/ethocal-competitive-analysis.png",
    title: "Competitive analysis",
    description:
      "A closer look at Depop surfaced useful strengths, weaknesses, opportunities, and threats for the Ethocal concept.",
    imageClassName: "object-center",
    imageAspectClassName: "aspect-[4/3]",
  },
];

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/pxGaR2Qw1IToOVue8GUZEu/Ethocal?node-id=119-152&starting-point-node-id=119%3A142&show-proto-sidebar=1&t=0bUj0kdFJWlY7UvW-1";

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

export default function EthocalPage({ onBack }) {
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
                Product design · Ethical marketplace · DesignVerse 2026
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
                Ethocal
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85">
                A mobile marketplace concept that helps people discover local
                yard sales, thrift stores, and ethical brands.
              </p>
            </div>

            <figure className="overflow-hidden rounded-[2rem] bg-[#f2eddc] shadow-2xl shadow-black/25 ring-1 ring-emerald-100/20">
              <img
                src="/ethocal-hero.png"
                alt="Ethocal logo beside two mobile app screens"
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
            Making ethical discovery feel local
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50] sm:text-lg">
            Ethocal explores how a single mobile experience could make more
            sustainable shopping options easier to find. The concept brings
            nearby yard sales, thrift stores, and ethical brands into one
            place, with the design process grounded in research and iteration.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-[#315b50]/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Role
              </dt>
              <dd className="mt-2 font-semibold">Product design collaborator</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Built with
              </dt>
              <dd className="mt-2 font-semibold">Figma · User research</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Focus
              </dt>
              <dd className="mt-2 font-semibold">Local discovery · Sustainability</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Status
              </dt>
              <dd className="mt-2 font-semibold">Design prototype</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://devpost.com/software/ethocal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View the Devpost project ↗
            </a>
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Open the Figma prototype ↗
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
              Design in action
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From broad idea to a shared direction
            </h2>
            <p className="mt-5 text-base leading-7 text-[#315b50] sm:text-lg">
              Ethocal&apos;s strongest artifact is the process itself: a team
              moving from questions and sketches toward a coherent product
              story.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {DESIGN_ARTIFACTS.map((artifact) => (
              <figure
                key={artifact.title}
                className={
                  artifact.title === "Competitive analysis"
                    ? "mx-auto max-w-3xl"
                    : ""
                }
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-[#183f54] p-2 shadow-xl shadow-[#183f54]/20 ring-1 ring-[#315b50]/15 sm:p-3">
                  <img
                    src={artifact.image}
                    alt={`${artifact.title} artifact from the Ethocal design process`}
                    className={`${artifact.imageAspectClassName} w-full rounded-[1rem] object-cover ${artifact.imageClassName}`}
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-semibold">{artifact.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#315b50]">
                    {artifact.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DocSection eyebrow="The why" title="Make better choices easier to find">
            <p>
              People who want to shop more sustainably can still struggle to
              locate options that fit their needs and their neighborhood.
              Ethocal starts with that gap: make local, secondhand, and ethical
              choices easier to discover in one place.
            </p>
          </DocSection>

          <DocSection eyebrow="The approach" title="Design before implementation">
            <p>
              The team used group brainstorming, competitive analysis, and
              iterative Figma designs to test the structure of the idea before
              treating it like a finished app.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {DESIGN_FLOW.map((item) => (
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
          <DocSection eyebrow="Design decisions" title="Technical decisions">
            <div className="space-y-5">
              {DESIGN_DECISIONS.map((decision) => (
                <div key={decision.title}>
                  <h3 className="font-semibold text-emerald-50">{decision.title}</h3>
                  <p className="mt-1">{decision.description}</p>
                </div>
              ))}
            </div>
          </DocSection>

          <DocSection eyebrow="Reflection" title="A fast project with real design practice">
            <p>
              Ethocal was a reminder that good product work can happen quickly
              when a team creates space for many ideas, then gives the strongest
              ones a clear path to develop.
            </p>
            <p className="mt-5">
              The project strengthened my ability to practice empathy in an
              interface, explain design decisions, and collaborate toward a
              shared product direction.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            Project context
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            A collaborative design prototype
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50]">
            Ethocal was created for DesignVerse 2026 by a four-person team in
            less than 24 hours. The team won the Cookie Cutter Challenge, and
            the final deliverable is a Figma prototype that makes the product
            direction tangible.
          </p>
          <a
            href="https://devpost.com/software/ethocal"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
          >
            Read the public project page ↗
          </a>
        </section>
      </div>
    </main>
  );
}
