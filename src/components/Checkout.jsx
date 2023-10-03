import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/images/A20M_blue_OG._CB1543638133_.png"
          alt=""
          className="checkout-add"
          
        />
        <div>
            <h2 className="checkout-title">
                Your Shopping Cart
            </h2>
          {basket.map(item => (
            <CheckoutProduct
            id= {item.id}
            titel = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}

            />
          ))}
           
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
