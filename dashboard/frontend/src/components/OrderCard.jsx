import React, { useState } from 'react';
import OrderDetails from './OrderDetails';

const OrderCard = ({ order }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <tr key={order._id}>
      <td>{order._id}</td>
      <td>{order.email}</td>
      <td>{order.products.length}</td>
      <td>{order.createdAt}</td>
      <td>{order.status}</td>
      <td>
        <small
          onClick={() => setOpenModal(true)}
          className="product-card__dots"
        >
          ...
        </small>
        {openModal && (
          <OrderDetails props={order} setOpenModal={setOpenModal} />
        )}
      </td>
    </tr>
  );
};

export default OrderCard;
