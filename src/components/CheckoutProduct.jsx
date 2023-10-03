import React from "react";
import "./checkouteProducr.css";
import { useStateValue } from "./StateProvider";



const CheckoutProduct = ({id, title, price, image, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE-FROM-CART",
            id:id
        })
    }
  return (
    <div className="checkout-product">
      <img
        src={image}
        alt=""
        className="checkout-img"
      />
      <div className="checkoutProdut-info">
        <p className="checkout-product-title">{title}</p>
        <p className="pcheckout-productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromCart} className="btn">Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
