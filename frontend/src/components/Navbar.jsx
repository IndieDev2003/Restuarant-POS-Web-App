import React from "react";

import search_svg from "../assets/search.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 pb-2">
      {/* Left Side */}
      <div className="flex  gap-3">
        <h2 className="text-2xl">Restro POS</h2>
        <div className="flex items-center bg-gray-300 rounded-full">
          <input
            type="text"
            name=""
            placeholder="Search Products....."
            className="outline-none bg-transparent px-3 py-1"
            id=""
          />
          <img src={search_svg} className="h-6 px-2" alt="" />
        </div>
      </div>

      {/* Right Side */}
      <div>
        <button className="px-5 py-2 rounded-2xl bg-orange-600">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
