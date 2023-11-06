import React from 'react';
/* Start Icons */
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
/* End Icons */

const Main = () => {
  return (
    <>
      <div className="quick-stadistics">
        <div className="horiz-3-card">
          <div className="horiz-3-card__text">
            <p>Total Sales</p>
            <h4>$10.000</h4>
          </div>
          <div className="round-icon-container secundary-round-icon">
            <DonutLargeOutlinedIcon className="round-icon" fontSize="large" />
          </div>
        </div>
        <div className="horiz-3-card">
          <div className="horiz-3-card__text">
            <p>Total Orders</p>
            <h4>226.151</h4>
          </div>
          <div className="round-icon-container terceary-round-icon">
            <ShoppingCartOutlinedIcon className="round-icon" fontSize="large" />
          </div>
        </div>
        <div className="horiz-3-card">
          <div className="horiz-3-card__text">
            <p>Total Users</p>
            <h4>7</h4>
          </div>
          <div className="round-icon-container quaternary-round-icon">
            <GroupsOutlinedIcon className="round-icon" fontSize="large" />
          </div>
        </div>
      </div>
      <div className="quick-details">
        <div className="quick-details-card sales-overview">
          <div className="quick-details-card__text">
            <p>Total Sales</p>
            <h4>$10.000</h4>
          </div>
        </div>
        <div className="quick-details-card sales-overview">
          {' '}
          <div className="quick-details-card__text">
            <p>Total overview</p>
            <h4>$10.000</h4>
          </div>
        </div>
        <div className="quick-details-card sales-big">
          <div className="quick-details-card__text">
            <h4>Total Sales by Users</h4>
          </div>{' '}
          <iframe
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-first-ecommerce-mern-bvjlw/embed/charts?id=6549322f-a4b0-4f5b-86df-8ed39316ffd9&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Main;
