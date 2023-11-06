import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, deleteProduct } from '../redux/Actions/ProductActions';

const TaskDetails = ({ props, setOpenModal }) => {
  const { _id, title, price, desc, count } = props;
  const dispatch = useDispatch();

  const [file, setFile] = useState({
    _id,
    title,
    price,
    desc,
    count,
    img: '',
  });

  const updateProduct = (event) => {
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

  const submitProduct = (e) => {
    e.preventDefault();
    dispatch(editProduct(file, file._id));
  };

  const deleteTask = async (e) => {
    e.preventDefault();
    dispatch(deleteProduct(file._id));
  };

  return (
    <div className="modal">
      <div className="bg-modal">
        <div className="modal__container">
          <button
            onClick={() => setOpenModal(false)}
            className="modal__close-btn"
          >
            X
          </button>
          <h2 className="title-modal">Edit Product</h2>
          <form onSubmit={(e) => submitProduct(e)} className="modal__form">
            <label htmlFor="title">Product Title</label>
            <input
              name="title"
              type="text"
              id="title"
              value={file.title}
              required
              placeholder="Title"
              onChange={(e) => updateProduct(e)}
            />
            <br />
            <label htmlFor="desc">Product Description</label>
            <input
              name="desc"
              type="text"
              id="desc"
              value={file.desc}
              required
              placeholder="Description"
              onChange={(e) => updateProduct(e)}
            />
            <br />
            <label htmlFor="count">Product Count</label>
            <input
              name="count"
              type="number"
              id="count"
              value={file.count}
              required
              placeholder="124"
              onChange={(e) => updateProduct(e)}
            />
            <br />
            <label htmlFor="price">Product Price</label>
            <input
              name="price"
              type="number"
              id="price"
              value={file.price}
              required
              placeholder="$22"
              onChange={(e) => updateProduct(e)}
            />

            <br />

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

export default TaskDetails;
