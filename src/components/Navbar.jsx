import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header w-[100%] h-auto bg-gray-900 p-2 md:p-3">
        <div className="navbar flex justify-between items-center w-full">
          <div className="logo flex gap-2 sm:gap-3 md:gap-3 items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="flowbite-logo"
            />
            <span className="text-white text-sm sm:text-lg md:text-2xl font-semibold">
              GeekFoods
            </span>
          </div>
          <ul className="nav-items p-2 gap-8 hidden md:block md:flex md:justify-between md:items-center">
            <li className="text-white font-medium hover:text-blue-600 ">
              <a className="relative inline-block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="">Home</a>
            </li>
            <li className="text-white font-medium hover:text-blue-600">
              <a className="relative inline-block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="">Quote</a>
            </li>
            <li className="text-white font-medium hover:text-blue-600">
              <a className="relative inline-block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="">Resturants</a>
            </li>
            <li className="text-white font-medium hover:text-blue-600">
              <a className="relative inline-block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="">Foods</a>
            </li>
            <li className="text-white font-medium hover:text-blue-600">
              <a className="relative inline-block after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2" href="">Contact</a>
            </li>
          </ul>
          <div className="get-started-btn flex gap-4">
            <button className="text-white bg-blue-700 hover:bg-blue-800  py-2 px-2 md:px-3 rounded-md">
              Get Started
            </button>
            <div className="hamburg-section text-2xl py-1 px-2 cursor-pointer rounded-lg text-gray-400 hover:bg-gray-500 md:hidden">
              &#9776;{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
