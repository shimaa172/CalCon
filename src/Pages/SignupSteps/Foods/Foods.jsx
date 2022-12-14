import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Register/Register.module.css";
import styles from "../Goal/Goal.module.css";
import style from "../../../Components/ProgressBar/Progressbar.module.css";
import mystyle from "./Foods.module.css";
import FoodBox from "../../../Components/FoodBox/FoodBox";

export default function Foods() {
  return (
    <div className={`container-fluid `}>
      <div className={` row  vw-100 min-vh-100 ${classes.l_side}`}>
        <div
          className={` flex-column align-items-center justify-content-center col-5 col-xxl-5 col-lg-5 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block p-5 ${classes.sideHid}`}
        >
          <div className="text-center ">
            <img className="img-fluid " src="images/footerLogo.png" />
          </div>
          <h4 className="mt-4 text-center text-white">
            Let's begin our journey{" "}
          </h4>
          <h4 className="text-center text-white">together!</h4>
        </div>
        <div
          className={`d-flex flex-column align-items-center justify-content-center col-lg-7 col-sm-12  ${classes.r_side}`}
        >
          <div className={` w-100 d-flex justify-content-center `}>
            <div>
              <p className="text-center fw-bolder mb-1 ">
                Create your Account
              </p>
              <p className="text-center text-black fw-bold">
                Foods you don't eat!
              </p>
              <div className={`mb-2  ${mystyle.progbar1}`}>
                <div className="position-relative">
                  <span className={`${style.dot}`}></span>
                  <div className={`${style.line1} ${mystyle.line1Over} `}></div>
                  <span className={`${style.dotW} ${mystyle.dotWOver}`}></span>
                  <div className={`${style.line2} ${mystyle.line1Over} `}></div>
                  <span
                    className={`${style.dotW2} ${mystyle.dotWOver} `}
                  ></span>
                  <div className={`${style.line3} ${mystyle.line1Over}`}></div>
                  <span className={`${style.dotW3} ${mystyle.dotWOver}`}></span>
                </div>
              </div>
              <div
                className={`d-flex flex-column align-items-center justify-content-center`}
              >
                <FoodBox />
        
              </div>
              <div className=" mt-2 d-flex justify-content-center ">
                <Link className={`link ${styles.styLink}`} to="/home">
                  <b>START NOW</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
