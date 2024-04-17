import React from "react";
import styles from "../../styles/Home.module.css";
import BG from "../../images/computer.jpeg";

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024 </div>
          <h1 className={styles.head}> Apple MacBook Pro "13.3"  1200$</h1>
          <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
