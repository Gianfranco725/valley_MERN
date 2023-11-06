import React from 'react';
import Header from '../components/Header';
import ProductsContainer from '../components/ProductsContainer';
import HeroImage from '../components/HeroImage';
import BigSmall from '../components/BigSmall';
import GridImages from '../components/GridImages';
import RichText from '../components/RichText';
import TwoColumsImg from '../components/TwoColumsImg';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <BigSmall />
      <ProductsContainer />
      <GridImages />
      <RichText />
      {/* 
      <TwoColumsImg /> */}
      <Footer />
    </>
  );
};

export default HomePage;
