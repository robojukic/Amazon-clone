import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <nav className="header">
      {/*logo on the left*/}
      <Link to="/">
        <img
          className="header-logo"
          src="https://camo.githubusercontent.com/e74e5d2a7b17872ddf1147fe8bbf56d686cc18e909dbba00a7b81f5c7d6174a6/68747470733a2f2f6576657273686f702e696f2f696d672f6c6f676f2e706e67"
        />
      </Link>

      {/*search bar*/}
      <div className="header-search">
        <input type="text" className="header-searchInput"></input>
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* 3 links*/}
      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-optionLineOne">
              Hello,{user ? user.email : ""}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>

        {/*basket icon with a number*/}
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket ">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-optionCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
