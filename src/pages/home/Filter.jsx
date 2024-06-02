

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { toggleCategory, clearAllCategories, setSortOption, toggleGender } from "../../redux/filterSlice";

function Filter() {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.filters.selectedCategories) || [];
  const selectedGenders = useSelector((state) => state.filters.selectedGenders) || [];

  const options = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ];

  const toggleCheckbox = (option) => {
    dispatch(toggleCategory(option));
  };

  const clearAll = () => {
    dispatch(clearAllCategories());
  };

  const filteredOptions = options
    .filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aSelected = selectedCategories.includes(a);
      const bSelected = selectedCategories.includes(b);
      if (aSelected === bSelected) {
        return a.localeCompare(b);
      }
      return aSelected ? -1 : 1;
    });

  const genderOptions = ["Men", "Women"].sort((a, b) => {
    const aSelected = selectedGenders.includes(a);
    const bSelected = selectedGenders.includes(b);
    if (aSelected === bSelected) {
      return a.localeCompare(b);
    }
    return aSelected ? -1 : 1;
  });

  const hasSelectedFilters = selectedCategories.length > 0 || selectedGenders.length > 0;

  return (
    <div className="flex flex-col items-start p-1 w-[300px] border-2 rounded my-2">
      <div className="w-full flex justify-between p-2">
        <div>
          <p className="font-medium text-lg">FILTERS</p>
          <small>1000+ Products</small>
        </div>
       {hasSelectedFilters && <div>
          <button onClick={clearAll} className="font-bold">
            CLEAR ALL
          </button>
        </div>}
      </div>

      <div className="relative flex flex-col items-center w-full rounded text-[#353543]">
        <button
          onClick={() => setIsGenderOpen((prev) => !prev)}
          className="w-full flex justify-between p-1 items-center"
        >
          <div>
            <span className="text-black text-lg font-medium">Gender</span>
          </div>
          <div className="text-2xl">
            {!isGenderOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
        </button>

        {isGenderOpen && (
          <div className="flex flex-wrap w-full  gap-4 justify-start mt-1 font-medium">
            {genderOptions.map((gender) => (
              <button
                key={gender}
                onClick={() => dispatch(toggleGender(gender))}
                className={`p-1 px-2 border-2 rounded-xl text-center ${
                  selectedGenders.includes(gender)
                    ? "bg-pink-500 text-white font-bold"
                    : "text-gray-500 hover:bg-[#F8F8FF]"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        )}
      </div>
      <hr className="m-4 w-[90%] border border-gray-300" />
      <div className="relative flex flex-col items-start p-1 w-full rounded text-[#353543]">
        <button
          onClick={() => setIsCategoryOpen((prev) => !prev)}
          className="w-full flex justify-between items-center"
        >
          <div>
            <span className="text-black text-lg font-medium">Category</span>
          </div>
          <div className="text-2xl">
            {!isCategoryOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
        </button>

        {isCategoryOpen && (
          <div className="w-full">
            <div className="flex items-center justify-between border border-gray-300 rounded-md my-1">
              <div className="text-xl text-gray-300 p-2">
                <FiSearch />
              </div>
              <div className="w-[90%] ">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full mb-2 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 items-start rounded font-medium">
              {filteredOptions.map((option) => (
                <label
                  key={option}
                  className="p-1 w-full rounded-xl flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(option)}
                    onChange={() => toggleCheckbox(option)}
                    className="h-4 w-4 border-2 border-gray-300 rounded checked:bg-green-500 focus:ring-0"
                  />
                  <span
                    className={`${
                      selectedCategories.includes(option)
                        ? "font-bold text-black"
                        : "font-medium text-gray-500"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
