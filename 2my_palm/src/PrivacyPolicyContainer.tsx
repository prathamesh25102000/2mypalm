import React from "react";
import Image from "next/image";
import privacyPolicyImg from "../assets/privacy_policy.svg";
import styles from "../styles/PrivacyPolicy.module.css";
import { isMobileView } from "@/commons/constants";
import Window from "@/commons/windowDimensions";

const PrivacyPolicyContainer = () => {
  let isMobileViewport: boolean = isMobileView();
  let windowWidth: number = Window().width;

  let isTabViewport: boolean = windowWidth > 469 && windowWidth < 950;

  return (
    <div className={styles.privacyPlicies}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1 className={styles.heading}>Privacy & Policy</h1>
          <p className={styles.text}>
            Thank you for choosing 2MyPalm, an app designed to manage the
            lifecycle of your guaranteed and warranted products. We understand
            the importance of your privacy, and we are committed to protecting
            the information you provide. This Privacy Policy outlines the types
            of personal information we collect, how we use it, and the measures
            we take to safeguard your data.
          </p>
          <p className={styles.text}>
            By using the 2MyPalm app, you agree to the terms outlined in this
            Privacy Policy.
          </p>
        </div>
        <div className={styles.sideImg}>
          <Image
            alt="privacy_policy_image"
            src={privacyPolicyImg}
            height={isMobileViewport ? 243 : isTabViewport ? 325 : 465}
            width={isMobileViewport ? 251 : isTabViewport ? 336 : 480}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContainer;
