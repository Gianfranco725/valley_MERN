import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/Actions/OrderActions.js';
import { NavLink } from 'react-router-dom';
import OrderCard from './OrderCard.jsx';

const MainOrders = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return loading ? (
    'esta cargando'
  ) : error ? (
    'hubo un error'
  ) : (
    <div className="order-main">
      <h1>Orders</h1>
      <div className="main-products-buttons">
        <NavLink
          to="/addOrders"
          className="main-products-button main-products__add"
        >
          <p>Add Order</p>
        </NavLink>
        <div className="main-products__filters">
          <div className="main-products-button">
            <p>Lastest Added</p>
          </div>
        </div>
      </div>
      <table className="order-main__table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>N°. Products</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => <OrderCard key={order._id} order={order} />)}
          {/*           <tr>
            <td>124</td>
            <td>elcorerowd@opla.com</td>
            <td>$27</td>
            <td>08/30/2020</td>
            <td>delivered</td>
            <td>
              <small className="product-card__dots">...</small>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default MainOrders;
