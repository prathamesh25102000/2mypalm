import React from "react";
import styles from "../styles/Header.module.css";
import { routes } from "@/commons/constants";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
    <div className={styles.header}>
        <Image className={styles.logo} alt="logo" src={logo} width={102} height={28} />
      <div>
        <ul className={styles.list}>
          {routes.map((item: any, i: number) => (
            <li key={i}>
              <Link href={item.path} className={styles.listElement}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.downloadBtn}>Download</button>
    </div>
    </div>
  );
};

export default Header;
