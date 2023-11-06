import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userLoginReducer } from './Reducers/userReducer';
import { productReducer } from './Reducers/productReducer';
import { orderReducer } from './Reducers/orderReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productReducer,
  orderList: orderReducer,
});

// Login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Products
const productFromLocalStorage = localStorage.getItem('productList')
  ? JSON.parse(localStorage.getItem('productList'))
  : [];

// Orders
export const ordersFromLocalStorage = localStorage.getItem('orderList')
  ? JSON.parse(localStorage.getItem('orderList'))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  productList: {
    loading: true,
    error: false,
    products: productFromLocalStorage,
  },
  orderList: {
    loading: true,
    error: false,
    orders: ordersFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
