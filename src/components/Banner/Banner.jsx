import React from "react";
import styles from "../../styles/Home.module.css";
import bannerImg from "../../images/sale.jpg";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          8 MARCH<span>SALE</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>
      <div
        className={styles.right}
        // style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <img src={bannerImg} className={styles.banner_img}/>
        <p className={styles.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
