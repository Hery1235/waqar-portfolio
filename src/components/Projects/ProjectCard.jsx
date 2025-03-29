import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, explanation },
}) => {
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);

  // Toggle explanation visibility when Demo button is clicked
  const handleDemoClick = (e) => {
    e.preventDefault(); // Prevent default behavior of the anchor tag
    setIsExplanationVisible(true); // Show explanation
  };

  // Hide explanation when Exit button is clicked
  const handleExitClick = () => {
    setIsExplanationVisible(false); // Hide explanation
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={demo} onClick={handleDemoClick} className={styles.link}>
          See More
        </a>
        <a href={source} className={styles.link}>
          View Project
        </a>
      </div>

      {/* Conditionally render explanation */}
      {isExplanationVisible && (
        <div className={styles.detailsBox}>
          <button onClick={handleExitClick} className={styles.exitButton}>
            X
          </button>
          <h4>Project Details</h4>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};
