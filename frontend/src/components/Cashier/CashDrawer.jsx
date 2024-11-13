import React from "react";

const CashDrawer = () => {
  return (
    <div className="h-fit ">
      <h2 className="text-2xl my-4">Drawer Amount Summary</h2>
      <div className="pl-4 w-[800px] border-b bg-slate-200 rounded-lg">
        <div className="flex flex-row justify-between text-lg px-2 py-2 rounded-lg">
          <p>Opening Drawer Amount</p>
          <input
            type="number"
            min={0}
            className="bg-transparent px-2 outline-none text-md"
            name=""
            id=""
            placeholder="Amount..."
          />
        </div>
        <div className="flex flex-row justify-between text-lg px-2 py-2 rounded-lg">
          <p>Cash Payment Sale</p>
          <input
            type="number"
            min={0}
            className="bg-transparent px-2 outline-none text-md"
            name=""
            id=""
            placeholder="Amount..."
          />
        </div>
        <div className="flex flex-row justify-between text-lg px-2 py-2 rounded-lg">
          <p>Other Payment Sale</p>
          <input
            type="number"
            min={0}
            className="bg-transparent px-2 outline-none text-md"
            name=""
            id=""
            placeholder="Amount..."
          />
        </div>
        <div className="flex flex-row justify-between text-lg px-2 py-2 rounded-lg">
          <p>Expected Drawer Amount</p>
          <input
            type="number"
            min={0}
            className="bg-transparent px-2 outline-none text-md"
            name=""
            id=""
            placeholder="Amount..."
          />
        </div>

        {/* Differance */}
        <div className="px-2 py-2 flex justify-between">
          <h3 className="text-2xl">Difference</h3>
          <p  className="text-2xl px-4">$10,980.00</p>
        </div>

        
      </div>
      {/* Remarks */}
      <div className=" flex flex-col gap-1 w-fit">
          <h3 className="text-2xl">Remarks</h3>
          <textarea name="" className="min-h-[100px] min-w-[650px] border placeholder-slate-700 rounded-lg outline-none px-2 py-1 text-sm" placeholder="Remarks Here"></textarea>
          <button className="w-1/2 px-8 py-3 mt-2 rounded-lg outline-none text-white bg-green">Close Drawer</button> 
      </div>
    </div>
  );
};

export default CashDrawer;
