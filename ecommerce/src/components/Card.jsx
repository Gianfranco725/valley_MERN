import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ props }) => {
  return (
    <div className="card">
      <Link to={`/products/${props._id}`}>
        <img src={props.img} alt={props.title} />
        <div className="card_info">
          <p>{props.title}</p>
          <p>${props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
