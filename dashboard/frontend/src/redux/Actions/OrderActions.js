import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ADD__ORDER_LIST_REQUEST,
  ADD_ORDER_LIST_SUCCESS,
  ADD_ORDER_LIST_FAIL,
  EDIT__ORDER_LIST_REQUEST,
  EDIT_ORDER_LIST_SUCCESS,
  EDIT_ORDER_LIST_FAIL,
  DELETE__ORDER_LIST_REQUEST,
  DELETE_ORDER_LIST_SUCCESS,
  DELETE_ORDER_LIST_FAIL,
} from '../Constants/OrderConstants.js';
import axios from 'axios';

// GET ALL Orders
export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });
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
    const { data } = await axios.get(
      'http://localhost:5000/api/orders',
      config
    );
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    localStorage.setItem('orderList', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ADD Order
export const addOrder = (file) => async (dispatch) => {
  try {
    dispatch({ type: ADD__ORDER_LIST_REQUEST });
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
      'http://localhost:5000/api/orders',
      file,
      config
    );
    console.log(data);
    dispatch({ type: ADD_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Edit Order
export const editOrder = (file, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT__ORDER_LIST_REQUEST });
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
      `http://localhost:5000/api/orders/${id}`,
      file,
      config
    );
    dispatch({ type: EDIT_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EDIT_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete Order
export const deleteOrder = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({ type: DELETE__ORDER_LIST_REQUEST });
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
      `http://localhost:5000/api/orders/${id}`,
      config
    );
    dispatch({ type: DELETE_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
