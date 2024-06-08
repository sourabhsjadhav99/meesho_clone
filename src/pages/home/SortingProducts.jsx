import Filter from "./Filter";

import ProductList from "../../components/ProductList";
function SortingProducts({isCategory}) {
  return (
    <div className="w-[100%]  flex flex-col items-center p-2">
      <div className="w-[100%] md:w-[90%] ">
        <h1 className="text-3xl mb-6">Products for You</h1>
        <div className="w-full flex flex-col md:flex-row gap-8 ">
          <div>
            <Filter isCategory={isCategory}/>
          </div>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingProducts;
