import styles from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <p><a href="#"> Dictionary Books App </a> | Using Search Box </p>
      </header>
      {children}
      <footer className={styles.footer}><p>
      Developed by sanaz</p>
      </footer>

    </>
  );
}

export default Layout;