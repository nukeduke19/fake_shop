import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar({ cartCount }) {
  return (
    <div className="navbar">
      <h1 className="navbar__heading">FakeShop.com</h1>
      <div className="navbar__cartContainer">
        <p className="navbar__cart">Cart {cartCount}</p>
        <Link to="/feedback" className="navbar__link">
          Feedback
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
