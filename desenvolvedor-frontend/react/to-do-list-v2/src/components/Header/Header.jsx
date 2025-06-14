import styles from "./Header.module.css";
import { ReactComponent as IconSun } from "../../images/icon-sun.svg"


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <IconSun className={styles.themeToggle} />
    </header>
  )
}

export default Header