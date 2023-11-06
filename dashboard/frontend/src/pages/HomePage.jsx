import React from 'react';
import SideBar from '../components/SideBar.jsx';
import Main from '../components/Main.jsx';

const HomePage = () => {
  return (
    <>
      <SideBar />
      <div className="main-wrap">
        <Main />
      </div>
    </>
  );
};

export default HomePage;
