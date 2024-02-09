import myntraLogo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import React, { useState } from "react";
import Men from "./dropdowns/Men";
import Women from "./dropdowns/Women";
import Kids from "./dropdowns/Kids";
import Beauty from "./dropdowns/Beauty";
import HomeNliving from "./dropdowns/HomeNliving";
import Studio from "./dropdowns/Studio";
import Profile from "./dropdowns/Profile";

const Header = () => {
  const [hasText, setHasText] = useState(false);
  const [isHovering, setHovering] = useState("");

  const handleInputChange = (event) => {
    setHasText(event.target.value !== "");
  };

  return (
    <>
      <div className="flex h-[80px] z-50 w-[100%] bg-white fixed top-[0px] ">
        <div className="w-[10%] justify-center items-center">
          <img className="h-[80px]" src={myntraLogo} />
        </div>
        <div className="w-[50%] flex items-center">

          <div className="flex flex-col justify-between h-full group cursor-pointer"
          onMouseEnter={() => setHovering("men")}
          onMouseLeave={() => setHovering("")}>
            <div
              className="px-[20px]  pt-7"
            >
            <a className="font-bold ">MEN</a>
            </div>
            <div className="bg-transparent group-hover:bg-red-400 h-1"></div>
            {isHovering==="men" && <Men />}
          </div>

          <div className="flex flex-col justify-between h-full group cursor-pointer"
           onMouseEnter={() => setHovering("women")}
           onMouseLeave={() => setHovering("")}
          >
            <div className="px-[20px] pt-7">
              <a className="font-bold">WOMEN</a>
            </div>
            <div className="bg-transparent group-hover:bg-pink-500 h-1"></div>
            {isHovering==="women" && <Women/>}
          </div>

          <div className="flex flex-col justify-between h-full group cursor-pointer"
          onMouseEnter={() => setHovering("kids")}
          onMouseLeave={() => setHovering("")}
          >
            <div className="px-[20px] pt-7">
              <a className="font-bold">KIDS</a>
            </div>
            <div className="bg-transparent group-hover:bg-[#f26a10] h-1"></div>
            {isHovering==="kids" && <Kids/>}
          </div>

          <div className="flex flex-col justify-between h-full group cursor-pointer"
          onMouseEnter={() => setHovering("beauty")}
          onMouseLeave={() => setHovering("")}
          >
            <div className="px-[20px]  pt-7">
              <a className="font-bold">BEAUTY</a>
            </div>
            <div className="bg-transparent group-hover:bg-[#0db7af] h-1"></div>
            {isHovering==="beauty" && <Beauty/>}
          </div>

          <div className="flex flex-col justify-between h-full group cursor-pointer"
           onMouseEnter={() => setHovering("home&living")}
           onMouseLeave={() => setHovering("")}>
            <div className="px-[20px] pt-7">
              <a className="font-bold">HOME & LIVING</a>
            </div>
            <div className="bg-transparent group-hover:bg-[#f2c210] h-1"></div>
            {isHovering==="home&living" && <HomeNliving/>}
          </div>

          <div className="flex flex-col justify-between h-full group cursor-pointer"
          onMouseEnter={() => setHovering("studio")}
          onMouseLeave={() => setHovering("")}
          >
            <div className="px-[20px] pt-7">
              <a className="font-bold">STUDIO</a>
            </div>
            <div className="bg-transparent group-hover:bg-[#ff3f6c] h-1"></div>
            {isHovering==="studio" && <Studio/>}
          </div>
        </div>
        <div className="w-[25%] flex justify-center items-center">
          <div className="relative w-[90%] h-[100%] flex items-center">
            <div
              className={`absolute left-2 ${hasText ? "cursor-pointer" : ""}`}
            >
              <CiSearch className="size-[20px]" />
            </div>
            <input
              className="h-[45%] w-[100%] bg-[#F5F5F6] rounded px-[40px] focus:bg-[white] focus:outline-none focus:border-[1px]"
              type="text"
              placeholder="Search for Products, Brands and more"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="w-[15%] flex justify-center">
          <div className="flex flex-col justify-center items-center px-[10px]"
          onMouseEnter={() => setHovering("profile")}
          onMouseLeave={() => setHovering("")}
          >
            <div className="cursor-pointer group">
              <CgProfile className="ml-[26px] group-hover:scale-110" />
              <p className="font-bold ml-[10px] group-hover:scale-110">Profile</p>
              {isHovering==="profile" && <Profile/>}
            </div>
          </div>
          <div className="flex flex-col justify-center px-[10px]">
            <div className="cursor-pointer">
              <GiSelfLove className="ml-[20px]" />
              <p className="font-bold pr-[3px]">Wishlist</p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-[10px]">
            <div className="cursor-pointer">
              <FaShoppingBag className="ml-1.5" />
              <p className="font-bold pr-10">Bag</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Header;
