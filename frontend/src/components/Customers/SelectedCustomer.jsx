import React from "react";

const SelectedCustomer = () => {
  return (
    <div className='grid grid-cols-[1fr_5fr_1fr] items-end px-1 py-2'>
      <img
        src="https://i.pinimg.com/564x/8d/b9/73/8db973d92d01fce7013e30f5c65a34e8.jpg"
        className="h-40 object-cover object-center rounded-lg"
        alt=""
          />
          <div className="h-full flex flex-col px-4 py-3">
              <p className="text-xl">Vincent Lobo <span>#9213724</span></p>
              <p className="text-sm text-gray-600 font-medium">vincent.lobo@gmail.com</p>
              <p className="text-sm text-gray-600 font-medium">+1 123 456 7890</p>
          </div>
          <button className="px-8 py-2 border-2 outline-none font-medium border-orange-400 rounded-lg">Remove</button>
    </div>
  );
};

export default SelectedCustomer;
