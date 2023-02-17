import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import Calculator from "./chapter_12/Calculator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  </React.StrictMode>
);
