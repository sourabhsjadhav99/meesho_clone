// import React, { useState } from "react";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
// function Filter() {
//   let [isOpen, setIsOpen] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({
//     accessories: false,
//     bags_backpacks: false,
//     heels_sandals: false,
//     sunglasses: false,
//   });

//   const [searchQuery, setSearchQuery] = useState("");

//   const options = [
//     "accessories",
//     "bags_backpacks",
//     "heels_sandals",
//     "sunglasses",
//   ];

//   const toggleCheckbox = (option) => {
//     setSelectedOptions((prevState) => ({
//       ...prevState,
//       [option]: !prevState[option],
//     }));
//   };

//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   return (
//     <div className="flex flex-col items-start p-1  w-[300px] border-2 rounded my-2">
//       <div className="w-full flex justify-between p-2">
//         <div>
//           <p className="font-medium text-lg"> FILTERS </p>
//           <small>1000+ Products</small>
//         </div>
//         <div>
//           <b>CLEAR ALL</b>
//         </div>
//       </div>

//       <div className="relative flex flex-col items-center w-full  rounded text-[#353543] ">
//         <button
//           onClick={() => {
//             setIsOpen((prev) => !prev);
//           }}
//           className=" w-full flex justify-between p-1 items-center  "
//         >
//           <div>
//             <span className="text-black text-lg font-medium">Gender</span>
//           </div>{" "}
//           <div className="text-2xl">
//             {!isOpen ? (
//               <MdOutlineKeyboardArrowDown />
//             ) : (
//               <MdOutlineKeyboardArrowUp />
//             )}
//           </div>
//         </button>

//         {isOpen && (
//           <div className="flex flex-wrap gap-2 justify-between mt-1  font-medium ">
//             <button className="p-1 px-2 border-2 rounded-xl  text-center text-gray-500  hover:bg-[#F8F8FF]">
//               Boys
//             </button>
//             <button className="p-1 px-2 border-2 rounded-xl  text-center text-gray-500 hover:bg-[#F8F8FF]">
//               Girls
//             </button>
//             <button className="p-1 px-2 border-2 rounded-xl  text-center text-gray-500 hover:bg-[#F8F8FF]">
//               Men
//             </button>
//             <button className="p-1 px-2 border-2 rounded-xl  text-center text-gray-500 hover:bg-[#F8F8FF]">
//               Women
//             </button>
//           </div>
//         )}
//       </div>

//       {/* 3 */}
//       <div className="relative flex flex-col items-start p-1 w-full rounded text-[#353543]">
//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="w-full flex justify-between  items-center"
//         >
//           <div>
//             <span className="text-black text-lg font-medium">Category</span>
//           </div>
//           <div className="text-2xl">
//             {!isOpen ? (
//               <MdOutlineKeyboardArrowDown />
//             ) : (
//               <MdOutlineKeyboardArrowUp />
//             )}
//           </div>
//         </button>

//         {isOpen && (
//           <div className="w-full ">
//             <div className="flex items-center justify-between border border-gray-300 rounded-md">
//               <div className="text-xl text-gray-300 p-2">
//                 {" "}
//                 <FiSearch />
//               </div>
//               <div className="w-[90%]">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full mb-2 outline-none"
//                 />
//               </div>
//             </div>

//             <div className="w-full flex flex-col gap-2 items-start rounded font-medium">
//               {filteredOptions.map((option) => (
//                 <label
//                   key={option}
//                   className="p-1 w-full rounded-xl flex items-center gap-2  text-gray-500"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedOptions[option]}
//                     onChange={() => toggleCheckbox(option)}
//                     className="h-4 w-4 border-2 border-gray-300 rounded"
//                   />
//                   <div className={`${selectedOptions[option] ? 'text-black' : 'text-gray-500'} `}>{option.charAt(0).toUpperCase() + option.slice(1)}</div>

//                 </label>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Filter;

import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";

function Filter() {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    accessories: false,
    bags_backpacks: false,
    heels_sandals: false,
    sunglasses: false,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    "accessories",
    "bags_backpacks",
    "heels_sandals",
    "sunglasses",
  ];

  const toggleCheckbox = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const toggleGender = (gender) => {
    setSelectedGenders((prevSelectedGenders) =>
      prevSelectedGenders.includes(gender)
        ? prevSelectedGenders.filter((g) => g !== gender)
        : [...prevSelectedGenders, gender]
    );
  };

  const clearAll = () => {
    setSelectedGenders([]);
    setSelectedOptions({
      accessories: false,
      bags_backpacks: false,
      heels_sandals: false,
      sunglasses: false,
    });
  };

  const filteredOptions = options
    .filter((option) =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aSelected = selectedOptions[a];
      const bSelected = selectedOptions[b];
      if (aSelected === bSelected) {
        return a.localeCompare(b);
      }
      return aSelected ? -1 : 1;
    });

  const genderOptions = ["Boys", "Girls", "Men", "Women"].sort((a, b) => {
    const aSelected = selectedGenders.includes(a);
    const bSelected = selectedGenders.includes(b);
    if (aSelected === bSelected) {
      return a.localeCompare(b);
    }
    return aSelected ? -1 : 1;
  });

  const hasSelectedFilters =
    Object.values(selectedOptions).some((option) => option) ||
    selectedGenders.length > 0;
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
          onClick={() => {
            setIsGenderOpen((prev) => !prev);
          }}
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
          <div className="flex flex-wrap gap-2 justify-between mt-1 font-medium">
            {genderOptions.map((gender) => (
              <button
                key={gender}
                onClick={() => toggleGender(gender)}
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
                    checked={selectedOptions[option]}
                    onChange={() => toggleCheckbox(option)}
                    className="h-4 w-4 border-2 border-gray-300 rounded checked:bg-green-500 focus:ring-0"
                  />
                  <span
                    className={`${
                      selectedOptions[option]
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
