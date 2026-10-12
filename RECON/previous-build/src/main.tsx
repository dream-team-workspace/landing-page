import { createRoot } from "react-dom/client";
import App from "./App";

// Fonts first, then the design system — the same cascade order the previous
// <link> tags used in index.html.
import "../assets/fonts/fonts.css";
import "../assets/site.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Dream Team site: #root container is missing from index.html");
}

createRoot(container).render(<App />);
