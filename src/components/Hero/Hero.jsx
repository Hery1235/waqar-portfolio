import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Waqar Ali Khan</h1>
        <p className={styles.description}>
        I'm an electrical engineer with 16 years of experience in design and installation. Passionate about BIM, digital twin technology, and AI-driven solutions, I aim to revolutionize building modeling for smarter, more efficient designs
        </p>
        <a href="mailto:mh47098@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/waqar.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
