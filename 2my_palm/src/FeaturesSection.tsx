import React from "react";
import FeatureCard from "@/src/FeatureCard";
import styles from "../styles/Features.module.css";
import { isMobileView } from "@/commons/constants";

const FeaturesSection = () => {
  let isMobileViewport: boolean = isMobileView();

  const features = [
    {
      title: "20000",
      subTitle: "Active Users",
      src: "https://i.ibb.co/44T0HWF/active-user-image.png",
      height: isMobileViewport ? 108 : 190,
      width: isMobileViewport ? 131 : 237,
    },
    {
      title: "1 Lakh+",
      subTitle: "Managed Assets",
      src: "https://i.ibb.co/Hxpk8gN/managed-assets-image.png",
      height: isMobileViewport ? 102 : 186,
      width: isMobileViewport ? 147 : 237,
    },
    {
      title: "500+",
      subTitle: "Service Centers",
      src: "https://i.ibb.co/TB9tNJK/service-centers-image.png",
      height: isMobileViewport ? 106 : 183,
      width: isMobileViewport ? 165 : 237,
    },
  ];

  return (
    <div className={styles.features}>
      {features.map((item: any, ind: number) => (
        <FeatureCard
          title={item?.title || ""}
          subTitle={item?.subTitle || ""}
          src={item?.src || ""}
          height={item?.height || 0}
          width={item?.width || 0}
          key={ind}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
