import React from "react";
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkdin from "../../../assets/contact/linkedinIcon.png";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:waqarkhtk@gmail.com">waqarkhtk@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkdin} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/waqarkhtk">
            linkedin.com/Waqar Ali Khan
          </a>
        </li>
      </ul>
    </footer>
  );
};
