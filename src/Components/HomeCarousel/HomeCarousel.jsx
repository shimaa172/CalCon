import React from "react";
import styles from "./HomeCarousel.module.css";

const HomeCarousel = ({ desc, imgLogo, imgBackground, className }) => {
  return (
    <div className={`carousel-item ${className}`}>
      <img
        src={`images/${imgBackground}`}
        className="d-block w-100"
        alt="Not Found"
      />
      <div
        className={`carousel-caption d-none d-md-block fw-bolder ${styles.caption}`}
      >
        <img
          src={`images/${imgLogo}`}
          className={styles.GroupLogo}
          alt="Not Found"
        />
        <p className={`mb-0 `}>{desc}</p>
        <img
          src={`images/${imgLogo}`}
          className={styles.GroupLogo}
          alt="Not Found"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
