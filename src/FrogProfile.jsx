import { useState } from "react";

export default function FrogProfile({ imgSrc = "/headshot.PNG" }) {
  const [closed, setClosed] = useState(false);
  const [blushing, setBlushing] = useState(false);
  const [rubCount, setRubCount] = useState(0);

  function handleRub() {
    if (!closed) return;

    setRubCount((current) => {
      const next = current + 1;

      if (next >= 8) {
        setBlushing(true);
      }

      return next;
    });
  }

  function toggleMouth() {
    setClosed((current) => {
      const next = !current;

      if (!next) {
        setBlushing(false);
        setRubCount(0);
      }

      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleMouth}
      onPointerMove={handleRub}
      className="relative mx-auto h-60 w-60 touch-none"
      aria-label="Toggle frog profile picture"
    >
      <img
        src={imgSrc}
        alt="Anthony Duenez Ramirez"
        className={`
          absolute left-1/2 top-1/2 h-30 w-30
          -translate-x-1/2 -translate-y-1/4
          rounded-full object-cover transition-opacity duration-200
          ${closed ? "opacity-0" : "opacity-100"}
        `}
      />

      <img
        src={closed ? "/frog-closed.png" : "/frog-open.png"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain transition-transform duration-200 active:scale-95"
      />

      <span
        aria-hidden="true"
        className={`
          absolute left-[58px] top-[130px] z-20 h-7 w-10 rounded-full
          bg-pink-300/70 blur-[1px]
          transition duration-300
          ${blushing ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      />

      <span
        aria-hidden="true"
        className={`
          absolute right-[58px] top-[130px] z-20 h-7 w-10 rounded-full
          bg-pink-300/70 blur-[1px]
          transition duration-300
          ${blushing ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      />
    </button>
  );
}