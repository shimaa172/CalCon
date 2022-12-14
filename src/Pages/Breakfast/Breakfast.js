import React from "react";
import styles from "../Home/Home.module.css";
import classes from "./Breakfast.module.css";
import Footer from "../../Components/Footer/Footer";
import { breakfastMeals,breakfastPopular,breakfastOffer } from "../../data";
import Tablink from "../../Components/Tablink/Tablink";
import Cards from "../../Components/Breakfast/Cards/Cards";
import Card from "../../Components/Breakfast/Card/Card";
import CarouselContainer from "../../Components/CarouselContainer/CarouselContainer";
import Tab from "../../Components/Tab/Tab";
import Nav from "../../Components/Nav/Nav";

const Breakfast = () => {
  return (
    <div className="App">
      <div className={`w-100 ${styles.containerWr}`}>
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
          img1="slide1.png"
          img2="slide2.png"
          img3="slide1.png"
          img4="slide2.png"
        />
        <div
          className={`d-flex flex-column align-items-center  ${styles.part2Wr}`}
        >
          <Tab desc="Breakfast" />
          <div className={` d-flex flex-column mt-5 ${classes.Div2} `}>
            <ul
              className="nav nav-pills  d-flex justify-content-around "
              id="pills-tab"
              role="tablist"
            >
              <Tablink
                id="All"
                contentselect="true"
                className={`active px-4  ${styles.activeOver} ${classes.activeOver1}`}
                desc="All(170)"
              />
              <Tablink
                id="Sandwiches"
                contentselect="false"
                className={` px-4 ${styles.activeOver} ${classes.activeOver1}`}
                desc="&#xf805;Sandwiches(23)"
              />
              <Tablink
                id="dishes"
                contentselect="false"
                className={`px-4 ${styles.activeOver} ${classes.activeOver1}`}
                desc="&#xe55a;dishes(41)"
              />
              <Tablink
                id="Drinks"
                contentselect="false"
                className={`px-4 ${styles.activeOver} ${classes.activeOver1}`}
                desc="&#xf0fc;Drinks(53)"
              />
              <Tablink
                id="Desserts"
                contentselect="false"
                className={`px-4  ${styles.activeOver} ${classes.activeOver1}`}
                desc="&#xf810;Desserts(33)"
              />
              <Tablink
                id="snacks"
                contentselect="false"
                className={`px-4  ${styles.activeOver} ${classes.activeOver1}`}
                desc="&#xf564;snacks(20)"
              />
            </ul>
            <div
              className={`tab-content w-100 my-4 ${styles.meals} ${classes.meals1} `}
              id="pills-tabContent"
            >
              <Cards className="show active" id="All" arrayimg={breakfastMeals} />
              <Cards className="" id="Sandwiches" arrayimg={breakfastMeals} />
              <Cards className="" id="dishes" arrayimg={breakfastMeals} />
              <Cards className="" id="Drinks" arrayimg={breakfastMeals} />
              <Cards className="" id="Desserts" arrayimg={breakfastMeals} />
              <Cards className="" id="snacks" arrayimg={breakfastMeals} />
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
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
              <Card arrayimg={breakfastPopular} />
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div className={classes.pDiv}>
                <p className={`mb-0 me-3`}>TODAY'S OFFERS</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={breakfastOffer} />
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div className={classes.pDiv}>
                <p className={`mb-0 me-3`}>BEST DEALS</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={breakfastPopular} />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={breakfastOffer} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Breakfast;
