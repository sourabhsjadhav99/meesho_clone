import React from "react";
import Navbar from "../../components/Header/Header";
import SortingProducts from "../home/SortingProducts";
import Footer from "../../components/Footer";

function CategoryPage() {
  return (
    <div>
      <Navbar />
      <SortingProducts />
      <Footer />
    </div>
  );
}

export default CategoryPage;
