import React from "react";
import findServiceCentersImg from "../assets/find_service_centers_image.png";
import Image from "next/image";
import styles from "../styles/FindServiceCenters.module.css";
import { isMobileView } from "@/commons/constants";

const FindServiceCenters = () => {
  let isMobileViewPort: boolean = isMobileView();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h1 className={styles.heading}>Find Service Centres</h1>
          <div className={styles.mainContent}>
            <p className={styles.secondaryText}>
              Discover convenience at your fingertips with 2MyPalm as we
              redefine the way you locate service centers.
            </p>
            <p className={styles.secondaryText}>
              Effortlessly find service centers for your electronic devices,
              appliances, and more, ensuring swift resolutions to your needs.
              Our user-friendly interface streamlines the process, making it
              simple to navigate and locate authorized service providers.
            </p>
            <p className={styles.secondaryText}>
              Trust 2MyPalm to be your reliable guide in connecting you to the
              right service centers, ensuring your products receive expert care
              and maintenance.
            </p>
          </div>
        </div>
        <div className={styles.imgDiv}>
        <Image
          alt=""
          src={findServiceCentersImg}
          height={isMobileViewPort ? 211 : 329}
          width={isMobileViewPort ? 303 : 472}
        />
        </div>
      </div>
    </div>
  );
};

export default FindServiceCenters;
