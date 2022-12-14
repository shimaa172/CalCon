import React from "react";
import styles from "./BlogCard.module.css";

export default function BlogCard({ img }) {
  return (
    <div className={`col`}>
      <div className={`card ${styles.card1}`}>
        <img src={`images/${img}`} className={`card-img-top`} alt="Not Found" />
        <div className={`card-body`}>
          <h5 className={`card-title`}>
            <span className={styles.userSpan}>&#xf007;</span>ADMIN
            <span className={styles.calSpan}>&#xf133;</span>23 JAN
            <span>&#xf075;</span>12 COMMENTS
          </h5>
          <p className={`card-text`}>
            LOREM IPSUM DOLOR SIT AMET,
            <br /> CONSETETUR SADIPSCING
            <br />
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </span>
          </p>
          <form>
            <input type="submit" value="READ MORE" />
          </form>
        </div>
      </div>
    </div>
  );
}
