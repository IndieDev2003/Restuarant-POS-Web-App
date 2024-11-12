
const TableItem = () => {
 
  return (
    <div  className="">
      <div  className="h-44 w-44 bg-gray-300 border-b-4 flex items-center justify-center border-lime-500 cursor-pointer rounded-lg relative">
        <div className="h-2/3 w-2/3 rounded-full bg-white"></div>
        <div className="absolute flex flex-col items-center leading-4">
          <p className="text-xl font-medium">Table</p>
          <p className="text-md text-gray-500">Vacant</p>
        </div>
          </div>
         
    </div>
  );
};

export default TableItem;
