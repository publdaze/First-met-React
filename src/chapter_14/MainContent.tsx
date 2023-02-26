import { useContext } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import ThemeContext from "./ThemeContext";

function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className="flex items-center">
        <Button
          className="p-2 mr-4"
          variant="outlined"
          color="cyan"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </Button>
        <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
      </div>
    </div>
  );
}

export default MainContent;
