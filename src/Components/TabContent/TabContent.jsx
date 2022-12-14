import React from "react";
import { Link } from "react-router-dom";
import styles from "./TabContent.module.css";

export default function TabContent({ className, id, arrayimg, ff }) {
  return (
    <div
      className={`tab-pane fade ${className} align-items-center position-relative mt-3 ${styles.TabDiv}`}
      id={`pills-${id}`}
      role="tabpanel"
      aria-labelledby={`pills-${id}-tab`}
    >
      {arrayimg.map((image, index) => (
        <div key={index} className={` d-inline-block  ${styles.Dimag}`}>
          <div className={`${styles.bgColor4}`}></div>
          <div  className={`my-2 ${styles.mealsDiv}`}>
            <img
              className={` w-100 h-100 ${styles.mealsImg}`}
              key={image.src}
              src={image.src}
            />
          </div> 
          <h6 className={styles.h10}>Meal{index + 1}</h6>
        </div>
      ))}
      <Link
        className={`ms-3 position-absolute ${styles.ViewLink}`}
        to={`/${ff}`}
      >
        View all <i className="fa-solid fa-angle-right"></i>
      </Link>
    </div>
  );
}
