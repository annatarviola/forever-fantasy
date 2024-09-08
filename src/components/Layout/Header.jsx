import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Forever Fantasy</h1>
          <h2>live piano</h2>
        </div>
        <div className={styles.nav}>
          <button className={styles.nav_btn}>about</button>
          <button className={styles.nav_btn}>events</button>
          <button className={styles.nav_btn}>repertoire</button>
          <button className={styles.nav_btn}>contact</button>
        </div>
      </div>
    </>
  );
};

export default Header;
