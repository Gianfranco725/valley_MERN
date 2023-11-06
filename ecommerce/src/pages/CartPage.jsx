import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="cart-page">
        <div className="bag">
          <h4>Bag</h4>
          <p>There are no items in your bag.</p>
        </div>
        <aside className="summary">
          <h4>Summary</h4>
          <div className="summary__containers">
            <p>Subtotal</p>
            <p className="summary__containers--numbers">--</p>
          </div>
          <div className="summary__containers">
            <p>Estimated Shipping & Handling</p>
            <p className="summary__containers--numbers">--</p>
          </div>
          <div className="summary__containers">
            <p>Estimated Tax</p>
            <p className="summary__containers--numbers">--</p>
          </div>
          <div className="summary__containers">
            <p>Total</p>
            <p className="summary__containers--numbers">--</p>
          </div>
          <button className="button-add-to-bag">Checkout</button>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
