import React, { useState } from "react";

import arrow from "../../assets/arrow.svg";
import plus from "../../assets/plus.svg";

const AddOrderOrder = () => {
  const [foodMenu, setFoodMenu] = useState(false);
  return (
    <div
      className={`${
        foodMenu ? "bg-slate-200 border-l-4 border-lime-400" : ""
      } w-full h-fit py-2 px-2 my-1 rounded-lg transition-all ease-in-out cursor-pointer`}
    >
      <div className="w-full grid grid-cols-[1fr_7fr_2fr_0.7fr] items-center justify-center">
        <img
          src={arrow}
          className={`h-5 ${foodMenu ? "rotate-90" : ""}`}
          onClick={() => setFoodMenu(!foodMenu)}
          alt=""
        />
        <div>
          <h3 className="text-md">Schezwan Egg Noodles</h3>
          <p className="text-xs text-gray-700">Medium Half Grilled</p>
        </div>
        <p>$23.00</p>
        <img
          src={plus}
          className="cursor-pointer rotate-45 h-5 bg-gray-400 rounded-full p-0.5"
          alt=""
        />
      </div>
      <div className={`${foodMenu ? "flex" : "hidden"} h-20 gap-3 w-full`}>
        <div className="flex flex-col w-full">
          <label htmlFor="Quantity">Quantity</label>
          <input
            type="number"
            className="border-gray-200 w-full px-3 py-1 border-2 rounded-lg text-black outline-none  focus:border-orange-400"
            placeholder="1"
            name="Quantity"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="Quantity">Discount</label>
          <input
            type="number"
            className="border-gray-200 w-full px-3 py-1 border-2 rounded-lg text-black outline-none  focus:border-orange-400"
            placeholder="1"
            name="Quantity"
          />
        </div>
      </div>
    </div>
  );
};

export default AddOrderOrder;
