import React from 'react';
import Multicolumn from './Multicolumn';

const RichText = ({ dinamicText }) => {
  return (
    <div className="rich-text">
      <div className="rich-text__column">
        <h4 className="rich-text-cta">
          {dinamicText
            ? dinamicText
            : 'Shop Our Initiation Collection with Free Shipping and Easy Returns one for guide'}
        </h4>
      </div>
      <div className="rich-text__column">
        <Multicolumn />
      </div>
    </div>
  );
};

export default RichText;
