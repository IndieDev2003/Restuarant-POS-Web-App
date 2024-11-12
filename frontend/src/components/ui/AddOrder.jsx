import React from "react";

import plus from "../../assets/plus.svg";
import shelf from "../../assets/shelf.svg";
import refresh from "../../assets/refresh.svg";
import AddOrderOrder from "../modals/AddOrderOrder";
import Checkout from "../modals/Checkout";

const AddOrder = () => {
  return (
    <div className="relative h-full w-full  border-l flex flex-col flex-grow-0 justify-between">
      {/* upper */}
      <div className="h-5/6 overflow-y-scroll">
        <div className="flex items-center justify-between py-2 border-b">
          <div className="flex items-center gap-2  pl-2">
            <img src={plus} className="h-5" alt="" />
            <h2>Add Customer</h2>
          </div>

          <div className="flex items-center gap-4  mr-5">
            <img src={plus} className="h-5" alt="" />
            <img src={shelf} className="h-4" alt="" />
            <img src={refresh} className="h-4" alt="" />
          </div>
        </div>

        {/* Orders */}
        <div className="px-2 py-2">
          <AddOrderOrder />
          <AddOrderOrder />
          <AddOrderOrder />
          {/* <AddOrderOrder /> */}
          <AddOrderOrder />
        </div>
      </div>

      {/* Checkout Section */}
      <div className="h-fit mt-2">
        <Checkout />
      </div>
    </div>
  );
};

export default AddOrder;
