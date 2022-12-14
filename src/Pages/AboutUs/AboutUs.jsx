import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Pages/Home/Home.module.css";
import classes from "./AboutUs.module.css";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const AboutUs = () => {
  return (
    <div className="App">
      <div className={`w-100 ${classes.containerWr}`}>
        <Nav/>
        <div className={`position-relative mt-3 ${classes.div1}`}>
          <div className={`position-absolute top-50 ${classes.aboutDiv}`}>
            <h1>
              <b>About Us</b>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className={`position-absolute  ${classes.imgDiv}`}>
            <img
              src="images/dish.png"
              className={`img-fluid h-100 `}
              alt="Not Found"
            />
          </div>
        </div>
        <div className={`position-relative ${classes.div2}`}>
          <div className={`position-absolute ${classes.img2Div}`}>
            <div className={`${styles.bgColor1}`}></div>
            <img
              src="images/food2.png"
              className={`img-fluid position-relative h-100`}
              alt="Not Found"
            />
            <div className={`position-absolute bg-white ${classes.upperDiv}`}>
              {/* <div  className={`ms-4 mt-3 d-flex `}><img src="images/manImg2.png" className={`img-fluid`} alt="Not Found"/>
                                    <p className={`text-black mb-0`}><b>Angel Jessica</b></p>
                                 </div>
                                <i class="fa-solid fa-star me-2"></i>
                                <i class="fa-solid fa-star me-2"></i>
                                <i class="fa-solid fa-star me-2"></i>
                                <i class="fa-solid fa-star me-2"></i>
                                <i class="fa-solid fa-star me-2"></i>    */}
              <p className={`text-black ms-3 pt-3`}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
            </div>
          </div>
          <div className={`position-absolute ${classes.desDiv}`}>
            <h2 className={`text-black`}>
              <b>We Serve Door to Door Delivery</b>
            </h2>
            <p className={``}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <p>
              Etiam massa magna, varius tincidunt semper vitae, luctus iaculis
              libero. Duis at maximus purus. In ullamcorper nisi eu iaculis
              venenatis. Aenean malesuada imperdiet pharetra.
            </p>
            <Link to="#">
              <span className={`${classes.span}`}> &#xf144;</span>{" "}
              <b>Watch Video</b>
            </Link>
          </div>
        </div>
        <div className={`position-relative ${classes.div3}`}>
          <div className={`position-absolute ${classes.MissionDiv}`}>
            <h3 className={`text-black`}>
              <b>Our Mission is to Make Healthy Food Easier</b>
            </h3>
            <p className={``}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pharetra metus metus, vitae consequat justo facilisis at. Nunc
              vestibulum augue iaculis augue bibendum iaculis.
            </p>
            <Link
              to="/register"
              className={`${classes.tabLink}`}
              role="presentation"
            >
              <button className={` ${classes.activeOver}`} type="button">
                Register Now
              </button>
            </Link>
          </div>
          <div className={`position-absolute  ${classes.IncreaseDiv}`}>
            <h4 className={`text-black`}>
              <b>
                <span>01 </span>Increase Customers
              </b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
            <h4 className={`text-black`}>
              <b>
                <span>02 </span>Sell More Food
              </b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
            <h4 className={`text-black`}>
              <b>
                <span>03 </span>Income Increases
              </b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
          </div>
        </div>
        <div className={`position-relative ${classes.div3}`}>
          <div className={`position-absolute ${classes.leftDiv}`}>
            <h3 className={`text-black ps-5`}>
              <b>Best Service to Fulfill Your Expectations.</b>
            </h3>
            <div className={`${styles.bgColor1}`}></div>
            <img
              src="images/food2.png"
              className={`img-fluid position-relative h-100`}
              alt="Not Found"
            />
            <div
              className={`position-absolute top-50 start-50 translate-middle fw-bolder text-white ${styles.freeDiv} ${classes.freediv} `}
            >
              TODAY'S OFFER
            </div>
          </div>
          <div className={`position-absolute ${classes.rightDiv}`}>
            <h4>
              <b>
                <span>200K+</span>
              </b>
            </h4>
            <p className={`text-black pb-3`}>Users Download</p>
            <div
              className={` my-4 w-50 ${classes.lineDive}`}
              style={{ flex: 1, height: "2px", backgroundColor: "#F4F4F4" }}
            />
            <h4>
              <b>
                <span>100K+</span>
              </b>
            </h4>
            <p className={`text-black pb-3`}>Users Order</p>
            <div
              className={` my-4 w-50  ${classes.lineDive}`}
              style={{ flex: 1, height: "2px", backgroundColor: "#F4F4F4" }}
            />
            <h4>
              <b>
                <span>10+</span>
              </b>
            </h4>
            <p className={`text-black pb-3`}>Cities</p>
          </div>
        </div>
        <div className={`position-relative ${classes.div4}`}>
          <div className={`position-absolute ${classes.leftDiv2}`}>
            <img
              src="images/Coffee break-cuate.png"
              className={`img-fluid position-relative w-100  h-100`}
              alt="Not Found"
            />
          </div>
          <div className={`position-absolute ${classes.rightDiv2}`}>
            <h3 className={`text-black mb-5`}>
              <b>
                What
                <br /> Customers Say
                <br /> About us
              </b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <img
              src="images/manImg.png"
              className={`img-fluid`}
              alt="Not Found"
            />
            <h6 className={`text-black `}>
              <b>Mohamed Mustafa</b>
            </h6>
            <p>Food Lovers</p>
            <i className="fa-solid fa-star me-2"></i>
            <i className="fa-solid fa-star me-2"></i>
            <i className="fa-solid fa-star me-2"></i>
            <i className="fa-solid fa-star me-2"></i>
            <i className="fa-solid fa-star me-2"></i>
            <b>(5.0)</b>
          </div>
        </div>
        <div className={`position-relative ${classes.div5}`}>
          <div className={`position-absolute ${classes.leftDiv3}`}>
            <h3 className={`text-black mb-4`}>
              <b>The Best Healthy Food Delivery App. Download Now!</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <h6 className={`text-black `}>
              <b>Download Available</b>
            </h6>
            <Link
              to=""
              className={` me-3 ${classes.tabLink} `}
              role="presentation"
            >
              <button className={`mt-3 `} type="button">
                &#xf3ab; <b>Google Play</b>
              </button>
            </Link>
            <Link to="" className={` ${classes.tabLink}  `} role="presentation">
              <button className={`mt-3 `} type="button">
                &#xf179; <b>App Store</b>
              </button>
            </Link>
          </div>
          <div className={`position-absolute ${classes.rightDiv3}`}>
            <img
              src="images/Group.png"
              className={`img-fluid position-relative w-100 h-100`}
              alt="Not Found"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default AboutUs;
