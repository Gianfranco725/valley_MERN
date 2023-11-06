import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Multicolumn from '../components/Multicolumn';
import RichText from '../components/RichText';
import Footer from '../components/Footer';

const ProductPage = () => {
  /* const navigate = useNavigate(); */
  let params = useParams();

  const [product, setProduct] = useState([]);
  const [productCart, setProductCart] = useState({});
  const [cart, setCart] = useState([
    {
      elId: 1,
      size: 'M',
    },
  ]);

  let id = params.productId;
  const { _id } = product;

  const handleChange = (e) => {
    setProductCart({
      ...productCart,
      _id,
      [e.target.name]: e.target.value,
    });
  };

  const addToBag = (e) => {
    e.preventDefault();
    setCart([...cart, productCart]);
    localStorage.setItem('userCart', JSON.stringify({ cart }));
    /* return navigate('/cart'); */
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/find/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="main-product-info">
          <div className="main-product-info__images">
            <img src={product.img} alt={product.title} />
            <img src={product.img} alt={product.title} />
            <img src={product.img} alt={product.title} />
            <img src={product.img} alt={product.title} />
            <img src={product.img} alt={product.title} />
            <img src={product.img} alt={product.title} />
          </div>
          <div className="product-details">
            <form
              onSubmit={(e) => addToBag(e)}
              action=""
              className="product-details__form"
            >
              <p className="product-details__collection">First Drop Test</p>
              <p className="product-details__title">{product.title}</p>
              <p className="product-details__price">${product.price}</p>
              <fieldset className="product-details__size">
                <legend>Size</legend>
                <input
                  type="radio"
                  id="S"
                  name="size"
                  value="S"
                  onChange={handleChange}
                />
                <label htmlFor="S">S</label>

                <input
                  type="radio"
                  id="M"
                  name="size"
                  value="M"
                  onChange={handleChange}
                />
                <label htmlFor="M">M</label>

                <input
                  type="radio"
                  id="L"
                  name="size"
                  value="L"
                  onChange={handleChange}
                />
                <label htmlFor="L">L</label>

                <input
                  type="radio"
                  id="XL"
                  name="size"
                  value="XL"
                  onChange={handleChange}
                />
                <label htmlFor="XL">XL</label>
              </fieldset>
              <div className="product-details__quantity">
                <p className="product-details__quantity-title">Quantity:</p>
                <input type="number" onChange={handleChange} name="quantity" />
              </div>
              <div className="product-details__buttons">
                <button className="button-add-to-bag">Add to Bag</button>
              </div>
              {/* <p>{product.count}</p> */}
            </form>
            <p>Accordion</p>
            <p>Accordion</p>
            <p>Accordion</p>
            <p>Accordion</p>
          </div>
        </div>
        <Multicolumn />
        <div className="rectangle-image-cta">
          <h4>I did it</h4>
        </div>
        <RichText dinamicText={product.desc} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
