import React from "react";
import styles from "../styles/FeatureCard.module.css";

interface CardProps {
  src: any;
  title: string;
  subTitle: string;
  height: number;
  width: number;
}

const FeatureCard = ({ src, title, subTitle, height, width }: CardProps) => {
  return (
    <div className={styles.featureCard}>
      <img alt={title} src={src} height={height} width={width} />
      <h1 className={styles.title}>{title}</h1>
      <h5 className={styles.subTitle}>{subTitle}</h5>
    </div>
  );
};

export default FeatureCard;
