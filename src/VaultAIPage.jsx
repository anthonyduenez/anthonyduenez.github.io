import { CaseStudyPage, DocSection } from "./components/CaseStudyPage.jsx";

const WORKFLOW = [
  {
    number: "01",
    title: "Import the paperwork",
    description:
      "Checks, receipts, invoices, contracts, policies, and scans enter through one local intake flow with preflight checks before processing.",
  },
  {
    number: "02",
    title: "Extract with evidence",
    description:
      "Rules, OCR, and the local model identify fields and obligations while preserving source line IDs and exact quotes for every important answer.",
  },
  {
    number: "03",
    title: "Review and act",
    description:
      "Validated records land in an approval queue, with warnings surfaced for a human before deadlines are tracked or data is exported.",
  },
];

const TECHNICAL_NOTES = [
  {
    title: "Local model infrastructure",
    description:
      "VaultAI runs Nemotron through vLLM on an ASUS Ascent GX10, keeping the model endpoint and document workflow on the local machine.",
  },
  {
    title: "Defensive document intake",
    description:
      "Byte-level preflight checks, sandboxed parsing, OCR, file limits, and duplicate detection protect the pipeline before a document reaches extraction.",
  },
  {
    title: "Grounded structured output",
    description:
      "The model returns structured JSON, but values are accepted only when they cite an exact source line and pass deterministic validation rules.",
  },
  {
    title: "Human-controlled action",
    description:
      "Warnings and uncertain records stop in review. Approved records can then feed the Action Center or export to XLSX and CSV on the device.",
  },
];

const DEVPOST_URL = "https://devpost.com/software/vaultai-upg79r";
const GITHUB_URL = "https://github.com/anthonyduenez/VaultAI";
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/WMNxXEm4ZMg?rel=0";
const DEMO_VIDEO_PAGE_URL = "https://www.youtube.com/watch?v=WMNxXEm4ZMg";

export default function VaultAIPage({ onBack }) {
  return (
    <CaseStudyPage
      onBack={onBack}
      kicker="Local AI · Document intelligence · Hackathon project"
      title="VaultAI"
      description="A local-first document AI system that turns business paperwork into verified records while keeping sensitive files on the machine."
      heroSrc="/vaultai-cover.svg"
      heroAlt="VaultAI local document intelligence cover"
      heroBackgroundClassName="bg-[#0f1b2d]"
    >

        <section className="rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            At a glance
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            From paperwork to verified action
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50] sm:text-lg">
            VaultAI helps businesses process checks, receipts, invoices,
            contracts, policies, and scanned documents locally. It extracts
            structured fields, identifies obligations and deadlines, and keeps
            every important answer tied to evidence from the original file.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-[#315b50]/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Role
              </dt>
              <dd className="mt-2 font-semibold">Full-stack team project</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Built with
              </dt>
              <dd className="mt-2 font-semibold">
                React · TypeScript · Python · Nemotron
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Focus
              </dt>
              <dd className="mt-2 font-semibold">Local AI · OCR · Review</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Status
              </dt>
              <dd className="mt-2 font-semibold">GX10 hackathon prototype</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEVPOST_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View the Devpost project ↗
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              View the GitHub repository ↗
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/25 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
              Software in action
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Automate the routine. Surface the risky.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#315b50] sm:text-lg">
              The model suggests. The system validates. A person makes the
              final decision. VaultAI is designed around that handoff so local
              AI can be useful without becoming a black box.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#0b3f52] shadow-2xl shadow-[#183f54]/20 ring-1 ring-[#315b50]/20">
            <iframe
              src={DEMO_VIDEO_URL}
              title="VaultAI software demonstration video"
              className="aspect-video w-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#315b50]">
            Watch the team&apos;s local document workflow in action.{" "}
            <a
              href={DEMO_VIDEO_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#183f54] underline decoration-[#557a63]/60 underline-offset-4 hover:text-[#0d3041]"
            >
              Open the video directly ↗
            </a>
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#e6dfc9] p-5 ring-1 ring-[#557a63]/15">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Local
              </p>
              <h3 className="mt-3 text-xl font-semibold">Keep data close</h3>
              <p className="mt-3 text-sm leading-6 text-[#315b50]">
                Documents and extracted values stay on the local system instead
                of being sent to a cloud API.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#e6dfc9] p-5 ring-1 ring-[#557a63]/15">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Grounded
              </p>
              <h3 className="mt-3 text-xl font-semibold">Show the evidence</h3>
              <p className="mt-3 text-sm leading-6 text-[#315b50]">
                Important answers point back to exact source lines so reviewers
                can understand where a value came from.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#e6dfc9] p-5 ring-1 ring-[#557a63]/15">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#557a63]">
                Human-led
              </p>
              <h3 className="mt-3 text-xl font-semibold">Review before action</h3>
              <p className="mt-3 text-sm leading-6 text-[#315b50]">
                Uncertain or risky records stop in a review queue before they
                become tracked obligations or exports.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DocSection eyebrow="The why" title="Make local AI accountable">
            <p>
              Business documents contain sensitive information, but teams
              still need to turn them into decisions. VaultAI explores a local
              workflow where privacy is part of the architecture and evidence
              is part of the user experience.
            </p>
          </DocSection>

          <DocSection eyebrow="The flow" title="A document-to-decision loop">
            <p>
              The system moves from intake to parsing, extraction, validation,
              review, and export. Each stage narrows uncertainty before the
              next action is allowed.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {WORKFLOW.map((item) => (
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

          <DocSection eyebrow="Reflection" title="Trust is a product feature">
            <p>
              VaultAI treats privacy, traceability, and human review as part of
              the product rather than as infrastructure details hidden behind
              the interface.
            </p>
            <p className="mt-5">
              The result is a clearer relationship between automation and
              responsibility: the system can move quickly, but it still shows
              its work and leaves the final decision with a person.
            </p>
          </DocSection>
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#f2eddc] p-6 text-[#173e38] shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#557a63]">
            Project context
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            A local-first document workflow
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#315b50]">
            VaultAI was built as a team hackathon project around an ASUS Ascent
            GX10 and a local Nemotron model. The React and TypeScript frontend
            connects to a Python backend that handles parsing, OCR, extraction,
            validation, review, obligations, and exports without relying on a
            cloud database for permanent document storage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={DEVPOST_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#183f54] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-lg transition hover:-translate-y-1 hover:bg-[#0d3041] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Read the Devpost project ↗
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border-2 border-[#183f54]/20 px-5 py-3 text-sm font-semibold text-[#183f54] transition hover:-translate-y-1 hover:border-[#183f54]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#557a63]/50"
            >
              Explore the repository ↗
            </a>
          </div>
        </section>
    </CaseStudyPage>
  );
}
