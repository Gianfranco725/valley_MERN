import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../redux/Actions/OrderActions.js';

const options = [
  { value: '1', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const AddOrderMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList; */

  const [file, setFile] = useState({});

  const updateProduct = (event) => {
    const value = event.target.value;
    setFile({ ...file, [event.target.id]: value });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    dispatch(addOrder(file));
    console.log('loading...');
    navigate('/orders');
    /* setTimeout(() => {
      navigate('/orders');
    }, 1000); */
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(async () => {
      const tempArray = [];
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      data.forEach((el) => {
        tempArray.push({
          label: el.title,
          value: el._id,
        });
      });
      /* const filteredOptions = data.filter((option) =>
        option.title
          .toLocaleUpperCase()
          .includes(searchValue.toLocaleUpperCase())
      ); */
      callback(tempArray);
    }, 1000);
  };

  return (
    <div className="add-order-main">
      <h1 className="title-modal">Add Order</h1>
      <form onSubmit={(e) => submitProduct(e)} className="add-order-main__form">
        <div className="add-order-main__form--container">
          <div className="name">
            <input
              name="firstName"
              type="text"
              id="firstName"
              required
              placeholder="First Name"
              onChange={(e) => updateProduct(e)}
            />
            <input
              name="lastName"
              type="text"
              id="lastName"
              required
              placeholder="Last Name"
              onChange={(e) => updateProduct(e)}
            />
          </div>

          <input
            name="address"
            type="text"
            id="address"
            required
            placeholder="Address"
            onChange={(e) => updateProduct(e)}
          />
          <div className="location">
            <input
              name="city"
              type="text"
              id="city"
              required
              placeholder="City"
              onChange={(e) => updateProduct(e)}
            />
            <input
              name="state"
              type="text"
              id="state"
              required
              placeholder="State"
              onChange={(e) => updateProduct(e)}
            />
          </div>
          <input
            name="zipCode"
            type="number"
            id="zipCode"
            required
            placeholder="PostalCode"
            onChange={(e) => updateProduct(e)}
          />
          <input
            name="apartment"
            type="text"
            id="apartment"
            placeholder="Apartment, Suite, Etc. (Optional)"
            onChange={(e) => updateProduct(e)}
          />
          <select id="status" onChange={(e) => updateProduct(e)}>
            <option required value="pending">
              Pending
            </option>
            <option required value="delivered">
              Delivered
            </option>
          </select>
          <div className="contact">
            <input
              name="email"
              type="text"
              id="email"
              required
              placeholder="Email"
              onChange={(e) => updateProduct(e)}
            />
            <input
              name="telephone"
              type="number"
              id="telephone"
              placeholder="Phone Number (Optional)"
              onChange={(e) => updateProduct(e)}
            />
          </div>
          <AsyncSelect
            closeMenuOnSelect={false}
            loadOptions={loadOptions}
            isMulti={true}
            defaultOptions
            onChange={(selectedOption) => {
              setFile({ ...file, products: selectedOption });
            }}
            styles={{
              control: (styles) => {
                return {
                  ...styles,
                  backgroundColor: '#ebebeb',
                  borderWidth: 0,
                };
              },
            }}
          />
          {/* <select name="selectedFruit" multiple={true}>
            <option
              onChange={(e) => updateProduct(e)}
              id="products"
              required
              value="1"
            >
              product 1
            </option>
            <option
              onChange={(e) => updateProduct(e)}
              id="products"
              required
              value="2"
            >
              product 2
            </option>
            <option
              onChange={(e) => updateProduct(e)}
              id="products"
              required
              value="3"
            >
              product 3
            </option>
          </select> */}
          {/* <fieldset>
              <legend>media</legend>
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
            </fieldset> */}

          {/* <label htmlFor="category">
              Category of the Task
              <select
                name="category"
                id="category"
                onChange={(e) => updateProduct(e)}
              >
                <option value="---">---</option>
                <option value="To Do">To Do</option>
                <option value="In Process">In Process</option>
                <option value="Done">Done</option>
              </select>
            </label> */}
        </div>
        <button type="submit" className="primary-color">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOrderMain;
