import React from "react";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import DoneIcon from "@mui/icons-material/Done";
import PrivacyPolicyContainer from "@/src/PrivacyPolicyContainer";
import { privacyPolicies, collectedInformation, usedInformation } from "@/commons/constants";
import styles from "../styles/PrivacyPolicy.module.css";

export default function PrivacyPloicy() {
  return (
    <>
      <Header />
      <PrivacyPolicyContainer />
      <div className={styles.textContentDiv}>
        <div className={styles.textContent}>
          <div>
            <h1 className={styles.primaryText}>Information We Collect</h1>
            {collectedInformation.map((item: any, i: number) => (
              <div key={i} className={styles.policy}>
                <h2 className={styles.primaryHeading}>
                  {i + 1}. {item?.name || ""}
                </h2>
                {(item?.details || []).map((text: string, j: number) => (
                  <p key={j} className={styles.detailsText}>
                    - {text || ""}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div>
            <h1 className={styles.primaryText}>How We Use Your Information</h1>
            <p className={styles.secondaryText}>We use the collected information for the following purposes:</p>
            {usedInformation.map((item: any, i: number) => (
              <div key={i} className={styles.policy}>
                <h2 className={styles.primaryHeading}>
                  {i + 1}. {item?.name || ""}
                </h2>
                {(item?.details || []).map((text: string, j: number) => (
                  <p key={j} className={styles.detailsText}>
                    - {text || ""}
                  </p>
                ))}
              </div>
            ))}
          </div>
          {privacyPolicies?.map((item: any, i: number) => (
            <div key={i} className={styles.policy}>
              <div className={styles.flex}>
                <DoneIcon className={styles.checkIcon} />
                <h2 className={styles.primaryHeading}>{item?.title || ""}</h2>
              </div>
              <p className={styles.secondaryHeading}>{item?.subTitle || ""}</p>
            </div>
          ))}
          <p className={`${styles.primaryHeading} ${styles.policy}`}>
            Changes to this Privacy Policy
          </p>
          <p className={styles.secondaryText}>
            We reserve the right to update and modify this Privacy Policy to
            reflect changes in our practices or for other operational, legal, or
            regulatory reasons. We encourage you to review this Privacy Policy
            periodically.
          </p>
          <p className={styles.footerText}>
            By using the 2MyPalm app, you agree to the terms outlined in this
            Privacy Policy. If you do not agree with these terms, please refrain
            from using the app.
          </p>
          <p className={styles.email}>contact@2mypalm.com</p>
          <p className={styles.footerText}>
            Thank you for trusting 2MyPalm with your information.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
