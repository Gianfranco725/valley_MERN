import React from 'react';
import { NavLink } from 'react-router-dom';
/* Start Icons */
import LineStyleIcon from '@mui/icons-material/LineStyle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { LogOut } from '../redux/Actions/userActions';
/* End Icons */
import { useDispatch } from 'react-redux';

const SideBar = () => {
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    dispatch(LogOut());
  };
  return (
    <div className="sidebar">
      <button onClick={handlerLogOut} className="sidebar-card__container">
        <ExitToAppOutlinedIcon fontSize="large" />
        <p className="sidebar-card__text">Log Out</p>
      </button>
      <NavLink to="/" className="sidebar-card">
        <div className="sidebar-card__container">
          <LineStyleIcon fontSize="large" />
          <p className="sidebar-card__text">Dashboard</p>
        </div>
      </NavLink>
      <NavLink to="/products" className="sidebar-card">
        <div className="sidebar-card__container">
          <StorefrontOutlinedIcon fontSize="large" />

          <p className="sidebar-card__text">Products</p>
        </div>
      </NavLink>
      <NavLink to="/addProducts" className="sidebar-card">
        <div className="sidebar-card__container">
          <PlaylistAddIcon fontSize="large" />
          <p className="sidebar-card__text">Add Products</p>
        </div>
      </NavLink>
      <NavLink to="/categories" className="sidebar-card">
        <div className="sidebar-card__container">
          <ListAltIcon fontSize="large" />
          <p className="sidebar-card__text">Categories</p>
        </div>
      </NavLink>
      <NavLink to="/orders" className="sidebar-card">
        <div className="sidebar-card__container">
          <ShoppingCartOutlinedIcon fontSize="large" />
          <p className="sidebar-card__text">Orders</p>
        </div>
      </NavLink>
      <NavLink to="/AddOrders" className="sidebar-card">
        <div className="sidebar-card__container">
          <AddShoppingCartIcon fontSize="large" />
          <p className="sidebar-card__text">Add Orders</p>
        </div>
      </NavLink>
      <NavLink to="/users" className="sidebar-card">
        <div className="sidebar-card__container">
          <PersonOutlinedIcon fontSize="large" />
          <p className="sidebar-card__text">Users</p>
        </div>
      </NavLink>
      <NavLink to="/transactions" className="sidebar-card">
        <div className="sidebar-card__container">
          <AttachMoneyOutlinedIcon fontSize="large" />
          <p className="sidebar-card__text">Transactions</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
