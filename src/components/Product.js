import React, { useRef, useState, useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Product.module.css";

export default function Product(props) {
  const { img, title, price, desc, id } = props.props;
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    cartCtx.addItem({
      id: id,
      title: title,
      amount: enteredAmountNumber,
      price: price,
    });
  };

  return (
    <article className={classes.item}>
      <img src={img} alt={title} />
      <div className={classes.info}>
        <p className={classes["info-title"]}>{title}</p>
        <p className={classes["info-price"]}>${price}</p>
        <hr></hr>
        <p className={classes["info-desc"]}>{desc}</p>
        <form action="" onSubmit={submitHandler}>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              ref={amountInputRef}
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
              name="amount"
              id="amount"
            />
          </div>
          <button>+ add</button>
          {!amountIsValid && <p>Please Enter a Valid amount</p>}
        </form>
      </div>
    </article>
  );
}
