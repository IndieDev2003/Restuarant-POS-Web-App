import { useEffect, useState } from "react";
import error from "../assets/error_table.svg";
import order from "../assets/orders.svg";
import SelectTable from "../components/Table/SelectTable";
import TableItem from "../components/Table/TableItem";

const Tables = () => {
  const [tableState, setTableState] = useState();

  const [vacant, setVacant] = useState(true);
  const [occupied, setOccupied] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (vacant) {
      setTableState("Vacant");
    } else if (occupied) {
      setTableState("Occupied");
    } else {
      setTableState("Hold");
    }
  }, [vacant, occupied, hold]);

  return (
    <div className="h-full w-full  pt-2 flex flex-col justify-end">
      {/* Table Options */}
      <div className="w-fit flex flex-row gap-3 px-2">
        <p className="cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg ">
          All Tables
        </p>
        <p
          onClick={() => {
            setHold(false), setOccupied(false), setVacant(true);
          }}
          className={`${
            vacant ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Vacant
        </p>
        <p
          onClick={() => {
            setHold(false), setOccupied(true), setVacant(false);
          }}
          className={`${
            occupied ? "active" : ""
          } cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
        >
          Occupied
        </p>
        <p
          onClick={() => {
            setHold(true), setOccupied(false), setVacant(false);
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
        <p className="text-orange font-medium cursor-pointer">
          Show All Tables
        </p>
      </div>

      {/* Table Display */}
      <div className="px-2  py-2 border border-b-0 rounded-se-lg w-fit  h-[66vh] grid grid-cols-4 gap-2 mt-3 overflow-y-scroll">
        <TableItem tableNumber={43} state={tableState} />
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
