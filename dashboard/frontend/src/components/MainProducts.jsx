import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../redux/Actions/ProductActions';

const MainProducts = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return loading ? (
    'esta cargando'
  ) : error ? (
    'hubo un error'
  ) : (
    <div className="main-products">
      <h1>Products</h1>
      <div className="main-products-buttons">
        <NavLink
          to="/addProducts"
          className="main-products-button main-products__add"
        >
          <p>Add Product</p>
        </NavLink>
        <div className="main-products__filters">
          <div className="main-products-button">
            <p>All Categories</p>
          </div>
          <div className="main-products-button">
            <p>Lastest Added</p>
          </div>
        </div>
      </div>
      <div className="main-products__container">
        {products &&
          products.map((product) => (
            <ProductCard
              className="product-card"
              key={product._id}
              props={product}
            />
          ))}
      </div>
    </div>
  );
};

export default MainProducts;
