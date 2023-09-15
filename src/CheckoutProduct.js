import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct_image" src={props.image} alt="" />
      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_name">{props.name}</p>
        <p className="CheckoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="CheckoutProduct_rating">{props.rating}</div>

       { !props.hideButton && (<button onClick={removeFromBasket}>Remove from Cart</button>)}
      </div>
    </div>
  );
}

export default CheckoutProduct;
