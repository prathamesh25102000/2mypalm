import React from "react";
import styles from "../styles/Header.module.css";
import { routes } from "@/commons/constants";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { isMobileView } from "@/commons/constants";
import MUIDrawer from "./Drawer";
import { logAnalyticsEvent } from "@/analytics";

const Header = () => {
  let isDesktopViewport: boolean = !isMobileView();

  return (
    <>
      {isDesktopViewport ? (
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <Link
              href={"/"}
              onClick={() =>
                logAnalyticsEvent("pageView", {
                  route: "Home",
                })
              }
            >
              <Image
                className={styles.logo}
                alt="logo"
                src={logo}
                width={102}
                height={28}
              />
            </Link>
            <div>
              <ul className={styles.list}>
                {routes.map((item: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={item?.path || "/"}
                      className={styles.listElement}
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
            <button
              className={styles.downloadBtn}
              onClick={() => logAnalyticsEvent("downloadAction")}
            >
              Download
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.mobileHeader}>
          <Link
            href={"/"}
            onClick={() =>
              logAnalyticsEvent("pageView", {
                route: "Home",
              })
            }
          >
            <Image alt="logo" src={logo} width={102} height={28} />
          </Link>
          <MUIDrawer />
        </div>
      )}
    </>
  );
};

export default Header;
