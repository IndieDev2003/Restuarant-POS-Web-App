import { useState } from "react";

import CustomerList from "../components/Customers/CustomerList";
import AddNewCustomer from "../components/Customers/AddNewCustomer";

const Customers = () => {
  const [addNewCustomer, setAddNewCustomer] = useState(false);
  return (
    <>
      {addNewCustomer ? (
        <AddNewCustomer backFunc={ setAddNewCustomer} />
      ) : (
        <div className="flex flex-col ">
          {/* Heading */}
          <div className="h-fit flex items-center justify-between px-4 py-5 w-full bg-white text-white">
            <h2 className="text-xl font-medium text-black">Customers</h2>
            <p
              onClick={() => setAddNewCustomer(true)}
              className="cursor-pointer text-lg  px-3 py-1 orange rounded-lg"
            >
              + Add New Customer
            </p>
          </div>
          {/* Customer Info */}
          <div className="h-[80vh] w-[60vw] ">
            <CustomerList />
          </div>
        </div>
      )}
    </>
  );
};

export default Customers;
