import './App.css';
import HomePage from './pages/HomePage.jsx';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Transactions from './pages/Transactions';
import Register from './screen/Register';
import PrivateRouter from './PrivateRouter';
import Login from './screen/Login';
import AddOrder from './pages/AddOrder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <HomePage />
            </PrivateRouter>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRouter>
              <Products />
            </PrivateRouter>
          }
        />
        <Route
          path="/addProducts"
          element={
            <PrivateRouter>
              <AddProduct />
            </PrivateRouter>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRouter>
              <Categories />
            </PrivateRouter>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRouter>
              <Orders />
            </PrivateRouter>
          }
        />
        <Route
          path="/addOrders"
          element={
            <PrivateRouter>
              <AddOrder />
            </PrivateRouter>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRouter>
              <Users />
            </PrivateRouter>
          }
        />
        <Route
          path="/transactions"
          element={
            <PrivateRouter>
              <Transactions />
            </PrivateRouter>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
