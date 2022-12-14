import React from "react";
import { Link } from "react-router-dom";
import styles from "./VideoModal.module.css";

const VideoModal = ({
  Videos,
  setModalOpen,
  showActive,
  id,
  ariaLabelledby,
}) => {
  return (
    <div
      className={`tab-pane  ${showActive} fade position-relative pt-3 ${styles.TabDiv} `}
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
    >
      {Videos.map((image, index) => (
        <div
          key={index}
          className={`position-relative d-inline-block ${styles.Dimag}`}
        >
          <div className={`${styles.bgColor3}`}></div>
          <div  className={`my-2 ${styles.mealsDiv}`}>
          <img
            className={`w-100 h-100 ${styles.mealsImg}`}
            key={image.src}
            src={image.src}
            alt={image.alt}
          />
          </div>
          <button
            className={`openModalBtn position-absolute ${styles.VideoIcone}`}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <i className="fa-solid fa-play"></i>
          </button>
          <h6 className={styles.h10}>Workout{index + 1}</h6>
        </div>
      ))}
      <Link className={`ms-3 position-absolute ${styles.ViewLink}`} to="/workout">
        View all &#xf105;
      </Link>
    </div>
  );
};

export default VideoModal;
