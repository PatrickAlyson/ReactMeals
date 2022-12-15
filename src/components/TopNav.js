import React, { useContext } from "react";
import { MdFastfood } from "react-icons/md";
// import { BsCart } from "react-icons/bs";
import classes from "./TopNav.module.css";
import CartContext from "../store/cart-context";

function TopNav(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <div className={classes.top}>
      <span>
        <MdFastfood className={classes.icon} /> <p>ReactMeals</p>
      </span>

      <button onClick={props.modal}>
        {/* <span>
          <BsCart />
        </span> */}
        <span className={classes["icon-number"]}>{numberOfCartItems}</span>
      </button>
    </div>
  );
}

export default TopNav;
