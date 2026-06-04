import FrogProfile from "./FrogProfile.jsx";

const projects = [
  {
    title: "Steps: Screen Time Control",
    description:
      "Steps is an iOS app that motivates users achieve their daily steps goal by locking away their apps.",
    href: "https://apps.apple.com/us/app/steps-screen-time-control/id6755275144",
    imgSrc: "/stepsIcon.png",
  },
  {
    title: "Ethocal",
    description:
      "Ethocal is a mobile application designed to allow people to easily discover local yard sales, thrift stores, and ethical brands.",
    href: "https://devpost.com/software/ethocal",
    imgSrc: "/ethocalIcon.jpg",
  },
  {
    title: "StrideScribe",
    description:
      "StrideScribe is a GPS-based iOS app for tracking runs and reviewing workout stats.",
    href: "https://www.notion.so/StrideScribe-Documentation-30ede2abd6a0807eaf39f86e454ddcaa?source=copy_link",
    imgSrc: "strideScribeIcon.png",
  },
];

function ProjectButton({ title, description, href, imgSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group relative flex flex-col items-center text-center
        transition duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70
      "
    >
      <div className="relative flex h-56 w-full items-center justify-center">
        <img
          src="/lilypad.png"
          alt=""
          aria-hidden="true"
          className="absolute z-0 w-64 opacity-95"
        />

        <div className="relative z-10 scale-90 transition duration-300 group-hover:scale-95">
          <FrogProfile imgSrc={imgSrc} />
        </div>
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-emerald-50 drop-shadow-lg">
        {title}
      </h2>

      <p className="mt-2 max-w-xs text-sm leading-6 text-emerald-50/85 drop-shadow">
        {description}
      </p>
    </a>
  );
}

export default function PortfolioPage({ onBack }) {
  return (
    <main className="relative overflow-hidden bg-[#318BAA] text-white">
      <section className="relative h-screen min-h-[760px] overflow-hidden">
        <img
          src="/swamp-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-[-10vh] h-[108%] w-full object-cover object-[center_75%]"
        />

        <div
          aria-hidden="true"
          className="
            absolute bottom-0 left-0 z-[10] h-[42vh] w-full
            bg-gradient-to-t from-[#318BAA] via-[#318BAA]/80 to-transparent
          "
        />

        <button
          type="button"
          onClick={onBack}
          className="
            absolute left-5 top-5 z-30
            rounded-full px-6 py-3
            text-lg font-semibold text-emerald-50
            drop-shadow
            transition hover:scale-110
          "
        >
          ← Back
        </button>

        <h1
          className="
            absolute left-1/2 top-[24vh] z-30 w-full -translate-x-1/2 px-6
            text-center text-5xl font-bold tracking-wide text-emerald-50
            drop-shadow-2xl sm:text-6xl
          "
        >
          Projects
        </h1>
      </section>

      <section
        className="
          relative min-h-[80vh] w-full
          bg-gradient-to-b from-[#318BAA] via-[#1D6F87] to-[#0B3F52]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-[1]
            bg-gradient-to-b from-transparent via-[#0E5066]/35 to-[#062F3F]/85
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute left-0 top-0 z-[2] h-[28vh] w-full
            bg-gradient-to-b from-[#318BAA]/70 to-transparent
          "
        />
      </section>

      <div
        className="
          absolute left-1/2 top-[46vh] z-20 grid w-full max-w-4xl
          -translate-x-1/2 grid-cols-1 gap-x-8 gap-y-10 px-6
          md:grid-cols-2
        "
      >
        {projects.map((project) => (
          <ProjectButton key={project.title} {...project} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[15] bg-black/30"
      />
    </main>
  );
}