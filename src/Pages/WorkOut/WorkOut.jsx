import React, { useState } from "react";
import styles from "../Home/Home.module.css";
import classes from "../../Pages/Breakfast/Breakfast.module.css";
import Tablink from "../../Components/Tablink/Tablink";
import CarouselContainer from "../../Components/CarouselContainer/CarouselContainer";
import Tab from "../../Components/Tab/Tab";
import { workoutVideos, workoutPopular,workoutToday,bestWorkout} from "./../../data";
import Modal from "../../Components/Modal/Modal";
import CardsVideos from "../../Components/CardsVideos/CardsVideos";
import CardVideo from "../../Components/CardVideo/CardVideo";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const WorkOut = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <div className={`w-100 ${styles.containerWr}`}>
        <Nav/>
        <CarouselContainer
          desc1="Did you exercise today?"
          desc2="Let's do some exercise."
          desc3="Exercise is very beneficial for your health."
          desc4="Let's get started"
          img1="sport1.jpg"
          img2="sport2.jpg"
          img3="sport4.jpg"
          img4="sport3.jpg"
        />
      </div>
      <div
        className={`d-flex flex-column align-items-center  ${styles.part2Wr}`}
      >
        <Tab desc="Workout" />
        <div className={` d-flex flex-column mt-5 ${classes.Div2} `}>
          <ul
            className="nav nav-pills  d-flex justify-content-around "
            id="pills-tab"
            role="tablist"
          >
            <Tablink
              id="All"
              contentselect="true"
              className={`active px-3  ${styles.activeOver} ${classes.activeOver1}`}
              desc="All(170)"
            />
            <Tablink
              id="Stretching"
              contentselect="false"
              className={` px-3 ${styles.activeOver} ${classes.activeOver1}`}
              desc="Stretching(23)"
            />
            <Tablink
              id="Strength"
              contentselect="false"
              className={`px-3 ${styles.activeOver} ${classes.activeOver1}`}
              desc="Strength(41)"
            />
            <Tablink
              id="Cardio"
              contentselect="false"
              className={`px-3 ${styles.activeOver} ${classes.activeOver1}`}
              desc="Cardio(53)"
            />
          </ul>
          <div
            className={`tab-content w-100 my-4 ${styles.meals} ${classes.meals1} `}
            id="pills-tabContent"
          >
            <CardsVideos
              Videos={workoutVideos}
              setModalOpen={setModalOpen}
              className="show active"
              id="All"
            />
            <CardsVideos
              Videos={workoutVideos}
              setModalOpen={setModalOpen}
              className=""
              id="Stretching"
            />
            <CardsVideos
              Videos={workoutVideos}
              setModalOpen={setModalOpen}
              className=""
              id="Strength"
            />
            <CardsVideos
              Videos={workoutVideos}
              setModalOpen={setModalOpen}
              className=""
              id="Cardio"
            />
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
            <CardVideo arrayimg={ workoutPopular} setModalOpen={setModalOpen} />
          </div>
        </div>
        <div className={`mb-3 ${styles.d3}`}>
          <div
            className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
          >
            <div className={classes.pDiv}>
              <p className={`mb-0 me-3`}>RECOMMENDED FOR TODAY</p>
            </div>
            <div
              style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
            />
          </div>
          <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
            <CardVideo arrayimg={workoutToday} setModalOpen={setModalOpen} />
          </div>
        </div>
        <div className={`mb-3 ${styles.d3}`}>
          <div
            className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
          >
            <div className={classes.pDiv}>
              <p className={`mb-0 me-3`}>BEST WORKOUTS</p>
            </div>
            <div
              style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
            />
          </div>
          <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
            <CardVideo arrayimg={bestWorkout} setModalOpen={setModalOpen} />
          </div>
        </div>
        <Footer />
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};
export default WorkOut;
