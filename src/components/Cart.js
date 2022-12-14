import React from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";

function Cart(props) {
  const cartItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  ];

  return (
    <Modal onClose={props.onShow}>
      <ul className={classes["cart-item"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className={classes["cart-info"]}>
        <span>Total Amont</span>
        <span>35.2</span>
      </div>
      <div className={classes.btn}>
        <button onClick={props.onShow}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
