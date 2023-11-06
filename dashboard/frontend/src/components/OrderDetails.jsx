import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { editOrder, deleteOrder } from '../redux/Actions/OrderActions.js';

const OrderDetails = ({ props, setOpenModal }) => {
  const dispatch = useDispatch();
  const {
    _id,
    firstName,
    lastName,
    products,
    status,
    email,
    state,
    city,
    address,
    zipCode,
    apartment,
  } = props;

  const [file, setFile] = useState({
    _id,
    firstName,
    lastName,
    products,
    status,
    email,
    state,
    city,
    address,
    zipCode,
    apartment,
  });

  const updateProduct = (event) => {
    const value = event.target.value;
    setFile({ ...file, [event.target.id]: value });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    dispatch(editOrder(file, file._id));
  };

  const deleteTask = async (e) => {
    e.preventDefault();
    dispatch(deleteOrder(file._id));
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(async () => {
      const tempArray = [];
      /* const tempArray = file.products; */
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      data.forEach((el) => {
        tempArray.push({
          label: el.title,
          value: el._id,
          price: el.price,
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
    <div className="modal">
      <div className="bg-modal">
        <div className="modal__container-100">
          <button
            onClick={() => setOpenModal(false)}
            className="modal__close-btn"
          >
            X
          </button>
          <h2 className="title-modal">Edit Customer's Order</h2>
          <form onSubmit={(e) => submitProduct(e)} className="modal__form-100">
            <div className="wrap">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                value={file.firstName}
                required
                placeholder="FirstName"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                value={file.lastName}
                required
                placeholder="LastName"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <p>Products</p>
              <AsyncSelect
                id="products"
                closeMenuOnSelect={false}
                loadOptions={loadOptions}
                isMulti={true}
                defaultOptions
                defaultValue={products}
                onChange={(selectedOption) => {
                  console.log(selectedOption);
                  setFile({ ...file, products: selectedOption });
                }}
                styles={{
                  control: (styles) => {
                    return {
                      ...styles,
                      backgroundColor: '#ebebeb',
                      borderWidth: 0,

                      marginTop: '6px',
                    };
                  },
                  valueContainer: (styles) => {
                    return {
                      ...styles,
                      height: '100%',
                      alignContent: 'center',
                    };
                  },
                }}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="status">Status</label>
              <select id="status" onChange={(e) => updateProduct(e)}>
                <option required value="pending">
                  Pending
                </option>
                <option required value="delivered">
                  Delivered
                </option>
              </select>
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                id="email"
                value={file.email}
                required
                placeholder="email@example.com"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="state">State</label>
              <input
                name="state"
                type="text"
                id="state"
                value={file.state}
                required
                placeholder="state"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="city">City</label>
              <input
                name="city"
                type="text"
                id="city"
                value={file.city}
                required
                placeholder="city"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                id="address"
                value={file.address}
                required
                placeholder="address"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="zipCode">ZipCode</label>
              <input
                name="zipCode"
                type="number"
                id="zipCode"
                value={file.zipCode}
                required
                placeholder="12345"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />
            <div className="wrap">
              <label htmlFor="apartment">Apartment</label>
              <input
                name="apartment"
                type="text"
                id="apartment"
                value={file.apartment}
                required
                placeholder="Apartment"
                onChange={(e) => updateProduct(e)}
              />
            </div>
            <br />

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
            <button type="submit" className="btn-blue">
              Submit
            </button>
          </form>
          <button onClick={(e) => deleteTask(e)} className="btn-red">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
