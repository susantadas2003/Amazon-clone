import React from "react";
import Product from "./Product";
import "./ShoppingSection.css";

function ShoppingSection() {
  return (
    <div className="ShoppingSection">
      <div className="home_row">
        <Product  id="1" name="Razer Nommo Pro: THX Certified Premium Audio Speakers " image="https://m.media-amazon.com/images/I/51GXgPtBB0L._AC_SX466_.jpg"price="53.20" rating="⭐⭐⭐"/>
        <Product id="2" name="Good Bad Girl: A Novel Hardcover – August 29, 2023" image="https://m.media-amazon.com/images/I/51LbKr7tNLL._SX327_BO1,204,203,200_.jpg"price="3.00" rating="⭐⭐⭐"/>
        <Product id="3" name="Lee Women's Ultra Lux Comfort with Flex Motion Bootcut Jean" image="https://m.media-amazon.com/images/I/81AFLPZus4L._AC_UY550_.jpg" price="12.96" rating="⭐⭐"/>
        <Product id="4"  name="anyloop Smart Watch for Men(Answer/Make Call), Fitness Tracker" image="https://m.media-amazon.com/images/I/61cEtrrL2VL._AC_SX466_.jpg" price="54.93" rating="⭐⭐⭐⭐"/>
      </div>
      <div className="home_row">
        <Product id="5" name="Bonve Pet 32.8ft Led Strip Lights 5050 RGB LED Smart Music Sync Color Changing LED Lights Strips" image="https://m.media-amazon.com/images/I/81m8gPpDheL._AC_SX679_.jpg" price="3.90" rating="⭐⭐⭐"/>
        <Product id="6" name="KVIDIO Bluetooth Headphones Over Ear, 65 Hours Playtime Wireless Headphones with Microphone" image="https://m.media-amazon.com/images/I/71Hx8b6HGbL._AC_SX466_.jpg" price="25.95" rating="⭐⭐⭐⭐"/>
        <Product id="7" name="FEIDUSUN Sunglasses Men Polarized Sunglasses for Mens and Womens,Black Retro Sun Glasses Driving Fishing UV" image="https://m.media-amazon.com/images/I/51ABDkq99LL._AC_UX569_.jpg" price="8.55" rating="⭐⭐⭐"/>
        <Product id="8" name="Genhoo Women's Summer Floral Printed Wrap V Neck Cap Sleeve Beach Pleated Hem Party Midi Dress S-2X" image="https://m.media-amazon.com/images/I/81MFctGPfCL._AC_UY550_.jpg" price="17.96" rating="⭐⭐"/>
      </div>
      <div className="home_row">
        <Product id="9" name="DOLLFIO Floating Shelves with Wall Décor Sign, Bathroom Shelves with Wire Storage Basket"image="https://m.media-amazon.com/images/I/71AsdCU0dgL._AC_SX569_.jpg" price="26.25" rating="⭐⭐⭐"/>
        <Product id="10" name="ExAchat A14 Pro Max Unlocked Phone 5G, 6GB+256GB Android13 Smartphone 6.82 Display 120Hz 64MP Camera 6800mAh"image="https://m.media-amazon.com/images/I/71v+tVb5A4L._AC_SX569_.jpg" price="207.92" rating="⭐⭐⭐⭐"/>
        <Product id="11" name="PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Oz" image="https://m.media-amazon.com/images/I/71-GCIBN8wL._SX466_.jpg" price="9.57" rating="⭐⭐⭐"/>
        <Product id="12" name="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness" image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX679_.jpg" price="31.63" rating="⭐⭐⭐⭐⭐"/>
      </div>
    </div>
  );
}

export default ShoppingSection;
