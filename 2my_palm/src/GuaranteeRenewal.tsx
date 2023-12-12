import React from "react";
import Image from "next/image";
import reminderImg from "../assets/reminder_image.png";
import styles from "../styles/GuaranteeRenewal.module.css";
import DoneIcon from "@mui/icons-material/Done";
import { guaranteeFeatures } from "@/commons/constants";

const GuaranteeRenewal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Image alt="" src={reminderImg} height={389} width={420} />
        <div>
          <h1 className={styles.heading}>
            Set Reminders for Guarantee Renewal
          </h1>
          <div className={styles.grid}>
            {guaranteeFeatures?.map((item: any, i: number) => (
              <div key={i} className={styles.feature}>
                <div className={styles.flex2}>
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
      </div>
    </div>
  );
};

export default GuaranteeRenewal;
