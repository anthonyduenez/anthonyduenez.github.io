import { useState } from "react";

const RUBS_TO_BLUSH = 8;

export default function FrogProfile({ imgSrc = "/headshot.PNG" }) {
  const [isClosed, setIsClosed] = useState(false);
  const [isBlushing, setIsBlushing] = useState(false);
  const [rubCount, setRubCount] = useState(0);

  function handleRub() {
    if (!isClosed) return;

    setRubCount((currentCount) => {
      const nextCount = currentCount + 1;

      if (nextCount >= RUBS_TO_BLUSH) {
        setIsBlushing(true);
      }

      return nextCount;
    });
  }

  function handleToggleMouth() {
    setIsClosed((currentValue) => {
      const nextValue = !currentValue;

      if (!nextValue) {
        setIsBlushing(false);
        setRubCount(0);
      }

      return nextValue;
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggleMouth}
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
          ${isClosed ? "opacity-0" : "opacity-100"}
        `}
      />

      <img
        src={isClosed ? "/frog-closed.png" : "/frog-open.png"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain transition-transform duration-200 active:scale-95"
      />

      {/* Blush effect */}
      <span
        aria-hidden="true"
        className={`
          absolute left-[58px] top-[130px] z-20 h-7 w-10 rounded-full
          bg-pink-300/70 blur-[1px] transition duration-300
          ${isBlushing ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      />

      <span
        aria-hidden="true"
        className={`
          absolute right-[58px] top-[130px] z-20 h-7 w-10 rounded-full
          bg-pink-300/70 blur-[1px] transition duration-300
          ${isBlushing ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      />
    </button>
  );
}
