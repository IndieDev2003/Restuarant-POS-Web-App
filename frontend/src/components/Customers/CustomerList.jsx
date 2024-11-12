import React from "react";

import search from "../../assets/search.svg";
import CustomerItem from "./CustomerItem";

const CustomerList = () => {
  return (
    <div className="h-full overflow-y-hidden">
      {/* Heading */}
      <div className="flex items-center justify-between px-4 py-5 w-full bg-white text-white">
        <h2 className="text-xl font-medium text-black">Customers</h2>
        <p className="text-lg  px-3 py-1 orange rounded-lg">
          + Add New Customer
        </p>
      </div>

      {/* List */}
      <div className="px-3 pt-1 h-[90%] bg-white my-2 mx-2 rounded-lg">
        {/* Search */}
        <div className="py-1 mt-2 flex items-center gap-2 border-b ">
          <img src={search} className="h-5" alt="" />
          <input
            type="text"
            className="bg-transparent w-full"
            placeholder="Search Customers......"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="w-full">
        <CustomerItem />
      </div>
    </div>
  );
};

export default CustomerList;
