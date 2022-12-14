import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import styles from "./Home.module.css";
import "..//../Components/Modal/Modal.css";
import Footer from "../../Components/Footer/Footer";
import CarouselContainer from "../../Components/CarouselContainer/CarouselContainer";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Tablink from "../../Components/Tablink/Tablink";
import {
  Video_10Minutes,
  snacksImg,
  dinnerImg,
  lunchImg,
  breakfastImg,
  Video_15Minutes,
  Video_20Minutes,
  Video_30Minutes,
} from "./../../data";
import TabContent from "../../Components/TabContent/TabContent";
import VideoModal from "../../Components/VideoModal/VideoModal";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
    
      <div className={styles.containerWr}>
      <Nav/>
        <CarouselContainer
          desc1="we are a lifestyle platform that helps you to get into the
        habit of healthy food to enhance your health and well-being."
          desc2="we are a lifestyle platform that helps you to get into the
        habit of healthy food to enhance your health and well-being."
          desc3="we are a lifestyle platform that helps you to get into the
        habit of healthy food to enhance your health and well-being."
          desc4="we are a lifestyle platform that helps you to get into the
        habit of healthy food to enhance your health and well-being."
          img1="man.png"
          img2="phone.png"
          img3="man2.png"
          img4="paying.png"
        />
        <div
          className={`d-flex flex-column align-items-center ${styles.part2Wr}`}
        >
          <div
            className={` d-flex flex-column align-items-center mb-5 ${styles.d1}`}
          >
            <ul
              className={`nav nav-pills mb-0 d-flex  mt-5 ${styles.tapUl}`}
              id="pills-tab"
              role="tablist"
            >
              <Tablink
                id="Breakfast"
                contentselect="true"
                className="active"
                desc="Breakfast"
              />
              <Tablink
                id="Lunch"
                contentselect="false"
                className=""
                desc="Lunch"
              />
              <Tablink
                id="Dinner"
                contentselect="false"
                className=""
                desc="Dinner"
              />
              <Tablink
                id="Snacks"
                contentselect="false"
                className=""
                desc="Snacks"
              />
            </ul>
            <div
              className={`tab-content w-100  ${styles.meals}`}
              id="pills-tabContent"
            >
              <TabContent
                className="show active"
                id="Breakfast"
                arrayimg={breakfastImg}
                ff="breakfast"
              />
              <TabContent
                className=""
                id="Lunch"
                arrayimg={lunchImg}
                ff="lunch"
              />
              <TabContent
                className=""
                id="Dinner"
                arrayimg={dinnerImg}
                ff="dinner"
              />
              <TabContent
                className=""
                id="Snacks"
                arrayimg={snacksImg}
                ff="snacks"
              />
            </div>
          </div>

          <div className={` position-relative ${styles.d1}`}>
            <div className={`${styles.bgColor2}`}></div>
            <img
              src="images/food1.png"
              className={`img-fluid`}
              alt="Not Found"
            />
            <div
              className={`position-absolute top-50 start-50 translate-middle fw-bolder ${styles.freeDiv}`}
            >
              FREE DELIVERY
            </div>
          </div>
          <div className={` d-flex mt-5 ${styles.d1}`}>
            <div className={` position-relative  ${styles.d1Div}`}>
              <div className={`${styles.bgColor1}`}></div>
              <img
                src="images/food2.png"
                className={`img-fluid`}
                alt="Not Found"
              />
              <div
                className={`position-absolute top-50 start-50 translate-middle fw-bolder ${styles.freeDiv}`}
              >
                TODAY'S OFFER
              </div>
            </div>
            <div className={` position-relative ${styles.d1Div}`}>
              <div className={`${styles.bgColor1}`}></div>
              <img
                src="images/food3.png"
                className={`img-fluid`}
                alt="Not Found"
              />
              <div
                className={`position-absolute top-50 start-50 translate-middle fw-bolder ${styles.freeDiv}`}
              >
                BEST DEALS
              </div>
            </div>
          </div>
          <div id="w" className={` mt-5 ${styles.d1}`}>
            <div
              className={`d-flex flex-row align-items-center  fw-bolder ${styles.workoutDiv}`}
            >
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
              <div>
                <p className={`mb-0 mx-5`}>Workout</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` d-flex flex-column align-items-center `}>
              <ul
                className={`nav nav-pills mb-0 d-flex  mt-3  ${styles.tapUl}`}
                id="pills-tab"
                role="tablist"
              >
                <Tablink
                  id="10Minutes"
                  contentselect="true"
                  className="active"
                  desc="10Minutes"
                />
                <Tablink
                  id="15Minutes"
                  contentselect="false"
                  className=""
                  desc="15Minutes"
                />
                <Tablink
                  id="20Minutes"
                  contentselect="false"
                  className=""
                  desc="20Minutes"
                />
                <Tablink
                  id="30Minutes"
                  contentselect="false"
                  className=""
                  desc="30Minutes"
                />
              </ul>
            </div>

            <div
              className={`tab-content w-100 ${styles.video}`}
              id="pills-tabContent"
            >
              <VideoModal
                Videos={Video_10Minutes}
                setModalOpen={setModalOpen}
                showActive="show active"
                id="pills-10Minutes"
                ariaLabelledby="pills-10Minutes-tab"
              />
              <VideoModal
                Videos={Video_15Minutes}
                setModalOpen={setModalOpen}
                showActive=""
                id="pills-15Minutes"
                ariaLabelledby="pills-15Minutes-tab"
              />
              <VideoModal
                Videos={Video_20Minutes}
                setModalOpen={setModalOpen}
                showActive=""
                id="pills-20Minutes"
                ariaLabelledby="pills-20Minutes-tab"
              />
              <VideoModal
                Videos={Video_30Minutes}
                setModalOpen={setModalOpen}
                showActive=""
                id="pills-30Minutes"
                ariaLabelledby="pills-30Minutes-tab"
              />
            </div>
          </div>
          <div className={` position-relative mt-5 ${styles.d1}`}>
            <div className={`${styles.bgColor2}`}></div>

            <img
              src="images/food4.png"
              className={`img-fluid`}
              alt="Not Found"
            />
            <div
              className={`position-absolute top-50 start-50 translate-middle fw-bolder ${styles.freeDiv}`}
            >
              Find Healthy And Tasty Foods Near You..
            </div>
          </div>
          <div className={` mt-5 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
              <div>
                <p className={`mb-0 mx-5`}>Our Blog</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <p className={`text-center mb-0 ${styles.p2}`}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
            <div
              className={`row row-cols-1 row-cols-md-3 g-4 fw-bolder ${styles.card2Div}`}
            >
              <BlogCard img="card1.png" />
              <BlogCard img="card2.png" />
              <BlogCard img="card3.png" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};
export default Home;
