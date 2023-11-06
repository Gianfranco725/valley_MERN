import React from 'react';

const Multicolumn = () => {
  return (
    <div className="multicolumn">
      <div className="column">
        <p className="multicolumn-title">Free Shipping</p>
        <p>Get your activewear fix delivered to your doorstep for free.</p>
      </div>
      <div className="column">
        <p className="multicolumn-title">Secure Checkout</p>
        <p>Your payment information is safe with our secure checkout.</p>
      </div>
      <div className="column">
        <p className="multicolumn-title">Sustainable Materials</p>
        <p>
          Our commitment to sustainability means that we use eco-friendly
          materials.
        </p>
      </div>
      <div className="column">
        <p className="multicolumn-title">Easy 30-days Returns</p>
        <p>Risk-free 30-day returns for easy exchanges or refunds.</p>
      </div>
    </div>
  );
};

export default Multicolumn;
