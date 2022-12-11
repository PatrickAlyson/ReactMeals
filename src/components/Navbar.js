import React from "react";
import classes from "./Navbar.module.css";

export default function Navbar({ CategoryFilter }) {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li
          onClick={() => {
            CategoryFilter("all");
          }}
        >
          All
        </li>
        <li
          onClick={() => {
            CategoryFilter("breakfast");
          }}
        >
          Breakfast
        </li>
        <li
          onClick={() => {
            CategoryFilter("lunch");
          }}
        >
          Lunch
        </li>
        <li
          onClick={() => {
            CategoryFilter("shakes");
          }}
        >
          Shakes
        </li>
      </ul>
    </nav>
  );
}
