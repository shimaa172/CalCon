import React from "react";
import classes from "../../../Pages/Breakfast/Breakfast.module.css";
import { Link } from "react-router-dom";

export default function Cards({ className, id, arrayimg }) {
  return (
    <div
      className={`tab-pane fade ${className}`}
      id={`pills-${id}`}
      role="tabpanel"
      aria-labelledby={`pills-${id}-tab`}
    >
      <div className={`row row-cols-1 row-cols-md-3 g-4 fw-bolder   mt-0`}>
        {arrayimg.map((meal, index) => (
          <div className={`col`} key={index}>
            <div className={`card ${classes.cardDiv}`}>
              <div className={`w-100 h-75`} >
                  <img src={meal.src} className={`card-img-top w-100 h-100`} alt="Not Found" />
              </div>
              <div
                className={`card-body d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex mt-1">
                  <h6 className={`card-title pr-3 `}>
                    <Link
                      to={`/details`}
                      state={{ ref: meal }}
                      className={`${classes.h6}`}
                    >
                      {meal.name}
                    </Link>
                  </h6>
                  <p className="text-secondary fs-6 fw-light ps-2">
                    ({meal.cal})
                  </p>
                </div>

                <div className="fs-5 ">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
