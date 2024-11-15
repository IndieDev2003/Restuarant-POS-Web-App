import React from "react";

const AddNewCustomer = ({backFunc}) => {
  return (
    <div className="px-3">
          <div className="flex flex-row  items-center justify-between">
              <h3 className="mt-4 mb-5 text-2xl">Add New Customer -</h3>
              <p onClick={()=>backFunc(false)} className="px-8 py-1 rounded-lg shadow-xl drop-shadow-2xl border-2 cursor-pointer">Back</p>
      </div>
      <div className="flex flex-col w-[60vw] px-4 py-2 rounded-lg border border-slate-300 border-opacity-80  drop-shadow-xl bg-white shadow-inner">
        <form>
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="cust-name">Name</label>
            <input
              type="text"
              required={true}
              className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
              name="cust-name"
              placeholder="Alex"
              id=""
            />
          </div>
          {/* Phone Field */}
          <div className="flex flex-col">
            <label htmlFor="cust-phone">Phone</label>
            <input
                          type='number'
                          maxLength='13'
              required={true}
              className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
              name="cust-phone"
              placeholder="+91 1234567890"
              id=""
            />
          </div>
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="cust-email">Email</label>
            <input
              type="email"
              required={true}
              className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
              name="cust-email"
              placeholder="alex@gmail.com"
              id=""
            />
          </div>
          {/* Address Field */}
          <div className="flex flex-col">
            <label htmlFor="cust-addr">Address</label>
            <input
              type="text"
              required={true}
              className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
              name="cust-addr"
              placeholder="Alex Street"
              id=""
            />
          </div>
          {/* Country and State Fields */}
          <div className="flex justify-between w-full mt-2">
            <div className="flex flex-col w-1/2">
              <label htmlFor="cust-count">Country</label>
              <input
                type="text"
                required={true}
                className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
                name="cust-count"
                placeholder="India"
                id=""
              />
            </div>
            <div className="flex flex-col w-5/12">
              <label htmlFor="cust-state">State</label>
              <input
                type="text"
                required={true}
                className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
                name="cust-state"
                placeholder="Delhi"
                id=""
              />
            </div>
          </div>
          {/* City And Pincode Field */}
          <div className="flex justify-between w-full">
            <div className="flex flex-col w-1/2">
              <label htmlFor="cust-city">City</label>
              <input
                type="number"
                required={true}
                className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
                name="cust-city"
                id=""
              />
            </div>
            <div className="flex flex-col w-5/12">
              <label htmlFor="cust-pin">Pincode</label>
              <input
                type="number"
                required={true}
                className="border border-gray-400 outline-none px-3 py-1.5 rounded-lg"
                name="cust-pin"
                id=""
              />
            </div>
          </div>

          <button className="px-16 py-3 mt-4 mb-4  text-white orange rounded-lg shadow-xl drop-shadow-sm">Add Customer</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCustomer;
