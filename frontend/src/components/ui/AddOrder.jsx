import React from "react";

import plus from "../../assets/plus.svg";
import shelf from "../../assets/shelf.svg";
import refresh from "../../assets/refresh.svg";

const AddOrder = () => {
  return (
    <div className="h-full w-[30vw] bg-gray-300">
          {/* upper */}
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 pt-2 pl-2">
                  <img src={plus} className="h-5" alt="" />
                  <h2>Add Customer</h2>
              </div>

              <div className="flex items-center gap-3 pt-2 mr-5">
                  <img src={plus} className="h-4" alt="" />
                  <img src={refresh} className="h-4" alt="" />
                  <img src={shelf} className="h-4" alt="" />
              </div>
          </div>
    </div>
  );
};

export default AddOrder;
