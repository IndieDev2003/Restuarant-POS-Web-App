import React from "react";

import search_svg from "../assets/search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 pb-2">
      {/* Left Side */}
      <Link to='/' className="flex  gap-3">
        <h2 className="text-2xl">Restro POS</h2>
        <div className="flex items-center bg-gray-300 rounded-full">
          <input
            type="text"
            name=""
            placeholder="Search Products....."
            className="text-sm outline-none bg-transparent px-3 "
            id=""
          />
          <img src={search_svg} className="h-5 px-2" alt="" />
        </div>
      </Link>

      {/* Right Side */}
      <div>
        <button className="px-5 py-2 rounded-2xl bg-orange-600">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
