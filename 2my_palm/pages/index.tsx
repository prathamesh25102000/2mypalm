import React from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/src/Header";
import Footer from "@/src/Footer";
import Image from "next/image";
import whyChhose2myPalmSectionImg from "../assets/why_choose_2mypalm_img.svg";
import bellIcon from "../assets/bell_icon.svg";
import assetsIcon from "../assets/manage_assets_icon.svg";
import serviceCentersIcon from "../assets/service_centers_icon.svg";
import WelcomeContainer from "@/src/WelcomeContainer";
import FeaturesSection from "@/src/FeaturesSection";
import ManageYourAssets from "@/src/ManageYourAssets";
import FindServiceCenters from "@/src/FindServiceCenters";
import GuaranteeRenewal from "@/src/GuaranteeRenewal";
import FAQs from "@/src/FAQs";

export default function Home() {
  const FeatureCard = (props: any) => {
    const { icon, height, width, textContent } = props;

    return (
      <div className={styles.featureCard}>
        <div className={styles.iconDiv}>
          <Image
            alt="icon"
            src={icon}
            height={height}
            width={width}
            className={styles.icon}
          />
        </div>
        <div className={styles.textContent}>
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
            <div>
              <h2 className={styles.heading1}>Why Choose 2MyPalm?</h2>
              <p className={styles.text}>
                Revolutionize the way you own and interact with your electronic
                companions. 2mypalm isn&apos;t just an app; it&apos;s a lifestyle upgrade.
                From seamless asset tracking to timely warranty reminders,
                discover the reasons to make 2mypalm your digital ally.
              </p>
              <div className={styles.grid}>
                <FeatureCard
                  icon={assetsIcon}
                  height={52}
                  width={52}
                  textContent={"Manage Your Assets"}
                />
                <FeatureCard
                  icon={serviceCentersIcon}
                  height={50}
                  width={42}
                  textContent={"Find Service Centres"}
                />
                <FeatureCard
                  icon={bellIcon}
                  height={43}
                  width={40}
                  textContent={"Set Reminders for Guarantee Renewal"}
                />
              </div>
            </div>
            <Image
              alt="why_choose_2mypalm"
              src={whyChhose2myPalmSectionImg}
              height={424}
              width={477}
            />
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
