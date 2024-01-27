import React from "react";
import styles from "../styles/DownloadSection.module.css";
import Image from "next/image";
import AppleIcon from "@mui/icons-material/Apple";
import QrCode from "../assets/QR_code.png";
import mobileImg from "../assets/2mypalm_mobile_asset.png";
import {
  isMobileView,
  playStoreIcon,
  playStoreUrl,
  appStoreUrl,
} from "@/commons/constants";
import Link from "next/link";
import { logAnalyticsEvent } from "@/analytics";

const DownloadSection = () => {
  let isMobile: boolean = isMobileView();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.header}>App is available </div>
        <div className={styles.header}>for free on app store</div>
        <div className={styles.subHeader}>
          Download 2myPalm today and manage your assets the smart way!
        </div>
        <div className={styles.downloadSection}>
          <Link
            href={appStoreUrl}
            target="_blank"
            className={styles.link}
            onClick={() =>
              logAnalyticsEvent("downloadAction", { platform: "app store" })
            }
          >
            <div className={styles.appStore}>
              <AppleIcon className={styles.appleIcon} />
              <p className={styles.downloadText}>Download for iOS</p>
            </div>
          </Link>
          <Link
            href={playStoreUrl}
            target="_blank"
            className={styles.link}
            onClick={() =>
              logAnalyticsEvent("downloadAction", { platform: "play store" })
            }
          >
            <div className={styles.playStore}>
              <Image
                src={playStoreIcon}
                alt={""}
                height={25}
                width={23}
                className={styles.playStoreIcon}
              />
              <p className={styles.downloadText}>Download for Android</p>
            </div>
          </Link>
        </div>
        <div className={styles.qrCodeSection}>
          <Image src={QrCode} height={155} width={155} alt="QR code" />
          <div className={styles.qrCodeText}>
            Scan QR to get the 2MyPalm app
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          className={styles.mobileImg}
          src={mobileImg}
          width={isMobile ? 202 : 393}
          height={isMobile ? 404 : 786}
          alt="mobile asset"
        />
      </div>
    </div>
  );
};

export default DownloadSection;
