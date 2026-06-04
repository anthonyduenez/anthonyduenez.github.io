const FIREFLIES = [1, 2, 3, 4, 5, 6];

export default function FireflyFrame({ children }) {
  return (
    <div className="relative flex items-center justify-center">
      {FIREFLIES.map((number) => (
        <span
          key={number}
          aria-hidden="true"
          className={`firefly firefly-${number}`}
        />
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
