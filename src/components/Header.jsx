import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import { useStateValue } from "./StateProvider";
import LoginIcon from "@mui/icons-material/Login";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header-logo">
          <StorefrontSharpIcon className="header-logoImage" fontSize="large" />
          <h2 className="header-logoTitle">iShop</h2>
        </div>
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchSharpIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="nav-item"></div>
      </div>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="nav-item">
          <LoginIcon fontSize="small"/>
          <span className="nav-itemLineTwo">Sing in</span>
        </div>
      </Link>

      <div className="nav-item">
        <span className="nav-itemLineOne"> Your</span>
        <span className="nav-itemLineTwo">Shop</span>
      </div>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="itemBasket">
          <ShoppingBasketIcon />
          <span className="nav-itemLineTwo nav-basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
