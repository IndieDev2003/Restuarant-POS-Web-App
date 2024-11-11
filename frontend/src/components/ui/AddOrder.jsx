import React from "react";

import plus from "../../assets/plus.svg";
import shelf from "../../assets/shelf.svg";
import refresh from "../../assets/refresh.svg";
import AddOrderOrder from "../modals/AddOrderOrder";
import Checkout from "../modals/Checkout";

const AddOrder = () => {
  return (
    <div className="h-full w-[450px] border-l flex flex-col justify-between">
      <div>
        {/* upper */}
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
        <div className="px-2 py-2  w-full h-fit ">
          <AddOrderOrder />
          <AddOrderOrder />
          {/* <AddOrderOrder /> */}
          {/* <AddOrderOrder /> */}
          <AddOrderOrder />
        </div>
      </div>

      {/* Checkout Section */}
      <div>
        <Checkout />
      </div>
    </div>
  );
};

export default AddOrder;
