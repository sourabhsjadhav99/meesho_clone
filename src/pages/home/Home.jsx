import React from "react";
import Cover from "./Cover";
import Categories from "./Categories";
import SortingProducts from "./SortingProducts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header/Header";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Cover />
      <Categories />
      <SortingProducts />
      <Footer />
    </div>
  );
}

export default Home;
