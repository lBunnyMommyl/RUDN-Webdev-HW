import React from 'react';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

const HomePage: React.FC = () => {
  console.log('HomePage rendered');
  
  return (
    <>
      <Header />
      <Catalog />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;