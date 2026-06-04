import { useState } from "react";

import HomePage from "./HomePage.jsx";
import PortfolioPage from "./PortfolioPage.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "portfolio") {
    return <PortfolioPage onBack={() => setPage("home")} />;
  }

  return <HomePage onOpenPortfolio={() => setPage("portfolio")} />;
}