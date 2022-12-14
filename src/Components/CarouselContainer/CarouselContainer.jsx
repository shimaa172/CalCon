import React from "react";
import ButtonIndicators from "../ButtonIndicators/ButtonIndicators";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import styles from "./CarouselContainer.module.css";

export default function CarouselContainer({
  desc1,
  desc2,
  desc3,
  desc4,
  img1,
  img2,
  img3,
  img4,
}) {
  return (
    <div
      id="carouselExampleIndicators"
      className={` carousel slide`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <ButtonIndicators
          current="true"
          slideTo="0"
          label="Slide 1"
          className="active"
        />
        <ButtonIndicators current="" slideTo="1" label="Slide 2" className="" />
        <ButtonIndicators current="" slideTo="2" label="Slide 3" className="" />
        <ButtonIndicators current="" slideTo="3" label="Slide 4" className="" />
      </div>
      <div className={`${styles.bgColor}`}></div>
      <div className="carousel-inner">
        <HomeCarousel
          desc={desc1}
          imgBackground={img1}
          imgLogo="GroupLogo.png"
          className="active"
        />
        <HomeCarousel
          desc={desc2}
          imgBackground={img2}
          imgLogo="GroupLogo.png"
          className=""
        />
        <HomeCarousel
          desc={desc3}
          imgBackground={img3}
          imgLogo="GroupLogo.png"
          className=""
        />
        <HomeCarousel
          desc={desc4}
          imgBackground={img4}
          imgLogo="GroupLogo.png"
          className=""
        />
      </div>
      <button
        className={`carousel-control-prev ${styles.controlBtn}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${styles.arrow}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${styles.controlBtn}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${styles.arrow}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
