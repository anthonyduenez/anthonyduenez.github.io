const LINKS = [
  {
    label: "View my projects",
    action: "portfolio",
    featured: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anthonyduenezramirez/",
  },
  {
    label: "GitHub",
    href: "https://github.com/anthonyduenez",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
  },
];

const lilypadButtonClassName = `
  group relative flex min-h-20 w-full items-center justify-center overflow-hidden
  rounded-3xl bg-[#4f7908] px-8 py-5 text-lg font-semibold text-[#efffcf]
  shadow-xl shadow-black/25 transition duration-300
  hover:-translate-y-1 hover:scale-[1.02]
  focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200/70
`;

function LilypadButton({ children, href, onClick, featured = false }) {
  const isMailLink = href?.startsWith("mailto:");
  const buttonClassName = `${lilypadButtonClassName} ${
    featured ? "ring-2 ring-[#dfff8f]/70 ring-offset-2 ring-offset-[#1D6F87]" : ""
  }`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-b ${
          featured
            ? "from-[#8dbd25] via-[#6e9d14] to-[#4f7908]"
            : "from-[#638b0f] via-[#4f7908] to-[#315706]"
        }`}
      />

      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-12 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7fa91d]/50 blur-xl"
      />

      <span
        aria-hidden="true"
        className="absolute left-4 top-4 h-8 w-24 rounded-full bg-[#3f6507]/45 blur-sm"
      />

      <span className="relative z-10 drop-shadow-md">{children}</span>
    </>
  );

  if (onClick) {
    return <button type="button" onClick={onClick} className={buttonClassName}>{content}</button>;
  }

  return (
    <a
      href={href}
      target={isMailLink ? undefined : "_blank"}
      rel={isMailLink ? undefined : "noreferrer"}
      className={buttonClassName}
    >
      {content}
    </a>
  );
}

export default function Links({ onOpenPortfolio }) {
  return (
    <div className="relative z-20 mx-auto flex w-full max-w-md flex-col gap-5 px-6">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-emerald-50/70">
        Find me online
      </p>
      {LINKS.map((link) => (
        <LilypadButton
          key={link.label}
          href={link.href}
          onClick={link.action === "portfolio" ? onOpenPortfolio : undefined}
          featured={link.featured}
        >
          {link.label}
        </LilypadButton>
      ))}
    </div>
  );
}
