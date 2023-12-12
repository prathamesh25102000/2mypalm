import React from "react";
import homeImg from "../assets/home_image.png";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const WelcomeContainer = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.mainContent}>
            <p className={styles.subTitle}>Welcome To 2MyPalm</p>
          <h1 className={styles.heading}>Smart App to Manage Your Assets</h1>
          <p className={styles.text}>Step into a realm where ownership becomes an art. 2mypalm empowers you to effortlessly manage, secure, and elevate your tech experience. Unleash control, embrace peace</p>
        </div>
        <div className={styles.sideImg}>
          <Image
            alt="welcome to 2myPalm image"
            src={homeImg}
            height={471}
            width={595}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
