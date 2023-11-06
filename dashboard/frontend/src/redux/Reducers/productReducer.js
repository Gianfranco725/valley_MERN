import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  ADD__PRODUCT_LIST_REQUEST,
  ADD_PRODUCT_LIST_SUCCESS,
  ADD_PRODUCT_LIST_FAIL,
  EDIT__PRODUCT_LIST_REQUEST,
  EDIT_PRODUCT_LIST_SUCCESS,
  EDIT_PRODUCT_LIST_FAIL,
  DELETE__PRODUCT_LIST_REQUEST,
  DELETE_PRODUCT_LIST_SUCCESS,
  DELETE_PRODUCT_LIST_FAIL,
} from '../Constants/ProductConstants.js';

// Get All Products
export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, error: false, products: state.products };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, error: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Add Product
export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD__PRODUCT_LIST_REQUEST:
      return { loading: true, error: false, products: state.products };
    case ADD_PRODUCT_LIST_SUCCESS:
      return { loading: false, error: false, products: action.payload };
    case ADD_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Edit Product
export const editProductReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT__PRODUCT_LIST_REQUEST:
      return { loading: true, error: false, products: [] };
    case EDIT_PRODUCT_LIST_SUCCESS:
      return { loading: false, error: false, products: action.payload };
    case EDIT_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Delete Product
export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE__PRODUCT_LIST_REQUEST:
      return { loading: true, error: false, products: [] };
    case DELETE_PRODUCT_LIST_SUCCESS:
      return { loading: false, error: false, products: action.payload };
    case DELETE_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
