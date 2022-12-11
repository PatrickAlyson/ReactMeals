import React from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar.js";

function Header({ CategoryFilter }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.titulo}>Our Menu</h1>
      <div className={classes.bar}></div>
      <Navbar CategoryFilter={CategoryFilter} />
    </header>
  );
}

export default Header;
