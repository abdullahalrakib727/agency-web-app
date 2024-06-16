import React from "react";
import Icon from "../../images/level.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-screen overflow-x-hidden font-poppins">
      <div className="bg-gray-900 fixed sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-y-gray-400">
        {/* desktop navigation start */}
        <div>
          <Link to="/">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:h-[35px]"
            />
          </Link>
        </div>
        {/* desktop navigation end*/}
      </div>
    </nav>
  );
};

export default Navbar;
