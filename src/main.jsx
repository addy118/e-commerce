import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./Shop.jsx";
import QtySelector from "./components/QtySelector.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Shop />
  </StrictMode>
);
