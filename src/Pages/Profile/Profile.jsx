import React from "react";
import Nav from "../../Components/Nav/Nav";
import Tablink from "../../Components/Tablink/Tablink";
import styles from "./Profile.module.css";

export default function Profile({ id, contentselect, className, desc }) {
  return (
    <div className={`${styles.parentprofile}`}>
      <div className={`${styles.parentback}`}>
        <div className={` container  `}>
          <Nav/>
          <div
            className={`row mt-5 d-flex  justify-content-center position-relative `}
          >
            <img
              src="images/profileImg.png"
              className={`${styles.ProfileImg}`}
              alt="no img"
            />
            <div className={`col-md-3 col-sm-12 col-lg-3   ${styles.profone}`}>
              <ul
                className="nav nav-pills mb-3 py-5  d-block w-100 m-auto "
                id="pills-tab"
                role="tablist"
              >
                <div className="pt-4 text-center d-grid">
                  <b className="text-black">Mohamed Ahmed</b>
                  <small className="text-center">Mohammed_32@gmail.com</small>
                </div>
                <Tablink
                  id="profile"
                  contentselect="true"
                  className={`my-4  ${styles.tagroba}`}
                  desc="&#xf007;  Profile "
                />
                <Tablink
                  id="Notification"
                  contentselect="false"
                  className={`my-4 text-sm-center ${styles.tagroba}`}
                  desc="&#xf0f3;  Notification "
                />
                <Tablink
                  id="setting"
                  contentselect="false"
                  className={`my-4 text-sm-center ${styles.tagroba}`}
                  desc="&#xf013;  setting "
                />
                <Tablink
                  id="Privacypolicy "
                  contentselect="false"
                  className={`my-4 text-sm-center ${styles.tagroba}`}
                  desc="&#xf023;  Privacy policy "
                />
              </ul>
            </div>
            <div className={`col-sm-12 col-md-8 col-lg-8 ${styles.proftwo}`}>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active "
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className={`pt-5 ps-5`}>
                    <p className={` ${styles.porftwotext}`}>profile setting</p>
                    <p className={`mt-5 ${styles.prodetailes}`}>
                      profile Detailes
                    </p>
                    <div className="row mt-5">
                      <div className="col-2">Name</div>
                      <div className="col-6 offset-2 me-5 position-relative">
                        <input
                          type="text"
                          className={`text-muted inputccolor form-control`}
                          placeholder="mohamed Ahamed "
                        />
                        <i
                          className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                        >
                          {" "}
                          Edit
                        </i>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-2 ">User Name</div>
                      <div className="col-6 offset-2  me-5 position-relative">
                        <input
                          type="text"
                          className={`text-muted inputccolor form-control`}
                          placeholder="M32_ahmed"
                        />
                        <i
                          className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                        >
                          {" "}
                          Edit
                        </i>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-2">Birth Date</div>
                      <div className="col-6 offset-2 me-5 position-relative">
                        <input
                          type="date"
                          className={`text-muted inputccolor form-control`}
                          data-placeholder="13/5/1988 "
                          required
                          aria-required="true"
                        />
                        <i
                          className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                        >
                          {" "}
                          Edit
                        </i>
                      </div>
                    </div>
                    <div className="row mt-5 ">
                      <div className=" col-sm-6 col-md-4 col-lg-2 col-6 offset-md-2 offset-lg-4">
                        <button
                          type="submit"
                          value=""
                          className={`btn btn-outline-success ${styles.btnbtn}`}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-2 col-6  offset-md-2 offset-lg-2 ">
                        <button
                          type="submit"
                          value=""
                          className={`btn btn-outline-success ${styles.btnbtn}`}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Notification"
                  role="tabpanel"
                  aria-labelledby="pills-Notification-tab"
                >
                  Notification
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-setting"
                  role="tabpanel"
                  aria-labelledby="pills-setting-tab"
                >
                  <div className={`pt-4 ps-5 ${styles.proftwocontent}`}>
                    <p className={` ${styles.porftwotext}`}> settings</p>
                    <a
                      className={`dropdown-toggle ${styles.customdrop}`}
                      type="button"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Account Setting
                    </a>
                    <div className="show" id="collapseExample">
                      <div className="row mt-5">
                        <div className="col-3 ">E-mail</div>
                        <div className="col-5 offset-2  me-5 position-relative">
                          <input
                            type="email"
                            className={`text-muted inputccolor form-control`}
                            placeholder="mohamed@gmail.com "
                          />
                          <i
                            className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                          >
                            {" "}
                            Edit
                          </i>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-3">Password</div>
                        <div className="col-5 offset-2 me-5 position-relative">
                          <input
                            type="password"
                            className={`text-muted inputccolor form-control`}
                            placeholder="Enter password "
                          />
                          <i
                            className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                          >
                            {" "}
                            Edit
                          </i>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-3">Phone Number</div>
                        <div className="col-5 offset-2 me-5 position-relative">
                          <input
                            type="rel"
                            className={`text-muted inputccolor form-control`}
                            placeholder="+20103040789 "
                          />
                          <i
                            className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                          >
                            {" "}
                            Edit
                          </i>
                        </div>
                      </div>
                      <div className="row mt-5 ">
                        <div className=" col-sm-6 col-md-4 col-lg-2 col-6 offset-md-2 offset-lg-4">
                          <button
                            type="submit"
                            value=""
                            className={`btn btn-outline-success ${styles.btnbtn}`}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 col-6  offset-md-2 offset-lg-2 ">
                          <button
                            type="submit"
                            value=""
                            className={`btn btn-outline-success ${styles.btnbtn}`}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      className={`dropdown-toggle ${styles.customdrop}`}
                      type="button"
                      data-bs-toggle="collapse"
                      href="#collapseExampletwo"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Personal Settings
                    </a>
                    <div className="collapse" id="collapseExampletwo">
                      <div className={`row mt-4 pt-2`}>
                        <div className={`col-sm-12 col-md-6 col-lg-6`}>
                          <div className={`row ${styles.personalDiv}`}>
                            <div className={`col-sm-12 col-md-6 col-lg-4 mt-3`}>
                              Weight
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="Number"
                                className={`form-control `}
                                placeholder="76 "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-4 mt-3`}>
                              Heigth
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="Number"
                                className={`form-control `}
                                placeholder="176 "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-4 mt-3`}>
                              Target
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="Number"
                                className={`form-control `}
                                placeholder="65 "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-4 mt-3`}>
                              Age
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="Number"
                                className={`form-control `}
                                placeholder="33 "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-6`}>
                          <div className={`row  ${styles.personalDiv}`}>
                            <div className={`col-sm-12 col-md-6 col-lg-5 mt-3`}>
                              food you not eat
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="text"
                                className={`form-control `}
                                placeholder="Cheese "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-5 mt-3`}>
                              Health Problem
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <input
                                type="text"
                                className={`form-control `}
                                placeholder="High Pressure "
                              />
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                            <div className={`col-sm-12 col-md-6 col-lg-5 mt-3`}>
                              Gender
                            </div>
                            <div
                              className={`col-sm-12 col-md-6 col-lg-6 mt-3 position-relative`}
                            >
                              <select name="" id="" className={`form-control `}>
                                <option value="" disabled defaultValue hidden>
                                  male
                                </option>
                                <option value="">male</option>
                                <option value="">female</option>
                              </select>
                              <i
                                className={`fa-solid fa-pencil position-absolute ${styles.editIcon}`}
                              >
                                {" "}
                                Edit
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 ">
                        <div className=" col-sm-6 col-md-4 col-lg-2 col-6 offset-md-2 offset-lg-4">
                          <button
                            type="submit"
                            value=""
                            className={`btn btn-outline-success ${styles.btnbtn}`}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 col-6  offset-md-2 offset-lg-2 ">
                          <button
                            type="submit"
                            value=""
                            className={`btn btn-outline-success ${styles.btnbtn}`}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Privacypolicy"
                  role="tabpanel"
                  aria-labelledby="pills-Privacypolicy-tab"
                >
                  Privacypolicy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
