import React from "react";
import styles from "../styles/Header.module.css";
import { routes } from "@/commons/constants";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MUIDrawer from "./Drawer";
import { logAnalyticsEvent } from "@/analytics";
import Window from "@/commons/windowDimensions";

const Header = () => {
  let showDesktopHeader: boolean = Window().width > 690;

  return (
    <>
      {showDesktopHeader ? (
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
            <Link
              href="/#download"
              onClick={() => logAnalyticsEvent("downloadAction")}
            >
              <button className={styles.downloadBtn}>Download</button>
            </Link>
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
