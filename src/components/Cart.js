import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "./Modal";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.onShow}>
      <ul className={classes["cart-item"]}>
        {cartItems.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes["cart-info"]}>
        <span>Total Amont</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.btn}>
        <button onClick={props.onShow}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
