const PROJECTS = [
  {
    title: "Steps: Screen Time Control",
    category: "Health · Digital wellbeing",
    description:
      "An iOS app that turns daily steps into a reason to take a break by locking selected apps.",
    href: "https://apps.apple.com/us/app/steps-screen-time-control/id6755275144",
    imgSrc: "/stepsCover.png",
    imgAlt: "Steps app artwork showing a walking path and the app character",
    imageClassName: "object-cover",
    action: "steps",
  },
  {
    title: "Ethocal",
    category: "Product design · Figma prototype",
    description:
      "A mobile marketplace concept for discovering local yard sales, thrift stores, and ethical brands.",
    href: "https://devpost.com/software/ethocal",
    imgSrc: "/ethocal-hero.png",
    imgAlt: "Ethocal logo beside two mobile app screens",
    imageClassName: "object-cover",
    action: "ethocal",
  },
  {
    title: "StrideScribe",
    category: "Fitness · Running tracker",
    description:
      "GPS-based iOS app for tracking runs and reviewing workout stats.",
    href: "https://www.notion.so/StrideScribe-Documentation-30ede2abd6a0807eaf39f86e454ddcaa?source=copy_link",
    imgSrc: "/strideScribeCover.png",
    imgAlt: "StrideScribe artwork showing a runner on a route",
    imageClassName: "object-cover",
    action: "stridescribe",
  },
  {
    title: "AlphaTuring",
    category: "Robotics software",
    description:
      "Software for an autonomous search-and-rescue robot that locates survivors, guides first aid, and alerts responders.",
    href: "https://devpost.com/software/alphaturing",
    imgSrc: "/alphaTurringIcon.jpg",
    imgAlt: "AlphaTuring rover platform used by the software project",
    imageClassName: "object-cover",
    action: "alphaturing",
  },
];

function ProjectCard({
  title,
  category,
  description,
  href,
  imgSrc,
  imgAlt,
  imageClassName,
  onOpen,
}) {
  const cardClassName =
    "group flex flex-col overflow-hidden rounded-[2rem] bg-[#0b3f52]/80 text-left shadow-2xl shadow-black/25 ring-1 ring-emerald-100/15 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-[#0b3f52]/95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70";

  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#dce9d4] sm:aspect-[16/10]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`h-full w-full transition duration-500 group-hover:scale-105 ${imageClassName}`}
        />

        <span className="absolute bottom-4 right-4 rounded-full bg-[#0b3f52]/85 px-4 py-2 text-xs font-semibold text-emerald-50 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          Open project ↗
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfff8f]/80">
          {category}
        </p>
        <h2 className="mt-3 text-lg font-semibold text-emerald-50 drop-shadow-lg sm:text-xl">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-emerald-50/80">
          {description}
        </p>
        <span className="mt-5 text-sm font-semibold text-[#dfff8f]">
          View project <span aria-hidden="true">↗</span>
        </span>
      </div>
    </>
  );

  if (onOpen) {
    return (
      <button type="button" onClick={onOpen} className={cardClassName}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cardClassName}
    >
      {content}
    </a>
  );
}

export default function PortfolioPage({
  onBack,
  onOpenSteps,
  onOpenStrideScribe,
  onOpenAlphaTuring,
  onOpenEthocal,
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
        className="pointer-events-none absolute inset-0 z-[15] bg-black/30"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-[10] h-[70vh] w-full bg-gradient-to-t from-[#318BAA] via-[#318BAA]/20 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-[90vh] z-[10] min-h-[120vh] w-full bg-gradient-to-b from-[#318BAA] via-[#1D6F87] to-[#0B3F52]"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-[90vh] z-[11] min-h-[120vh] w-full bg-gradient-to-b from-transparent via-[#0E5066]/35 to-[#062F3F]/85"
      />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pb-24">
        <header className="pt-6">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full px-1 py-2 text-sm font-semibold text-emerald-50/85 drop-shadow transition hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70"
          >
            ← Back home
          </button>

          <div className="max-w-2xl pb-16 pt-20 sm:pt-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfff8f]/85">
              A small collection of things I&apos;ve built
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-emerald-50 drop-shadow-2xl sm:text-7xl">
              Selected work
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-emerald-50/80 sm:text-lg">
              From iOS apps to robotics software, these projects are how I like
              to turn useful ideas into something people can interact with.
            </p>
          </div>
        </header>

        <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              onOpen={
                project.action === "steps"
                  ? onOpenSteps
                  : project.action === "stridescribe"
                  ? onOpenStrideScribe
                  : project.action === "alphaturing"
                  ? onOpenAlphaTuring
                  : project.action === "ethocal"
                  ? onOpenEthocal
                  : undefined
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
}
