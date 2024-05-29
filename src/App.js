import React from 'react';
import './index.css'; // Ensure this import is present
import Categories from './pages/home/Categories';
import Cover from './pages/home/Cover';
import ProductPage from './pages/home/ProductPage';
import Filter from './pages/home/Filter';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="container">
      <div>hii</div>
      {/* <Cover />
      <Categories /> */}
      <ProductPage/>
      <Filter/>
      <ProductCard/>

    </div>
  );
}

export default App;