import React from "react";
import TermsNConditionsContainer from "@/src/TermsNConditionsContainer";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import styles from "../styles/TermsNConditions.module.css";
import { termsAndConditions } from "@/commons/constants";
import DoneIcon from "@mui/icons-material/Done";

export default function TermsNconditions() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className={styles.containerDiv}>
          <TermsNConditionsContainer />
        </div>
        <div className={styles.textContentDiv}>
          <div className={styles.textContent}>
            {termsAndConditions.map((item: any, i: number) => (
              <div key={i} className={styles.term}>
                <div className={styles.flex}>
                  <DoneIcon className={styles.checkIcon} />
                  <h2 className={styles.primaryHeading}>{item?.title || ""}</h2>
                </div>
                <p className={styles.secondaryHeading}>
                  {item?.subTitle || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
