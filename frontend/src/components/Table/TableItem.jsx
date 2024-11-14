import { useEffect, useState } from "react";

const TableItem = ({ state, tableNumber }) => {
  // const [tableState, setTableState] = useState(state);

  const [vacant, setVacant] = useState(false);
  const [occupied, setOccupied] = useState(false);
  const [orderOnHold, setOrderOnHold] = useState(false);

  useEffect(() => {
    if (state === "Vacant") {
      setVacant(true);
    } else if (state === "Occupied") {
      setOccupied(true);
    } else if(state=== "Hold"){
      setOrderOnHold(true);
    } else {
      console.log('On Hold')
    }
  }, [state,vacant,occupied,orderOnHold]);

  return (
    <div className="">
      <div
        className={`h-44 w-44 bg-gray-300 border-b-4 flex items-center justify-center 
        ${vacant ? "border-lime-500" : ""}
        ${occupied ? "border-red-500" : ""}
        ${orderOnHold ? "border-blue-500" : ""}
         
         cursor-pointer rounded-lg relative`}
      >
        <div className="h-2/3 w-2/3 rounded-full bg-white"></div>
        <div className="absolute flex flex-col items-center leading-4">
          <p className="text-xl font-medium">Table {tableNumber}</p>
          <p className="text-md text-gray-500">{!state ? "Vacant" : state}</p>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
