import { useEffect, useState } from "react";
import error from "../assets/error_table.svg";
import order from "../assets/orders.svg";
import SelectTable from "../components/Table/SelectTable";
import TableItem from "../components/Table/TableItem";
import Vacant from "../components/Table/Vacant";
import OnHold from "../components/Table/OnHold";
import Occupied from "../components/Table/Occupied";
import AllTables from "../components/Table/AllTables";

const Tables = () => {
  // const [tableState, setTableState] = useState();

  const [vacant, setVacant] = useState(false);
  const [occupied, setOccupied] = useState(false);
  const [hold, setHold] = useState(false);
  const [allTables, setAllTables] = useState(true);

  return (
    <div className="h-full w-full  pt-2 flex flex-col justify-end">
      {/* Table Options */}
      <div className="w-fit flex flex-row gap-3 px-2">
        <p
          onClick={() => {
            setAllTables(true),
              setHold(false),
              setOccupied(false),
              setVacant(false);
          }}
          className={`${
            allTables ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg `}
        >
          All Tables
        </p>
        <p
          onClick={() => {
            setAllTables(false),
              setHold(false),
              setOccupied(false),
              setVacant(true);
          }}
          className={`${
            vacant ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Vacant
        </p>
        <p
          onClick={() => {
            setHold(false),
              setOccupied(true),
              setVacant(false),
              setAllTables(false);
          }}
          className={`${
            occupied ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Occupied
        </p>
        <p
          onClick={() => {
            setHold(true),
              setOccupied(false),
              setVacant(false),
              setAllTables(false);
          }}
          className={`${
            hold ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          On Hold
        </p>
      </div>
      {/* Tables Note */}
      <div className="h-fit mt-5 flex w-full justify-between gap-2 px-2">
        <div className="flex flex-row items-center gap-1">
          <img src={error} className="h-4" alt="" />
          <p>Tables visible are for 4-6 guests occupancy.</p>
        </div>
        <p
          onClick={() => {
            setAllTables(true),
              setHold(false),
              setOccupied(false),
              setVacant(false);
          }}
          className="text-orange font-medium cursor-pointer"
        >
          Show All Tables
        </p>
      </div>

      {/* Table Display */}
      <div className="h-[66vh] overflow-y-scroll">
        {allTables ? <AllTables /> : ""}
        {vacant ? <Vacant /> : <></>}
        {hold ? <OnHold /> : <></>}
        {occupied ? <Occupied /> : <></>}
      </div>

      {/* Placing Table Order */}
      <div className="py-4 w-[90vw] flex flex-row justify-between items-center border-t">
        <div className=" px-2 flex flex-row gap-6">
          <p className="inline-block text-md font-medium">
            <span className="px-4 py-1.5 bg-red-500 rounded-full mr-2"></span>
            Occupied
          </p>
          <p className="inline-block text-md font-medium">
            <span className="px-4 py-1.5 bg-blue-500 rounded-full  mr-2"></span>
            Order On Hold
          </p>
          <p className="inline-block text-md font-medium">
            <span className="px-4 py-1.5 bg-green-500 rounded-full  mr-2"></span>
            Vacant
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col mr-2">
            <p className="text-lg font-semibold text-gray-800">Table T42</p>
            <p className="text-lg text-gray-600">Order #4238</p>
          </div>
          <button className="flex px-5 py-2 orange items-center rounded-lg">
            <img src={order} className="h-5" alt="" />
            Select and Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tables;
