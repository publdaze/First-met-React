import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import Accommodate from "./chapter_07/Accommodate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Accommodate />
    </ThemeProvider>
  </React.StrictMode>
);
