import { useState } from "react";
import reload from "../assets/refresh.svg";
import OrderItem from "../components/Orders/OrderItem";
import OrderOnHold from "../components/Orders/OrderOnHold";
import OrderOffline from "../components/Orders/OrderOffline";
import OrderHistroy from "../components/Orders/OrderHistroy";

function Order() {
  const [orderHistory, setOrderHistory] = useState(true);
  const [orderOnHold, setOrderOnhold] = useState(false);
  const [orderOffline, setOrderOffline] = useState(false);

  return (
    <>
      <div className="h-full px-2 py-1 bg-gray-200">
        {/* Upper */}
        <div className="flex flex-row gap-3">
          <p
            onClick={() => {
              setOrderHistory(true),
                setOrderOffline(false),
                setOrderOnhold(false);
            }}
            className={`bg-white ${
              orderHistory ? "active" : ""
            } cursor-pointer px-2 py-1 rounded-lg shadow-md drop-shadow-md border`}
          >
            Order History
          </p>
          <p
            onClick={() => {
              setOrderHistory(false),
                setOrderOffline(false),
                setOrderOnhold(true);
            }}
            className={`bg-white ${
              orderOnHold ? "active" : ""
            } cursor-pointer px-2 py-1 rounded-lg shadow-md drop-shadow-md border`}
          >
            Orders On Hold
          </p>
          <p
            onClick={() => {
              setOrderHistory(false),
                setOrderOffline(true),
                setOrderOnhold(false);
            }}
            className={`bg-white ${
              orderOffline ? "active" : ""
            } cursor-pointer px-2 py-1 rounded-lg shadow-md drop-shadow-md border `}
          >
            Offline Orders
          </p>
        </div>

        {/* Center */}
        <div className="w-[700px] ">
          {/* Center Upper */}
          <div className="flex justify-between items-center mt-3">
            <h2 className="text-xl">
              {orderHistory ? "Order History" : ""}
              {orderOnHold ? "Orders on Hold" : ""}
              {orderOffline ? "Offline Orders" : ""}
            </h2>
            <div className="w-max flex flex-row items-center gap-1 px-3 py-2 orange rounded-lg">
              <img src={reload} className="h-4" alt="" />
              <h3 className="text-lg cursor-pointer">Sync all Orders</h3>
            </div>
          </div>

          {/* Order List */}

          <div className="h-[12vh] px-2 pt-2 rounded-t-lg w-full mt-2 bg-white overflow-y-scroll">
            <div className="w-full flex items-center pb-0.5 border-b border-gray-400">
              <input
                type="text"
                placeholder="Search Order Id"
                className="flex-1 px-2 py-1"
              />
              <button className="px-2 py-1 ">Search</button>
            </div>
            <div
              className={`grid  ${
                orderOnHold ? "grid-cols-[2fr_3fr_1fr]" : "grid-cols-[2fr_3fr]"
              } px-3 py-2 border-b items-center`}
            >
              <p className="text-md text-start">Order Id</p>
              <p className="text-md text-start">Date</p>
              <p
                className={`text-md text-start ${orderOnHold ? "" : "hidden"}`}
              >
                Amount
              </p>
            </div>
          </div>

          <div className="max-h-[63vh] px-2 pt-2 rounded-b-lg w-full  bg-white overflow-y-scroll">
            {orderOffline ? <OrderOffline/>:''} 
            {orderOnHold ? <OrderOnHold/>:''} 
            {orderHistory ? <OrderHistroy/>:''} 
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
