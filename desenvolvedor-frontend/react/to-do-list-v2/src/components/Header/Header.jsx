import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <img src="/images/icon-sun.svg" alt="sun icon" className={styles.themeToggle} />
    </header>
  )
}

export default Header