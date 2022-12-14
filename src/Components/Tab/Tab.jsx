import React from "react";
import classes from "./Tab.module.css";

export default function Tab({ desc }) {
  return (
    <div className={`d-flex position-relative mt-5 ${classes.Div1}`}>
      <h3 className={classes.pDiv}>
        <b>{desc}</b>
      </h3>
      <form className={`position-absolute d-flex ${classes.form}`}>
        <input
          className={`form-control mx-3  px-0 ${classes.search2}`}
          type="search"
          placeholder="Search by name "
          aria-label="Search"
        />
        <i
          className={`fa-solid fa-magnifying-glass position-absolute ${classes.searchIcon}`}
        ></i>
      </form>
      <i
        className={`fa fa-bars position-absolute end-0 ${classes.circle} ${classes.bars}`}
      ></i>
    </div>
  );
}
