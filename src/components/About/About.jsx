import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills Attributes</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Design of Distribution (LV and MV) system for buildings</h3>
              
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Design and Supervision of ELV/ICT system for building</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>ETAP, AMTECH pro Design Electical Analysis software</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Lighting Design and Design software's DISIGO</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>BIM Project Design Revit MEP, Naviswork Manage.</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>BMS system Design and Supervision</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>FAS system Design and Supervision</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Swichgears LV and MV Design</h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
