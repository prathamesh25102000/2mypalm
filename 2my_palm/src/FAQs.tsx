import React from "react";
import styles from "../styles/FAQs.module.css";
import { FAQS } from "@/commons/constants";
import BasicAccordion from "./Accordion";

const FAQs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      {FAQS.map((item: any, ind: number) => (
        <BasicAccordion
          title={item?.question || ""}
          textContent={item?.answer || ""}
          id={ind + 1}
          key={ind}
        />
      ))}
    </div>
  );
};

export default FAQs;
