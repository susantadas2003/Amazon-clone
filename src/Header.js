import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{basket,user},dispatch]=useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header_home">
      <Link to="/">
        {" "}
        <img
          className="header_logo border_home"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_option border_home">
        <span className="header_optionLineOne">Deliver to</span>
        <LocationOnIcon />
        <span className="header_optionLineTwo">India</span>
      </div>

      <div className="header_search">
        <select className="header_search_option">
          <option>All</option>
        </select>
        <input
          placeholder="Search Amazon "
          className="header_searchInput"
          type="text"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header_option border_home">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user?.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/orders">
        <div className="header_option border_home">
          <span className="header_optionLineOne">Returns</span>

          <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link >
        <div className="header_option border_home">
          <span className="header_optionLineOne">Your</span>

          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket border_home">
      
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>
      </div>
        
    </div>
  );
}

export default Header;
