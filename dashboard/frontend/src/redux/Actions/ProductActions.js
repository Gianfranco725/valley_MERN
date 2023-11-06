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
import axios from 'axios';

// GET ALL PRODUCTS
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('http://localhost:5000/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    localStorage.setItem('productList', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADD Product
export const addProduct = (file) => async (dispatch) => {
  try {
    dispatch({ type: ADD__PRODUCT_LIST_REQUEST });
    const userRaw = localStorage.getItem(
      'userInfo',
      JSON.stringify('userInfo')
    );
    const user = JSON.parse(userRaw);
    const token = user.accessToken;
    const config = {
      headers: {
        token: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      'http://localhost:5000/api/products',
      file,
      config
    );
    dispatch({ type: ADD_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Edit Product
export const editProduct = (file, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT__PRODUCT_LIST_REQUEST });
    const userRaw = localStorage.getItem(
      'userInfo',
      JSON.stringify('userInfo')
    );
    const user = JSON.parse(userRaw);
    const token = user.accessToken;
    const config = {
      headers: {
        token: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/products/${id}`,
      file,
      config
    );
    dispatch({ type: EDIT_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EDIT_PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE__PRODUCT_LIST_REQUEST });
    const userRaw = localStorage.getItem(
      'userInfo',
      JSON.stringify('userInfo')
    );
    const user = JSON.parse(userRaw);
    const token = user.accessToken;
    const config = {
      headers: {
        token: `Bearer ${token}`,
      },
    };
    const { data } = await axios.delete(
      `http://localhost:5000/api/products/${id}`,
      config
    );
    dispatch({ type: DELETE_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
