import React from "react";
import { FaStar } from "react-icons/fa6";
function ProductCard() {
  return (
    <div className="flex flex-col w-[225px] h-[400px] rounded border">
      <div className="h-[60%] relative">
        <img
          src="https://images.meesho.com/images/products/299655432/9aeie_400.webp"
          alt=""
          className="contain w-full h-full rounded-t"
        />
        <small className="bg-white p-1 absolute bottom-0 left-[166px] rounded-tl-lg">+5 more</small>
      </div>
      <div className="flex flex-col p-2 gap-3">
        <div>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <b className="text-xl mr-2">Rs.268</b>
          <small>onwards</small>
        </div>
        <div >
          <small className="bg-red-100 border rounded-xl px-2">Free delivery</small>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="flex px-2 justify-between items-center text-white w-[50px] bg-green-500 border rounded-2xl">4.5<FaStar /></p>
          <small>700 Reviews</small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
