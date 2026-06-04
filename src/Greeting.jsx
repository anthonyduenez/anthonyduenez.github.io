import { useEffect, useState } from "react";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good afternoon";
  if (hour >= 18 && hour < 22) return "Good evening";

  return "Good night";
}

export default function Greeting() {
  const [greeting, setGreeting] = useState(getGreeting);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60_000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="absolute left-1/2 top-[16vh] z-20 w-full -translate-x-1/2 px-6 text-center text-5xl font-bold tracking-wide text-emerald-50 drop-shadow-2xl sm:text-6xl">
      {greeting}
    </h2>
  );
}
