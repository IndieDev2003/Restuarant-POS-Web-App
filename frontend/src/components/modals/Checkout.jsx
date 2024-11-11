import React from "react";

import pause from '../../assets/pause.svg'

const Checkout = () => {
  return (
    <div className="px-3">
      {/* Add Section */}
      <div className="flex justify-between items-center bg-[#ffd7a5] text-[#FC8019] font-medium rounded-lg mb-2 px-2 py-2">
        <div>
          <h4>Add</h4>
        </div>
        <div className="flex gap-4">
          <h4>Discount</h4>
          <h4>Coupon Code</h4>
          <h4>Note</h4>
        </div>
      </div>

      {/* Amount Section */}
      <div className="flex flex-col gap-2 ">
        {/* Subtotal Section */}
        <div className="flex justify-between items-center text-md">
          <p>Subtotal</p>
          <p>$200.00</p>
        </div>
        {/* Tax Section */}
        <div className="flex justify-between items-center">
          <p>Tax</p>
          <p>$45.00</p>
        </div>
        {/* Payable amount section */}
        <div className="flex justify-between items-center text-xl font-semibold">
          <p>Payable Amount</p>
          <p>$195.00</p>
        </div>
        <div className="flex w-full justify-between gap-2">
          <button className="text-lg rounded-lg text-center w-full py-3 bg-orange-400">Hold To Cart</button>
          <button className="text-lg rounded-lg text-center w-full py-3 bg-green-500">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
