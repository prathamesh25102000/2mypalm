import Header from "@/src/Header";
import Footer from "@/src/Footer";
import AboutUsContainer from "@/src/AboutUsContainer";
import { aboutUSTextLines } from "@/commons/constants";
import styles from "../styles/AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsContainer />
      <div className={styles.textContent}>
        {aboutUSTextLines.map((text: string, i: number) => (
          <p key={i} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
      <Footer />
    </>
  );
}
