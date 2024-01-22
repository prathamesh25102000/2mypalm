import React from "react";
import manageYourAssetsImg from "../assets/manage_your_assets_image.png";
import styles from "../styles/ManageAssets.module.css";
import Image from "next/image";
import Window from "@/commons/windowDimensions";

const ManageYourAssets = () => {
  let isTabViewport: boolean = Window().width<770;

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {!isTabViewport&& (
          <Image
            alt=""
            src={manageYourAssetsImg}
            width={418}
            height={505}
            className={styles.img}
          />
        )}
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Manage Your Assets</h1>
          <div className={styles.secondaryContent}>
            <p className={styles.secondaryText}>
              Effortlessly manage your assets with 2MyPalm, where simplicity
              meets control.
            </p>
            <p className={styles.secondaryText}>
              Our intuitive platform empowers you to oversee and organize your
              assets with ease, providing a seamless experience in tracking,
              monitoring, and optimizing your valuable possessions.
            </p>
            <p className={styles.secondaryText}>
              From electronic gadgets to personal belongings, 2MyPalm is your
              go-to solution for efficient asset management, ensuring you stay
              in command of what matters most.
            </p>
          </div>
        </div>
        {isTabViewport && (
          <div className={styles.imgDiv}>
          <Image
            alt=""
            src={manageYourAssetsImg}
            width={262}
            height={317}
            className={styles.img}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageYourAssets;
