import React from "react";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import DoneIcon from "@mui/icons-material/Done";
import PrivacyPolicyContainer from "@/src/PrivacyPolicyContainer";
import { privacyPolicies } from "@/commons/constants";
import styles from "../styles/PrivacyPolicy.module.css";

export default function PrivacyPloicy() {
  return (
    <>
      <Header />
      <PrivacyPolicyContainer />
      <div className={styles.textContent}>
        {privacyPolicies?.map((item: any, i: number) => (
          <div key={i} className={styles.policy}>
            <div className={styles.flex}>
              <DoneIcon className={styles.checkIcon} />
              <h2 className={styles.primaryHeading}>{item?.title || ""}</h2>
            </div>
            <p className={styles.secondaryHeading}>{item?.subTitle || ""}</p>
          </div>
        ))}
        <p className={styles.footerText}>
          By using 2MyPalm, you agree to the terms outlined in this privacy
          policy. If you have any questions or concerns, please contact us at
        </p>
        <p className={styles.email}>contact@2mypalm.com</p>
        <p className={styles.footerText}>
          Thank you for trusting 2MyPalm with your data security and privacy.
        </p>
      </div>
      <Footer />
    </>
  );
}
