import React from "react";
import TodaySaleItem from "./TodaySaleItem";

const TodaySale = () => {
  return (
    <div>
      <div className="w-full flex flex-row justify-between gap-3 mt-4">
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Opening Drawer Amount</p>
          <h3 className="text-5xl text-orange">$10,000.00</h3>
        </div>
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Cash Payment Sale</p>
          <h3 className="text-5xl text-green">$320.00</h3>
        </div>
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Other Payment Sale</p>
          <h3 className="text-5xl text-green">$980.00</h3>
        </div>
      </div>

      <div>
        <div className="mt-3 mb-2">
          <h3 className="text-2xl"> Sales History</h3>
        </div>
        <div className="h-[52vh] bg-gray-200  rounded-lg">
          <div className="grid grid-cols-4 py-1 px-3">
            <p>Order Id</p>
            <p>Time</p>
            <p>Order Total</p>
            <p>Payment Method</p>
          </div>
          {/* Today Sales Items */}
          <div className="h-[90%] overflow-y-scroll">
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
            <TodaySaleItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySale;
