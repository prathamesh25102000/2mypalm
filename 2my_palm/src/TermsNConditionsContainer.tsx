import React from "react";
import img from "../assets/terms&conditions.png";
import Image from "next/image";
import styles from "../styles/TermsNConditions.module.css";
import { isMobileView } from "@/commons/constants";
import Window from "@/commons/windowDimensions";

const TermsNConditionsContainer = () => {
  let isMobileViewport: boolean = isMobileView();
  let windowWidth = Window().width;
  let isTabViewport: boolean = windowWidth < 1200 && windowWidth > 469;

  return (
    <div className={styles.termsNConditions}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1 className={styles.heading}>Terms & Conditions</h1>
          <p className={styles.text}>
            Welcome to 2MyPalm, where your use of our services is governed by
            the following terms and conditions.
          </p>
          <p className={styles.text}>
            By accessing and using 2MyPalm, you agree to comply with and be
            bound by these terms. Our services are designed for users aged 18
            and above, or with the consent of a legal guardian.
          </p>
        </div>
        <div className={styles.sideImgDiv}>
          <Image
            alt="terms_&_conditions_image"
            src={img}
            height={isMobileViewport ? 219 : isTabViewport ? 290 : 415}
            width={isMobileViewport ? 313 : isTabViewport ? 395 : 564}
            className={styles.sideImg}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsNConditionsContainer;
