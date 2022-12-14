import React from "react";
import classes from "./Product.module.css";

export default function Product(props) {
  const { img, title, price, desc } = props.props;
  return (
    <article className={classes.item}>
      <img src={img} alt={title} />
      <div className={classes.info}>
        <p className={classes["info-title"]}>{title}</p>
        <p className={classes["info-price"]}>${price}</p>
        <hr></hr>
        <p className={classes["info-desc"]}>{desc}</p>
        <form action="">
          <div>
            <label htmlFor="amount">Amount</label>
            <input
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
        </form>
      </div>
    </article>
  );
}
