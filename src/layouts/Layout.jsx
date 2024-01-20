import styles from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <p><a href="#">Botostart</a> | botostart full course </p>
      </header>
      {children}
      <footer className={styles.footer}><p>
      Developed by sanaz</p>
      </footer>

    </>
  );
}

export default Layout;