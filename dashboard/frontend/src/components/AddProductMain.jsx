import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Actions/ProductActions';

const AddProductMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState({ img: '' });
  /*   const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList; */

  const handleChange = (event) => {
    const value = event.target.value;
    setFile({ ...file, [event.target.id]: value });
  };
  const handleChangeFile = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setFile({ ...file, img: reader.result });
    };
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(file));
    console.log('loading...');
    /* setTimeout(() => {
      navigate('/products');
    }, 1000); */
    navigate('/products');
  };

  return (
    <div className="add-product-main">
      <h1>Add Products</h1>
      <form
        className="add-product-main__form"
        autoComplete="off"
        onSubmit={(e) => handlerSubmit(e)}
      >
        <div className="form-inputs">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Valley T-Shirt"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            placeholder="Graphic Wavy Logo"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="count">CountInStock</label>
          <input
            type="text"
            id="count"
            placeholder="40"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="20"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="img">Media</label>
          <input
            type="file"
            name="hola"
            id="img"
            onChange={(e) => handleChangeFile(e)}
          />
          {file.img === '' ? (
            ''
          ) : (
            <img width={142} alt="laFoto" src={file.img} />
          )}
        </div>
        <button type="submit" className="primary-color">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductMain;
