import React, { useState } from "react";
//
import CashDrawer from "../components/Cashier/CashDrawer";
import TodaySale from "../components/Cashier/TodaySale";
import SalesHistory from "../components/Cashier/SalesHistory";

const Cashier = () => {
  const [cashDrawer, setCashDrawer] = useState(false);
  const [todaySale, setTodaySale] = useState(false);
  const [salesHistory, setSalesHistory] = useState(true);

  return (
    <div className="w-[90vw] pt-2 pl-2">
      <div className="w-fit flex flex-row gap-3 ">
        <p
          onClick={() => {
            setCashDrawer(!cashDrawer),
              setTodaySale(false),
              setSalesHistory(false);
          }}
          className={`${
            cashDrawer ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Cash Drawer
        </p>
        <p
          onClick={() => {
            setTodaySale(!todaySale),
              setCashDrawer(false),
              setSalesHistory(false);
          }}
          className={`${
            todaySale ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Today's Sale
        </p>
        <p
          onClick={() => {
            setSalesHistory(true), setTodaySale(false), setCashDrawer(false);
          }}
          className={`${
            salesHistory ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Sales History
        </p>
      </div>

      <div className="overflow-y-scroll">
        {cashDrawer ? <CashDrawer /> : ""}
        {todaySale ? <TodaySale /> : ""}
        {salesHistory ? <SalesHistory /> : ""}
      </div>
    </div>
  );
};

export default Cashier;
