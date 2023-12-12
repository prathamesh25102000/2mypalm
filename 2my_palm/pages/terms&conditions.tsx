import React from "react";
import TermsNConditionsContainer from "@/src/TermsNConditionsContainer";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import styles from "../styles/TermsNConditions.module.css";
import { termsAndConditions } from "@/commons/constants";
import DoneIcon from '@mui/icons-material/Done';

export default function TermsNconditions() {
  return (
    <>
      <Header />
      <TermsNConditionsContainer />
      <div className={styles.textContent}>
        <h2 className={`${styles.primaryHeading} ${styles.header}`}>Acceptance of Terms</h2>
        <p className={styles.secondaryHeading}>
          Use of 2MyPalm is subject to acceptance and compliance with these
          terms and conditions.
        </p>
        {termsAndConditions.map((item: any, i: number) => (
          <div key={i} className={styles.term}>
            <div className={styles.flex}>
              <DoneIcon className={styles.checkIcon} />
              <h2 className={styles.primaryHeading}>{item?.title || ""}</h2>
            </div>
            <p className={styles.secondaryHeading}>{item?.subTitle || ""}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
