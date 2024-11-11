import React from "react";

import arrow from "../../assets/arrow.svg";
import plus from "../../assets/plus.svg";

const AddOrderOrder = () => {
  return (
    <div className="w-full py-2">
      <div className="w-full grid grid-cols-[1fr_7fr_2fr_0.7fr] items-center justify-center">
        <img src={arrow} className="h-5" alt="" />
        <div>
                  <h3 className="text-md">Schezwan Egg Noodles</h3>
                  <p className="text-xs text-gray-700">Medium Half Grilled</p>
        </div>
        <p>$23.00</p>
        <img
          src={plus}
          className="rotate-45 h-5 bg-gray-400 rounded-full p-0.5"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddOrderOrder;
