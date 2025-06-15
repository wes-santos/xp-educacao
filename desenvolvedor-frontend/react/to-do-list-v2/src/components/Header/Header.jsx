import styles from "./Header.module.css";
import { ReactComponent as SunIcon } from "../../images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../images/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      {theme === "light" ? (
        <SunIcon className={styles.themeToggle} onClick={toggleTheme} />
      ) : (
        <MoonIcon className={styles.themeToggle} onClick={toggleTheme} />
      )}
    </header>
  );
}

export default Header;
