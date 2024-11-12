

const SelectTable = () => {
  return (
    <div className="w-[750px] max-h-fit px-2 py-2 border rounded-lg relative">
      <div className="w-full flex items-center justify-between gap-2">
        {/* Left Side */}
        <div className="w-fit px-5 py-4 shadow-md rounded-lg border">
          <h2>Select Number Of Guests</h2>
          <div className="flex flex-row gap-2">
            <p className="px-4 py-3  shadow select-table-size  text-orange active font-medium  rounded-lg">
              1-2
            </p>
            <p className="px-4 py-3  shadow select-table-size  text-orange font-medium  rounded-lg">
              4-6
            </p>
            <p className="px-4 py-3  shadow select-table-size  text-orange font-medium  rounded-lg">
              &gt; 6
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-max h-min py-3 flex flex-row items-center gap-2 justify-start border px-3 shadow-lg rounded-lg">
          <div className="h-fit max-w-fit flex flex-col items-start">
            <p>Table #42</p>
            <p>Order #42354</p>
          </div>
          <button className=" flex px-4 py-3 border-[#FC8019] border-2 items-center rounded-lg">
            Add Products
          </button>
          <button className="flex px-4 py-3 bg-green-500 text-white items-center rounded-lg">
            Select and Place Order
          </button>
        </div>
          </div>
          
          
    </div>
  );
};

export default SelectTable;
