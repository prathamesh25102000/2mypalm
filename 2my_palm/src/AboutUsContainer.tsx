import React from "react";
import aboutUsImg from "../assets/about_us_img.png";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import { isMobileView } from "@/commons/constants";
import Window from "@/commons/windowDimensions";

const AboutUsContainer = () => {
  let isMobileViewport: boolean = isMobileView();
  let windowWidth = Window().width;
  let isTabViewport: boolean = windowWidth < 1200 && windowWidth > 469;

  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.text}>
            At 2mypalm, we believe in simplifying the way you engage with your
            electronic devices.
          </p>
          <p className={styles.text}>
            Founded with a passion for seamless experiences, our mission is to
            empower users to effortlessly manage, protect, and optimize their
            valuable assets.
          </p>
        </div>
        <div className={styles.sideImg}>
          <Image
            alt="about_us_image"
            src={aboutUsImg}
            height={isMobileViewport ? 231 : isTabViewport ? 325 : 464}
            width={isMobileViewport ? 316 : isTabViewport ? 410 : 585}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
