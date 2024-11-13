// import Checkout from "./components/modals/Checkout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddOrder from "./components/ui/AddOrder";
import Order from "./pages/Orders";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
import Customers from "./pages/Customers";

import { Route, Routes, useLocation } from "react-router-dom";


import Cashier from "./pages/Cashier";

const App = () => {
  const url = useLocation();
  

  

  return (
    <div className="pt-4 px-2">
      <Navbar />
      <div className="h-[90vh] flex flex-row justify-between">
        <div className="flex flex-row">
          <Sidebar />
          <div className="w-fit">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/table" element={<Tables />} />
              <Route path="/cashier" element={<Cashier />} />
            </Routes>
          </div>
        </div>
        {/* {url.pathname ==='/cashier'? <div className="w-0"></div>:<AddOrder />} */}
        {url.pathname ==='/table' || url.pathname === '/cashier'? <div className="w-0"></div>:<AddOrder />}
        
      </div>
    </div>
  );
};

export default App;
