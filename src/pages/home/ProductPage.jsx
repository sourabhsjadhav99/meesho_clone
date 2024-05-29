import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
function ProductPage() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[300px]  rounded text-[#353543] my-2">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className=" w-full flex justify-between p-3 items-center border-2 border-transperent active:border-gray-500 duration-300 rounded"
      >
        <div>
          <span className="text-gray-400">Sort by : </span>
          <span className="text-black font-medium">Relavence</span>
        </div>{" "}
        <div className="text-2xl">
          {!isOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="flex flex-col border-2 items-start rounded mt-1 w-full font-medium ">
          <button className="p-3 w-full text-start text-gray-500 bg-pink-100 hover:bg-[#F8F8FF]">
            Relevence
          </button>
          <button className="p-3 w-full text-start text-gray-500 hover:bg-[#F8F8FF]">
            New Arrival
          </button>
          <button className="p-3 w-full text-start text-gray-500 hover:bg-[#F8F8FF]">
            Price(High to low)
          </button>
          <button className="p-3 w-full text-start text-gray-500 hover:bg-[#F8F8FF]">
            Price (Low to high)
          </button>
          <button className="p-3 w-full text-start text-gray-500 hover:bg-[#F8F8FF]">
            Ratings
          </button>
          <button className="p-3 w-full text-start text-gray-500 hover:bg-[#F8F8FF]">
            Discount
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
