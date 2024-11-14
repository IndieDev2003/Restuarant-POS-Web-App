

import search from "../../assets/search.svg";
import CustomerItem from "./CustomerItem";
import SelectedCustomer from "./SelectedCustomer";

const CustomerList = () => {
  return (
    <div className="max-h-full overflow-y-scroll relative">
      

      {/* List */}
      <div className="px-3 pt-1 max-h-[80%] bg-white my-2 mx-2 rounded-lg">
        {/* Search */}
        <div className="py-1 mt-2 flex items-center gap-2 border-b ">
          <img src={search} className="h-5" alt="" />
          <input
            type="text"
            className="bg-transparent w-full"
            placeholder="Search Customers......"
            name=""
            id=""
          />
        </div>
        <div>
          <SelectedCustomer/>
        </div>
        <div className="max-h-fit w-full overflow-y-scroll">
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
      
      </div>
      </div>

      
    </div>
  );
};

export default CustomerList;
