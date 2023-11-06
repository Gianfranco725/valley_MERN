import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header-option-list">
          <li className="header-option">
            <Link to="/">Home</Link>
          </li>
          <li className="header-option">First Drop</li>
          <li className="header-option">Cart</li>
        </ul>
        <Link to="/" className="logo">
          Valley
        </Link>
        <div className="header-option-list">
          <Link to="/cart" class="material-symbols-outlined cart">
            shopping_bag
          </Link>
        </div>
      </div>
      <div className="promotion-bar">Free Shipping</div>
    </>
  );
};

export default Header;
