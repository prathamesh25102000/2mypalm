import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { companySectionLinks } from "@/commons/constants";
import Link from "next/link";
import AppleIcon from "@mui/icons-material/Apple";
import { isMobileView } from "@/commons/constants";
import playStoreIcon from "../assets/playStore_icon.svg";
import { logAnalyticsEvent } from "@/analytics";

const Footer = () => {
  let isMobileViewport: boolean = isMobileView();

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
              <Image alt="logo" src={logo} width={102} height={28} />
              <p className={styles.text}>
                Welcome to 2MyPalm, where we bring peace of mind to electronic
                enthusiasts.
              </p>
              <div className={styles.iconsDiv}>
                <div className={styles.icon}>
                  <FacebookOutlinedIcon className={styles.facebookIcon} />
                </div>
                <div className={styles.icon}>
                  <TwitterIcon className={styles.twitterIcon} />
                </div>
                <div className={styles.icon}>
                  <InstagramIcon className={styles.instagramIcon} />
                </div>
                <div className={styles.icon}>
                  <LinkedInIcon className={styles.linkedinIcon} />
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.title}>Company</h3>
              <ul className={styles.list}>
                {companySectionLinks.map((item: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={item?.path || "/"}
                      className={styles.link}
                      onClick={() =>
                        logAnalyticsEvent("pageView", {
                          route: item?.name || "/",
                        })
                      }
                    >
                      {item?.name || ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.title}>Get In Touch</h3>
              <p className={styles.footerText}>Support@2mypalm.com</p>
              <p className={styles.footerText}> +91 9876543210</p>
              <p className={styles.footerText}> Address goes here</p>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.downloadSection}>
              <div className={styles.appStore}>
                <AppleIcon className={styles.AppleIcon} />
                <p className={styles.downloadText}>Download for iOS</p>
              </div>
              <div className={styles.playStore}>
                <Image
                  src={playStoreIcon}
                  alt={""}
                  height={18}
                  width={16}
                  className={styles.playStoreIcon}
                />
                <p className={styles.downloadText}>Download for Android</p>
              </div>
            </div>
            {!isMobileViewport && (
              <p className={styles.copyrightText}>
                Copyright &copy; 2023 2MyPalm. All rights reserved.
              </p>
            )}
          </div>
          {isMobileViewport && (
            <p className={styles.copyrightText}>
              Copyright &copy; 2023 2MyPalm. All rights reserved.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

