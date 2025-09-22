import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Button } from "./ui/Button.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Button />
  </StrictMode>
);
