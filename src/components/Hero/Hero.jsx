import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import profile_image from "../../../assets/hero/waqar.jpeg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Waqar Ali Khan</h1>
        <p className={styles.description}>
          As an electrical engineer with 16 years of experience in design and
          installation, I am passionate about integrating cutting-edge
          technologies to enhance project efficiency. My expertise in electrical
          analysis, coupled with my deep understanding of Building Information
          Modeling (BIM) and digital twin technology, positions me at the
          forefront of innovation in the construction industry.
        </p>
        <a href="mailto:mh47098@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={profile_image}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
