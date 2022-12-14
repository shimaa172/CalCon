import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Register/Register.module.css";
import styles from "../Goal/Goal.module.css";
import style from "../../../Components/ProgressBar/Progressbar.module.css";
import mystyle from "./Calories.module.css";

export default function Calories() {
  let func=()=>{
    let selectted =document.querySelector(".genderr")
    selectted.classList.add(`${mystyle.genderBg}`)
  }
  return (
    <div className={`container-fluid `}>
      <div className={` row  vw-100 min-vh-100 ${classes.l_side}`}>
        <div
          className={` flex-column align-items-center justify-content-center col-5 col-xxl-5 col-lg-5 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block p-5 ${classes.sideHid}`}
        >
          <div className="text-center ">
            <img
              className="img-fluid"
              src="images/footerLogo.png"
              alt="img-fluid"
            />
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
                Calculate your calories!
              </p>
              <div className={`mb-2 ${styles.progbar}`}>
                <div className="position-relative">
                  <span className={`${style.dot}`}></span>
                  <div className={`${style.line1} ${mystyle.line1Over} `}></div>
                  <span className={`${style.dotW} ${mystyle.dotWOver}`}></span>
                  <div className={`${style.line2}`}></div>
                  <span className={`${style.dotW2}`}></span>
                  <div className={`${style.line3}`}></div>
                  <span className={`${style.dotW3}`}></span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <b className=" text-black">GENDER</b>
                <div
                  className={`d-flex mb-2 justify-content-center ${mystyle.btns}`}
                >
                  <button className="me-2 btn genderr" onClick={()=>func()}>
                    <i className="fa-solid fa-mars"></i>
                    <span className="mx-2">Male</span>
                  </button>
                  <button className="btn">
                    <i className="fa-solid fa-venus"></i>
                    <span className="mx-2">Female</span>
                  </button>
                </div>
                <b className="text-black">AGE</b>
                <div className={`input-group mb-2 ${mystyle.inpStyle}`}>
                  <input type="text" className={`form-control`} />
                  <span className="input-group-text">years</span>
                </div>
                <b className="text-black">HEIGHT</b>
                <div className={`input-group mb-2 ${mystyle.inpStyle}`}>
                  <input type="text" className={`form-control`} />
                  <span className="input-group-text">cm</span>
                </div>
                <b className=" text-black">CURRENT WEIGHT</b>
                <div className={`input-group mb-2 ${mystyle.inpStyle}`}>
                  <input type="text" className={`form-control`} />
                  <span className="input-group-text">kg</span>
                </div>
                <b className="text-black">TARGET WEIGHT</b>
                <div className={`input-group mb-2 ${mystyle.inpStyle}`}>
                  <input type="text" className={`form-control`} />
                  <span className="input-group-text">kg</span>
                </div>
              </div>
              <div className=" mt-2 d-flex justify-content-center ">
                <Link className={`link ${styles.styLink}`} to="/activity">
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
