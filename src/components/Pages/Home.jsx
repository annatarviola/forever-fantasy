import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>LEVEL UP YOUR EVENT</h1>
        <h1 className={styles.subtitle1}>
          with timeless tunes you know and love
        </h1>
        <div className={styles.subtitle2}>
          <span>weddings</span>
          <span>•</span>
          <span>birthdays</span>
          <span>•</span>
          <span>special events</span>
        </div>
      </div>
    </>
  );
};

export default Home;
