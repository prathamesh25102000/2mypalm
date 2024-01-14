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
            At 2MyPalm, we take your privacy seriously. Our commitment is to
            ensure the security and confidentiality of any personal information
            you provide.
          </p>
          <p className={styles.text}>
            We collect only the necessary data required to enhance your
            experience with our app.
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
