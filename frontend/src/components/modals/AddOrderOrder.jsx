import React, { useState } from "react";

import arrow from "../../assets/arrow.svg";
import plus from "../../assets/plus.svg";

const AddOrderOrder = () => {

  const [foodMenu,setFoodMenu]=useState(false)
  return (
    <div className={`${foodMenu?'bg-gray-200 border-l-4 border-lime-400':''} w-full h-fit py-2 px-2 my-1 rounded-lg transition-all ease-in-out` }>
      <div className="w-full grid grid-cols-[1fr_7fr_2fr_0.7fr] items-center justify-center">
        <img src={arrow} className={`h-5 ${foodMenu ? 'rotate-90':''}`} onClick={()=>setFoodMenu(!foodMenu)} alt="" />
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
      <div className={`${foodMenu ?'flex':'hidden' } h-20 gap-3 w-full`}>
      <div className="flex flex-col w-full">
        <label htmlFor="Quantity">Quantity</label>
        <input type="number" className="border-gray-400 w-full px-3 py-1 border-2 rounded-lg" name="Quantity" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="Quantity">Discount</label>
        <input type="number" className="border-gray-400 w-full px-3 py-1 border-2 rounded-lg" name="Quantity" />
      </div>
      </div>
    </div>
  );
};

export default AddOrderOrder;
