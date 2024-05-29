import React, { useEffect, useState } from "react";
import MeeshoLogo from "../assets/meesho.png";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { useNavigate, useSearchParams } from "react-router-dom";

import { IoLogOutOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <img src={MeeshoLogo} alt="MeeshoLogo" className="w-[156px]" />
        <input placeholder="Try Shirt, Shoe or Search by Product Code" />
      </div>
      <div>
        <button>Download App</button>
        <a href="">Become a Supplier</a>
        <a href="">Newsroom</a>
      </div>
    </div>
  );
}

export default Header;
