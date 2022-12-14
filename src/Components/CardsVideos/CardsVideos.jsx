import React from "react";
import styles from "../VideoModal/VideoModal.module.css";
import classes from "../../Pages/Breakfast/Breakfast.module.css";
import classes2 from "../../Pages/WorkOut/WorkOut.module.css";
import { Link } from "react-router-dom";

export default function CardsVideos({ Videos, setModalOpen, className, id }) {
  return (
    <div
      className={`tab-pane fade ${className}`}
      id={`pills-${id}`}
      role="tabpanel"
      aria-labelledby={`pills-${id}-tab`}
    >
      <div className={`row row-cols-1 row-cols-md-3 g-4 fw-bolder mt-0`}>
        {Videos.map((video, index) => (
          <div className={`col`} key={index}>
            <div className={`card ${classes.cardDiv}`}>
            <div className={`w-100 h-75`} >
                <img
                  className={`card-img-top w-100 h-100`}
                  key={video.src}
                  src={video.src}
                  alt={video.alt}
                />
              </div>
              <div
                className={`card-body d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex mt-1">
                  <h6 className={`card-title pr-3 `}>
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
    </div>
  );
}
