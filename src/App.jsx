import { useLayoutEffect, useState } from "react";

import AlphaTuringPage from "./AlphaTuringPage.jsx";
import EthocalPage from "./EthocalPage.jsx";
import HomePage from "./HomePage.jsx";
import PortfolioPage from "./PortfolioPage.jsx";
import StepsPage from "./StepsPage.jsx";
import StrideScribePage from "./StrideScribePage.jsx";

const PAGES = {
  HOME: "home",
  PORTFOLIO: "portfolio",
  STEPS: "steps",
  STRIDESCRIBE: "stridescribe",
  ALPHATURING: "alphaturing",
  ETHOCAL: "ethocal",
};

export default function App() {
  const [page, setPage] = useState(PAGES.HOME);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (page === PAGES.PORTFOLIO) {
    return (
      <PortfolioPage
        onBack={() => setPage(PAGES.HOME)}
        onOpenSteps={() => setPage(PAGES.STEPS)}
        onOpenStrideScribe={() => setPage(PAGES.STRIDESCRIBE)}
        onOpenAlphaTuring={() => setPage(PAGES.ALPHATURING)}
        onOpenEthocal={() => setPage(PAGES.ETHOCAL)}
      />
    );
  }

  if (page === PAGES.STEPS) {
    return <StepsPage onBack={() => setPage(PAGES.PORTFOLIO)} />;
  }

  if (page === PAGES.ALPHATURING) {
    return <AlphaTuringPage onBack={() => setPage(PAGES.PORTFOLIO)} />;
  }

  if (page === PAGES.ETHOCAL) {
    return <EthocalPage onBack={() => setPage(PAGES.PORTFOLIO)} />;
  }

  if (page === PAGES.STRIDESCRIBE) {
    return <StrideScribePage onBack={() => setPage(PAGES.PORTFOLIO)} />;
  }

  return <HomePage onOpenPortfolio={() => setPage(PAGES.PORTFOLIO)} />;
}
