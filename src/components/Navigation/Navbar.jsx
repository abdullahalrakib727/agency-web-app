import React from "react";
import Icon from "../../images/level.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-screen overflow-x-hidden font-poppins">
      <div className="bg-gray-900 fixed sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-y-gray-400">
        {/* desktop navigation start */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:h-[35px]"
            />
            <span className="ml-2 text-white font-semibold text-xl">
              Levelup Solutions
            </span>
          </Link>
          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 hidden sm:block text-white rounded-xl mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
            <button
              type="button"
              className="hidden sm:block text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10 mr-4"
            >
              Login
            </button>
          </div>
        </div>
        {/* desktop navigation end*/}
      </div>
    </nav>
  );
};

export default Navbar;
