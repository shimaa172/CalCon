import React from "react";
import styles from "./ButtonIndicators.module.css";

export default function ButtonIndicators({
  slideTo,
  label,
  className,
  current,
}) {
  return (
    <button
      type="button"
      aria-current={current}
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={slideTo}
      className={`${className} ${styles.carouselBtn}`}
      aria-label={label}
    ></button>
  );
}
