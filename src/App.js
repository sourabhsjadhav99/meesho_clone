// import React, { useEffect } from 'react';
// import './index.css'; // Ensure this import is present
// import Home from './pages/home/Home';
// import SingleProduct from './pages/product/SingleProduct';
// import { BrowserRouter, Route, Routes,  useLocation } from 'react-router-dom';
// import CartPage from './pages/cart/CartPage';
// import Payment from './pages/cart/PaymentPage';
// import Summary from './pages/cart/Summary';
// import PayNowPage from './pages/buyNow/PayNowPage';
// import Footer from './components/Footer';
// import Signup from './components/signup/Signup';
// import Navbar from './components/Header/Header';
// import CategoryPage from './pages/category/CategoryPage';
// ;

// function App() {
//   return (
//     <BrowserRouter>

//       <ScrollToTop>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/:id' element={<SingleProduct />} />
//           <Route path='/category' element={<CategoryPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/pay" element={<PayNowPage />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/summary" element={<Summary />} />
//         </Routes>
//       </ScrollToTop>
//     </BrowserRouter>
//   );
// }

// export default App;




// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };


import React, { useEffect } from 'react';
import './index.css'; // Ensure this import is present
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import Payment from './pages/cart/PaymentPage';
import Summary from './pages/cart/Summary';
import PayNowPage from './pages/buyNow/PayNowPage';
import Footer from './components/Footer';
import Signup from './components/signup/Signup';
import Navbar from './components/Header/Header';
import CategoryPage from './pages/category/CategoryPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayNowPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
