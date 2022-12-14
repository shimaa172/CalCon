import React from "react";
import styles from "./Tablink.module.css";
export default function Tablink({ id, contentselect, className, desc }) {
  return (
    <li className={`nav-item ${styles.tabLink}`} role="presentation">
      <button
        className={`nav-link ${className} ${styles.activeOver}`}
        id={`pills-${id}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#pills-${id}`}
        type="button"
        role="tab"
        aria-controls={`pills-${id}`}
        aria-selected={contentselect}
      >
        {desc}
      </button>
    </li>
  );
}
