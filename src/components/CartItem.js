import React from "react";
// icons, css
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const { title, price, amount } = props.item;
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-info"]}>
        <div className={classes["cart-info__info"]}>
          <h2>{title}</h2>
          <div className={classes.price}>
            <h3>{`$${price.toFixed(2)}`}</h3>
            <span>x {amount}</span>
          </div>
        </div>
        <div className={classes.btn}>
          <button onClick={props.onAdd}>
            <AiOutlinePlus />
          </button>
          <button onClick={props.onRemove}>
            <AiOutlineMinus />
          </button>
        </div>
      </div>
      <hr />
    </li>
  );
}

export default CartItem;
