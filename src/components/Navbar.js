import React, { useState } from "react";
// css
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  const [isActive, setIsActive] = useState("all");
  const { CategoryFilter, categories } = props;

  return (
    <nav className={classes.navbar}>
      <ul>
        {categories.map((categorie) => {
          return (
            <li
              key={categorie}
              onClick={() => {
                CategoryFilter(categorie);
                setIsActive(categorie);
              }}
              className={`${isActive === categorie ? classes.active : ""}`}
            >
              {categorie}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
