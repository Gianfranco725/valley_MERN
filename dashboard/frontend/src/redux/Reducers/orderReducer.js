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

// Get All Orders
export const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, error: false, orders: state.orders };
    case ORDER_LIST_SUCCESS:
      return { loading: false, error: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Add Order
export const addOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD__ORDER_LIST_REQUEST:
      return { loading: true, error: false, orders: state.orders };
    case ADD_ORDER_LIST_SUCCESS:
      return { loading: false, error: false, orders: [action.payload] };
    case ADD_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Edit Order
export const editOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT__ORDER_LIST_REQUEST:
      return { loading: true, error: false, orders: state.orders };
    case EDIT_ORDER_LIST_SUCCESS:
      return { loading: false, error: false, orders: action.payload };
    case EDIT_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Delete Order
export const deleteOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE__ORDER_LIST_REQUEST:
      return { loading: true, error: false, orders: state.orders };
    case DELETE_ORDER_LIST_SUCCESS:
      return { loading: false, error: false, orders: action.payload };
    case DELETE_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
