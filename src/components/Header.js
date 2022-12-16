import React from "react";
// components
import Navbar from "./Navbar.js";
// css
import classes from "./Header.module.css";

function Header(props) {
  const { CategoryFilter, categories } = props;

  return (
    <header className={classes.header}>
      <h1 className={classes.titulo}>Our Menu</h1>
      <div className={classes.bar}></div>
      <Navbar CategoryFilter={CategoryFilter} categories={categories} />
    </header>
  );
}

export default Header;
