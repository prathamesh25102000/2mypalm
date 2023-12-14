import React from "react";
import Image from "next/image";
import reminderImg from "../assets/reminder_image.png";
import styles from "../styles/GuaranteeRenewal.module.css";
import DoneIcon from "@mui/icons-material/Done";
import { guaranteeFeatures } from "@/commons/constants";
import { isMobileView } from "@/commons/constants";

const GuaranteeRenewal = () => {
  let isDeskViewPort: boolean = !isMobileView();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {isDeskViewPort && (
          <Image alt="" src={reminderImg} height={389} width={420} />
        )}
        <div className={styles.innerDiv}>
          <div>
            <h1 className={styles.heading}>
              Set Reminders for Guarantee Renewal
            </h1>
            <div className={styles.grid}>
              {guaranteeFeatures?.map((item: any, i: number) => (
                <div key={i} className={styles.feature}>
                  <div className={styles.flex2}>
                    <DoneIcon className={styles.checkIcon} />
                    <h2 className={styles.primaryHeading}>
                      {item?.title || ""}
                    </h2>
                  </div>
                  <p className={styles.secondaryHeading}>
                    {item?.subTitle || ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {!isDeskViewPort && (
            <div className={styles.imgDiv}>
            <Image alt="" src={reminderImg} height={303} width={327}  />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuaranteeRenewal;
