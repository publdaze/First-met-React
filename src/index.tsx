import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import AttendanceBook from "./chapter_10/AttendanceBook";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AttendanceBook />
    </ThemeProvider>
  </React.StrictMode>
);
