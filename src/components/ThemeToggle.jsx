import { useState, useEffect } from "react";
import Styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className={Styles.switch}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className={Styles.slider}></span>
    </label>
  );
}

export default ThemeToggle;
