import React from "react";
import "./subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();


  const formatAsCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} item): <strong>{formatAsCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This Order Contains a Gift
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
