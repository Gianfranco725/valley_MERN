import React from 'react';

const CategoriesMain = () => {
  return (
    <div className="categories-main">
      <h1>Categories</h1>
      <div className="categories-main__container">
        <form className="categories-main__form" autoComplete="off">
          <div className="form-inputs">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="First Drop" />
          </div>
          <div className="form-inputs">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="First Drop Valley"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="media">Media</label>
            <input type="file" id="media" />
          </div>
        </form>
        <div className="categories-main__list">
          <table>
            <thead className="table-header">
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Graphic Tshirt Wave Valley</td>
                <td>Men Clothing</td>
                <td>
                  <small className="product-card__dots">...</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMain;
