import { useState } from "react";

import HomePage from "./HomePage.jsx";
import PortfolioPage from "./PortfolioPage.jsx";

const PAGES = {
  HOME: "home",
  PORTFOLIO: "portfolio",
};

export default function App() {
  const [page, setPage] = useState(PAGES.HOME);

  if (page === PAGES.PORTFOLIO) {
    return <PortfolioPage onBack={() => setPage(PAGES.HOME)} />;
  }

  return <HomePage onOpenPortfolio={() => setPage(PAGES.PORTFOLIO)} />;
}
