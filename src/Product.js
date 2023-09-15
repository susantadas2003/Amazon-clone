import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product_rating">
          <p>{props.rating}</p>
        </div>
      </div>

      <img src={props.image} />

      <button onClick={addToBasket}>Add to Cart</button>
    
    </div>
  );
}

export default Product;
