import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={`d-flex mt-5 align-items-center ${styles.footer}`}>
        <div id="f" className={`container-fluid ${styles.footerDiv1}`}>
          <section className={styles.section}>
            <div className={`row`}>
              <div
                className={`d-flex flex-column align-items-center justify-content-center ${styles.col1Div}`}
              >
                <img
                  src="images/footerLo.PNG"
                  className={`img-fluid `}
                  alt="Not Found"
                />
                <div>
                  <h2>
                    <i>
                      <b>CALCON</b>
                    </i>
                  </h2>
                  <p>
                    <span className="me-2">&#xf041;</span> 40 Gomheria ST,
                    <br />
                    Elgamaa, Mansoura, EG
                  </p>
                  <p className={styles.col1_p}>
                    <span className="me-2">&#xf095;</span> +123456789
                  </p>
                  <i
                    className={`fa-brands fa-linkedin-in me-2 ${styles.iconStyle}`}
                  ></i>
                  <i
                    className={`fa-brands fa-facebook-f me-2 ${styles.iconStyle} ${styles.faceIcon}`}
                  ></i>
                  <i className={`fa-brands fa-twitter ${styles.iconStyle}`}></i>
                </div>
              </div>
              <div className={`  ${styles.colDiv}`}>
                <ul className={`list-unstyled mb-0`}>
                  <li>
                    <h5>Category</h5>
                  </li>
                  <li>
                    <Link to="/home" className={`text-white`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/workout" className={`text-white`}>
                      Workout
                    </Link>
                  </li>
                  <li>
                    <Link to="/breakfast" className={`text-white`}>
                      Meals
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoppingcart" className={`text-white`}>
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`col-lg-3 col-md-6 mb-4 mb-md-0  ${styles.colDiv}`}
              >
                <ul className={`list-unstyled mb-0`}>
                  <li>
                    <h5>Category</h5>
                  </li>
                  <li>
                    <Link to="/aboutUs" className={`text-white`}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" className={`text-white`}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/breakfast" className={`text-white`}>
                      Breakfast
                    </Link>
                  </li>
                  <li>
                    <Link to="/lunch" className={`text-white`}>
                      Lunch
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`col-lg-3 col-md-6 mb-4 mb-md-0  ${styles.colDiv}`}
              >
                <ul className={`list-unstyled mb-0`}>
                  <li>
                    <h5>Category</h5>
                  </li>
                  <li>
                    <Link to="/dinner" className={`text-white`}>
                      Dinner
                    </Link>
                  </li>
                  <li>
                    <Link to="/Snacks" className={`text-white`}>
                      Snacks
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className={`text-white`}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className={`text-white`}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`text-center p-3  ${styles.footerDiv2}`}>
        Copyright 2020 - All right Recived
      </div>
    </>
  );
}
export default Footer;
