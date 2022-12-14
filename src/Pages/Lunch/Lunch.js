import React from "react";
import styles from "../Home/Home.module.css";
import classes from "../Breakfast/Breakfast.module.css";
import Footer from "../../Components/Footer/Footer";
import CarouselContainer from "../../Components/CarouselContainer/CarouselContainer";
import { lunchMeals,lunchPopular ,lunchOffers} from "../../data";
import Tablink from "../../Components/Tablink/Tablink";
import Cards from "../../Components/Breakfast/Cards/Cards";
import Card from "../../Components/Breakfast/Card/Card";
import Tab from "../../Components/Tab/Tab";
import Nav from "../../Components/Nav/Nav";
const Lunch = () => {
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
          img1="lunchMeal.jpg"
          img2="lunchMeal.jpg"
          img3="lunchMeal.jpg"
          img4="lunchMeal.jpg"
        />
        <div
          className={`d-flex flex-column align-items-center  ${styles.part2Wr}`}
        >
          <Tab desc="Lunch" />
          <div className={` d-flex flex-column mt-5 ${classes.Div2} `}>
            <ul
              className="nav nav-pills  d-flex justify-content-around"
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
              className={`tab-content w-100 my-4 ${styles.meals} ${classes.meals1}`}
              id="pills-tabContent"
            >
              <Cards className="show active" id="All" arrayimg={lunchMeals} />
              <Cards className="" id="Sandwiches" arrayimg={lunchMeals} />
              <Cards className="" id="dishes" arrayimg={lunchMeals} />
              <Cards className="" id="Drinks" arrayimg={lunchMeals} />
              <Cards className="" id="Desserts" arrayimg={lunchMeals} />
              <Cards className="" id="snacks" arrayimg={lunchMeals} />
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
              <Card arrayimg={lunchPopular} />
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
              <Card arrayimg={lunchOffers} />
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
              <Card arrayimg={lunchPopular} />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={lunchOffers} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Lunch;
