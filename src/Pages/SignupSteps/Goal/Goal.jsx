import React from "react";
import { Link } from "react-router-dom";
import Progressbar from "../../../Components/ProgressBar/Progressbar";
import classes from "../../Register/Register.module.css";
import styles from "./Goal.module.css";

export default function Goal() {
  let fun =()=>{
    let selectted =document.querySelector(".goal")
    selectted.classList.add(`${styles.goalBg}`)
  }
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
          <div className={`p-4 w-100`}>
            <p className="text-center fw-bolder  mb-1 mt-4">
              Create your Account
            </p>
            <p className="text-center text-black fw-bolder">
              What's your main goal?
            </p>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className={`mb-2  ${styles.progbar}`}>
                <Progressbar />
              </div>
              <div
                className={`d-flex flex-column align-items-center mb-3 ${styles.cent}`}
              >
                <div className={`${styles.bgColor} goal`} onClick={()=>fun()}></div>
                <img
                  src="/images/Capture1.PNG"
                  className="img-fluid rounded"
                  alt="Not Found"
                />
                <p>Lose Weight</p>
              </div>
              <div
                className={`d-flex flex-column align-items-center mb-3 ${styles.cent}`}
              >
                <div className={`${styles.bgColor}`}></div>
                <img
                  src="/images/Capture3.PNG"
                  className="img-fluid rounded "
                  
                  alt="Not Found"
                />
                <p>Gain Muscle</p>
              </div>
              <div
                className={`d-flex flex-column align-items-center mb-3 ${styles.cent}`}
              >
                <div className={`${styles.bgColor}`}></div>
                <img
                  src="/images/Capture2.PNG"
                  className="img-fluid  rounded"
                  alt="Not Found"
                />
                <p>Healthy Life Style</p>
              </div>
            </div>
            <div className="d-flex justify-content-center ">
              <Link className={`link ${styles.styLink}`} to="/calories">
                <b>Next</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
