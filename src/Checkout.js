import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className="checkout_ad" src="https://m.media-amazon.com/images/G/38/health-personal-care/SNS.png" alt="Offers & Deals" />
     <div>  
      <h3>Hello, {!user ? 'Guest' : user?.email}</h3>
      <h2 className='"checkout_title'>
          Your Shopping Cart
        </h2>
      
        {basket.map(item=>(
          <CheckoutProduct id={item.id} 
          name={item.name} image={item.image}
          rating={item.rating} price={item.price}/>))}
      

        </div>
      </div>

      <div className="checkout_right">
      <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
