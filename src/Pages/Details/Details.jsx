import React, { useState } from "react";
import detstyle from "./details.module.css";
import styles from ".././Home/Home.module.css";
import classes from ".././Breakfast/Breakfast.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../Components/Breakfast/Card/Card";
import Footer from "../../Components/Footer/Footer";
import { lunchPopular } from "../../data";
import Nav from "../../Components/Nav/Nav";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [Meals, setMeals] = useState(
    JSON.parse(window.localStorage.getItem("meals"))
      ? JSON.parse(window.localStorage.getItem("meals"))
      : []
  );

  let AddToCart = (mealObj) => {
    if (!Meals.find((ele) => mealObj === ele)) Meals.push(mealObj);
    window.localStorage.setItem("meals", JSON.stringify(Meals));
    setMeals([...Meals]);
  };

  return (
    <div className={`${detstyle.details}`}>
      <div className={`container pt-5`}>
        <Nav/>
        <div className={`row`}>
          <div className={`col-sm-12 col-md-12 col-lg-5 offset-lg-1`}>
            <div className={`${detstyle.detailone}`}>
              <img
                src={location.state.ref.src}
                alt="noimage"
                className="img-fluid h-100 w-100 "
              />
              <div className={`${detstyle.detailsprice}`}>
                {location.state.ref.cal}
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-5 col-lg-5 ms-4`}>
            <div className={`${detstyle.detailtwo}`}>
              <div className={`${detstyle.info}`}>
                <h2 className={`${detstyle.textheader}`}>
                  {location.state.ref.name}
                </h2>
                <p className={`${detstyle.text}`}>
                  Shish Tawook is a very popular skewered chicken dish in the Middle East. Think of perfectly tender and juicy chicken that’s been marinating in earthy spices, yogurt, lemon juice and garlic.
                </p>
              </div>
              <h2 className={`${detstyle.price}`}>
                {location.state.ref.price} LE
              </h2>
              <div className={`mt-4 ${detstyle.butttons}`}>
                <div>
                  <button
                    className={`bttn ${detstyle.firstbutton}`}
                    onClick={() => {
                      AddToCart(location.state.ref);
                      navigate("/shoppingcart");
                    }}
                  >
                    add to card
                  </button>
                  <button className={`bttn ${detstyle.firstbuttwo}`}>
                    add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-5 ${detstyle.review}`}>
          <div className={`${detstyle.revparent}`}>
            <h1 className={`${detstyle.rev}`}>Review</h1>
            <div className={`${detstyle.tagrobaagain}`}></div>
          </div>
          <div className={`${detstyle.reviewagain}`}>
            <div className={`row `}>
              <div
                className={`col-sm-12 col-md-12 col-lg-4 offset-lg-1 mb-3  `}
              >
                <div className={`${detstyle.reviewagainone}`}>
                  <div className={`${detstyle.reviewsimiparent}`}>
                    <div className={`${detstyle.reviewicon}`}>
                      <i class="fa-solid fa-circle-user"></i>
                      {/* <FontAwesomeIcon icon={faCircleUser} className={`${detstyle.iconicon}`}/> */}
                    </div>
                    <div className={`${detstyle.reviewicontwo}`}>
                      <span className={`${detstyle.deetspan}`}>Dody</span>
                      <br />
                      <span className={`${detstyle.spanfont}`}>1 day ago</span>
                    </div>
                    <div className={`${detstyle.baadge}`}>
                      <span
                        class={`badge rounded-pill bg-success ${detstyle.customicon}`}
                      >
                        4.6
                        <i
                          className={`fa-solid fa-star ${detstyle.iconsize}`}
                        ></i>
                      </span>
                    </div>

                    <p className={`text-center  ${detstyle.icontext} `}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit ,
                      nostrum Modi itaque vitae odio aut cumque similique ab,
                      tenetur nostrum obcaecati hic architecto sequi
                      consequuntur aperiam nostrum error numquam earum voluptas
                      maiores .
                    </p>
                  </div>
                  <div className={`${detstyle.reviewsimiparent}`}>
                    <div className={`${detstyle.reviewicon}`}>
                      <i class="fa-solid fa-circle-user"></i>
                      {/* <FontAwesomeIcon icon={faCircleUser} className={`${detstyle.iconicon}`}/> */}
                    </div>
                    <div className={`${detstyle.reviewicontwo}`}>
                      <span className={`${detstyle.deetspan}`}>Dody</span>
                      <br />
                      <span className={`${detstyle.spanfont}`}>1 day ago</span>
                    </div>
                    <div className={`${detstyle.baadge}`}>
                      <span
                        class={`badge rounded-pill bg-success ${detstyle.customicon}`}
                      >
                        4.6
                        <i
                          className={`fa-solid fa-star ${detstyle.iconsize}`}
                        ></i>
                      </span>
                    </div>

                    {/* <i class="fa-solid fa-circle-user"></i> */}
                    <p className={`text-center ${detstyle.icontext} `}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      nostrum. Modi itaque vitae odio aut cumque similique ab,
                      tenetur nostrum obcaecati hic architecto sequi
                      consequuntur aperiam nostrum error numquam earum voluptas
                      maiores .
                    </p>
                  </div>
                  <div className={`${detstyle.reviewsimiparent}`}>
                    <div className={`${detstyle.reviewicon}`}>
                      <i class="fa-solid fa-circle-user"></i>
                      {/* <FontAwesomeIcon icon={faCircleUser} className={`${detstyle.iconicon}`}/> */}
                    </div>
                    <div className={`${detstyle.reviewicontwo}`}>
                      <span className={`${detstyle.deetspan}`}>Dody</span>
                      <br />
                      <span className={`${detstyle.spanfont}`}>1 day ago</span>
                    </div>
                    <div className={`${detstyle.baadge}`}>
                      <span
                        class={`badge rounded-pill bg-success ${detstyle.customicon}`}
                      >
                        4.6
                        <i
                          className={`fa-solid fa-star ${detstyle.iconsize}`}
                        ></i>
                      </span>
                    </div>

                    <p className={`text-center ${detstyle.icontext} `}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      nostrum. Modi itaque vitae odio aut cumque similique ab,
                      tenetur nostrum obcaecati hic architecto sequi
                      consequuntur aperiam nostrum error numquam earum voluptas
                      maiores .
                    </p>
                  </div>
                  <div className={`${detstyle.reviewsimiparent}`}>
                    <div className={`${detstyle.reviewicon}`}>
                      <i class="fa-solid fa-circle-user"></i>
                      {/* <FontAwesomeIcon icon={faCircleUser} className={`${detstyle.iconicon}`}/> */}
                    </div>
                    <div className={`${detstyle.reviewicontwo}`}>
                      <span className={`${detstyle.deetspan}`}>Dody</span>
                      <br />
                      <span className={`${detstyle.spanfont}`}>1 day ago</span>
                    </div>
                    <div className={`${detstyle.baadge}`}>
                      <span
                        class={`badge rounded-pill bg-success ${detstyle.customicon}`}
                      >
                        4.6
                        <i
                          className={`fa-solid fa-star ${detstyle.iconsize}`}
                        ></i>
                      </span>
                    </div>
                    <p className={`text-center ${detstyle.icontext} `}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      nostrum. Modi itaque vitae odio aut cumque similique ab,
                      tenetur nostrum obcaecati hic architecto sequi
                      consequuntur aperiam nostrum error numquam earum voluptas
                      maiores .
                    </p>
                    <div className={` ${detstyle.iconsearch}`}>
                      <input type="text" className="form-control" />

                      <div className={`${detstyle.starsicon}`}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i
                          className={`fa-solid fa-star ${detstyle.iconcolor}`}
                        ></i>

                        <button className={` ${detstyle.buttonstar}`}>
                          {" "}
                          comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-sm-12 col-md-12 col-lg-6 offset-lg-1  `}>
                <div className={`row`}>
                  <div className={`col-sm-12 col-md-6 col-lg-6 `}>
                    <div className={`mt-sm-4 ${detstyle.detfirstim}`}>
                      <h1>TODAYS OFFER</h1>
                    </div>
                  </div>
                  <div className={`col-sm-12 col-md-6 col-lg-6 `}>
                    <div className={`mt-4 ${detstyle.detsecondim}`}>
                      <div>
                        <h1 className={`${detstyle.felxtag}`}>
                          Find
                          <br />
                          Healthy
                          <br />
                          And
                          <br />
                          Tasty
                          <br />
                          Food
                          <br />
                          Near
                          <br />
                          You....
                        </h1>
                        <div className={`${detstyle.imgcontain}`}>
                          <img src="images/cuttingimage.png" alt="noImage" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mb-3 w-100 ${styles.d3}`}>
          <div
            className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
          >
            <div className={classes.pDiv}>
              <p className={`mb-0 me-3`}>POPULAR</p>
            </div>
            <div
              style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
            />
          </div>
          <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
            <Card arrayimg={lunchPopular} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
