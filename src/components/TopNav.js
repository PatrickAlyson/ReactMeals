import React from "react";
import { MdFastfood } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import classes from "./TopNav.module.css";

function TopNav(props) {
  return (
    <div className={classes.top}>
      <span>
        <MdFastfood className={classes.icon} /> <p>Food</p>
      </span>

      <button onClick={props.modal}>
        <span>
          <BsCart4 />
        </span>
        <span>Your Cart</span>
        <span>99</span>
      </button>
    </div>
  );
}

export default TopNav;
