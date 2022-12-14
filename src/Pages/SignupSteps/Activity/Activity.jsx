import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Register/Register.module.css";
import styles from "../Goal/Goal.module.css";
import style from "../../../Components/ProgressBar/Progressbar.module.css";
import mystyle from "./Activity.module.css";

export default function Activity() {
  let fun=()=>{
    let selectted =document.querySelector(".activity")
    selectted.classList.add(`${mystyle.activityBg}`)
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
          <div className={` w-100 d-flex justify-content-center `}>
            <div>
              <p className="text-center fw-bolder mb-1 mt-5">
                Create your Account
              </p>
              <p className="text-center text-black fw-bold">
                How active you are?
              </p>
              <div className={`mb-2 ${mystyle.progbar1}`}>
                <div className="position-relative">
                  <span className={`${style.dot}`}></span>
                  <div className={`${style.line1} ${mystyle.line1Over} `}></div>
                  <span className={`${style.dotW} ${mystyle.dotWOver}`}></span>
                  <div className={`${style.line2} ${mystyle.line1Over} `}></div>
                  <span
                    className={`${style.dotW2} ${mystyle.dotWOver} `}
                  ></span>
                  <div className={`${style.line3}`}></div>
                  <span className={`${style.dotW3}`}></span>
                </div>
              </div>
              <div
                className={`d-flex flex-column align-items-center justify-content-center`}
              >
                <div className={``}>
                  <div
                    className={`d-inline-block me-5 my-4 ${mystyle.divWrap} activity`}
                    onClick={()=>fun()}
                  >
                    <div>Little or</div>
                    <div> No Exercise</div>
                  </div>
                  <div className={`d-inline-block ${mystyle.divWrap}`}>
                    <div>1-3</div>
                    <div>
                      <div> workouts/week</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className={`d-inline-block me-5  my-4 ${mystyle.divWrap}`}
                  >
                    <div>4-5 </div>
                    <div>workouts/week</div>
                  </div>
                  <div className={`d-inline-block ${mystyle.divWrap}`}>
                    <div>6-7 </div>
                    <div>workouts/week</div>
                  </div>
                </div>
              </div>
              <div className=" mt-2 d-flex justify-content-center ">
                <Link className={`link ${styles.styLink}`} to="/foods">
                  <b>Next</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
