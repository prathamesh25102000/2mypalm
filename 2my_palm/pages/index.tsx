import React from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import Image from "next/image";
import whyChoose2myPalmSectionImg from "../assets/why_choose_2mypalm_img.svg";
import WelcomeContainer from "@/src/WelcomeContainer";
import FeaturesSection from "@/src/FeaturesSection";
import ManageYourAssets from "@/src/ManageYourAssets";
import FindServiceCenters from "@/src/FindServiceCenters";
import GuaranteeRenewal from "@/src/GuaranteeRenewal";
import FAQs from "@/src/FAQs";
import { isMobileView } from "@/commons/constants";
import assetsIcon from "@/assets/manage_assets_icon.svg";
import serviceCentersIcon from "@/assets/service_centers_icon.svg";
import bellIcon from "@/assets/bell_icon.svg";

interface CardProps {
  icon: any;
  height: number;
  width: number;
  textContent: string;
}

export default function Home() {
  let isMobileViewport: boolean = isMobileView();

  const featurecardsData = [
    {
      icon: assetsIcon,
      height: isMobileViewport ? 26 : 52,
      width: isMobileViewport ? 26 : 52,
      textContent: "Manage Your Assets",
    },
    {
      icon: serviceCentersIcon,
      height: isMobileViewport ? 25 : 50,
      width: isMobileViewport ? 21 : 42,
      textContent: "Find Service Centres",
    },
    {
      icon: bellIcon,
      height: isMobileViewport ? 22 : 43,
      width: isMobileViewport ? 20 : 40,
      textContent: "Set Reminders for Guarantee Renewal",
    },
  ];

  const FeatureCard = ({ icon, height, width, textContent }: CardProps) => {
    return (
      <div className={styles.featureCard}>
        <div className={styles.textContent}>
          <div className={styles.iconDiv}>
            <Image
              alt="icon"
              src={icon}
              height={height}
              width={width}
              className={styles.icon}
            />
          </div>
          <p className={styles.cardText}>{textContent}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className={styles.home}>
        <WelcomeContainer />
        <FeaturesSection />
        <div className={styles.myPalmContainer}>
          <div className={styles.flex}>
            <div className={styles.choose2MyPalmContainer}>
              <h2 className={styles.heading1}>Why Choose 2MyPalm?</h2>
              <p className={styles.text}>
                Revolutionize the way you own and interact with your electronic
                companions. 2mypalm isn&apos;t just an app; it&apos;s a
                lifestyle upgrade. From seamless asset tracking to timely
                warranty reminders, discover the reasons to make 2mypalm your
                digital ally.
              </p>
              <div className={styles.grid}>
                {featurecardsData.map((item: any, ind: number) => (
                  <FeatureCard
                    icon={item.icon}
                    height={item?.height || 0}
                    width={item?.width || 0}
                    textContent={item?.textContent || ""}
                    key={ind}
                  />
                ))}
              </div>
            </div>
            <div className={styles.imgDiv}>
              <Image
                alt="why_choose_2mypalm"
                src={whyChoose2myPalmSectionImg}
                height={isMobileViewport ? 256 : 424}
                width={isMobileViewport ? 287 : 477}
              />
            </div>
          </div>
        </div>
        <ManageYourAssets />
        <FindServiceCenters />
        <GuaranteeRenewal />
        <FAQs />
      </div>
      <Footer />
    </>
  );
}
