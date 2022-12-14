import React from "react";
import styles from "./Progressbar.module.css";
export default function Progressbar() {
  return (
    <div className={`position-relative`}>
      <span className={`${styles.dot}`}></span>
      <div className={`${styles.line1}`}></div>
      <span className={`${styles.dotW}`}></span>
      <div className={`${styles.line2}`}></div>
      <span className={`${styles.dotW2}`}></span>
      <div className={`${styles.line3}`}></div>
      <span className={`${styles.dotW3}`}></span>
    </div>
  );
}