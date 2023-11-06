import React, { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ProductDetails from './ProductDetails';

const ProductCard = ({ props }) => {
  const { isAdmin, username, title, price, img, count, desc } = props;
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="product-card">
      {username && 'Profile Picture'}
      {img && <img className="card-img" alt={title} src={img} />}
      <div className="product-card__text">
        <p>
          {username ? username : title || 'There is not title and username'}
        </p>
        <div className="product-details">
          {isAdmin ? (
            <>
              <small>is Admin?</small>
              <p>'Admin'</p>
            </>
          ) : price ? (
            <p>${price}</p>
          ) : (
            'There is not admin and price'
          )}
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="round-icon-container neutral-round-icon"
          >
            <EditOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div>
        {openModal && (
          <ProductDetails props={props} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
