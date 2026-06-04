import FrogProfile from "./FrogProfile.jsx";
import FireflyFrame from "./Firefly.jsx";
import Links from "./Links.jsx";
import Greeting from "./Greeting.jsx";

export default function HomePage({ onOpenPortfolio }) {
  return (
    <main className="relative overflow-hidden bg-[#318BAA] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[15] bg-black/30"
      />

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

        <Greeting />

        <section className="relative z-20 mx-auto flex h-full max-w-md flex-col items-center px-6 pt-[32vh] text-center">
          <div className="relative flex items-center justify-center">
            <img
              src="/lilypad.png"
              alt=""
              aria-hidden="true"
              className="absolute top-[16px] z-0 w-72 opacity-95"
            />

            <div className="relative z-10">
              <FireflyFrame>
                <FrogProfile />
              </FireflyFrame>
            </div>
          </div>

          <p className="mt-3 text-xs font-medium tracking-wide text-emerald-50/65 drop-shadow">
            click then rub
          </p>

          <h1 className="mt-12 text-3xl font-semibold drop-shadow-lg">
            Anthony Duenez Ramirez
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-50 drop-shadow">
            Friendly neighborhood Software Engineer student who loves building
            projects and trying new technologies.
          </p>
        </section>
      </section>

      <section
        className="
          relative min-h-[60vh] w-full
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

        <div className="relative z-20">
          <Links onOpenPortfolio={onOpenPortfolio} />
        </div>
      </section>
    </main>
  );
}