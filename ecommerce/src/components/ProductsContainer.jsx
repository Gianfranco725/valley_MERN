import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="products">
      <h4>Show style in your own way</h4>
      <div className="card-container">
        {products
          ? products.map((product, index) => (
              <Card key={index} props={product} />
            ))
          : 'No existe'}
      </div>
    </div>
  );
};

export default ProductsContainer;
