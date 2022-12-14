import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top ${styles.navbar}`}
      >
        <div className={`container-fluid justify-content-end`}>
          <button
            className={`navbar-toggler `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.NavUl}`}
            id={`navbarSupportedContent`}
          >
            <Link aria-current="page" to="/home">
              <img
                className={styles.img1}
                src="images/logo1.png"
                alt="Not Found"
              />
            </Link>

            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link active px-3  ${styles.activeOver} `}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link  px-3  ${styles.activeOver}`}
                  to="/breakfast"
                >
                  Meals
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link  px-3  ${styles.activeOver}`}
                  to="/workout"
                >
                  Workout
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link   px-3  ${styles.activeOver}`}
                  to="/shoppingcart"
                >
                  Cart
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link  px-3  ${styles.activeOver}`}
                  to="/aboutUs"
                >
                  About us
                </Link>
              </li>
            </ul>
            <form className={`d-flex position-relative`}>
              <i
                className={`fa-solid fa-magnifying-glass position-absolute ${styles.searchIcon}`}
              ></i>
              <input
                className={`form-control mx-3  ${styles.search}`}
                type="search"
                placeholder="Search for meal, workout, ..."
                aria-label="Search"
              />
              <i
                className={`fa-solid fa-microphone position-absolute ${styles.microphoneIcon}`}
              ></i>
            </form>
            <img
              className={styles.img2}
              src="images/logo3.png"
              alt="Not Found"
            />
            <div className={`input-group ${styles.dropList}`}>
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className={styles.img3}
                  src="images/Ellipse1.png"
                  alt="Not Found"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/Profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    Sign UP
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
