import React from "react";
import classes from "../../Pages/Breakfast/Breakfast.module.css";
import styles from "../VideoModal/VideoModal.module.css";
import classes2 from "../../Pages/WorkOut/WorkOut.module.css";
import { Link } from "react-router-dom";

export default function CardVideo({ arrayimg, setModalOpen }) {
  return (
    <div className={`row row-cols-1 row-cols-md-3 g-4 fw-bolder mt-0`}>
      {arrayimg.map((video, index) => (
        <div className={`col`} key={index}>
          <div className={`card ${classes.cardDiv}`}>
            <div className={`w-100 h-75`}>
                <img src={video.src} className={`card-img-top h-100 w-100`} alt="Not Found" />
            </div>
            <div
              className={`card-body d-flex justify-content-between align-items-center`}
            >
              <div className="d-flex mt-1">
                <h6 className={`card-title  pr-3 `}>
                  <Link
                    to={{
                      pathname: "/home",
                      ref: video,
                    }}
                    className={`${classes.h6}`}
                  >
                    {video.name}
                  </Link>
                </h6>
              </div>

              <div className="fs-5 ">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </div>
            </div>
            <button
              className={`openModalBtn position-absolute ${styles.VideoIcone} ${classes2.VideoIcone}`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
