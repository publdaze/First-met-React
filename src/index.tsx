import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import ProfileCard from "./chapter_13/ProfileCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="m-20">
        <ProfileCard />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
