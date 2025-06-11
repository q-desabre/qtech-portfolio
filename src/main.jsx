import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@utils/ThemeProvider.jsx";
import "./index.css";
import App from "./App.jsx";
import "./i18n"; // Import i18n configuration

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
