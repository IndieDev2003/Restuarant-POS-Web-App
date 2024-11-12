import Checkout from "./components/modals/Checkout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddOrder from "./components/ui/AddOrder";
import Order from "./pages/Orders";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
import Customers from "./pages/Customers";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="pt-4 px-2">
      <Navbar />
      <div className="h-[90vh] flex flex-row justify-between">
        <div className="flex flex-row">
          <Sidebar />
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/customer' element={ <Customers/>} />
            <Route path='/orders' element={ <Order/>} />
            <Route path='/table' element={ <Tables/>} />
          </Routes>
        </div>
        <AddOrder />
      </div>
    </div>
  );
};

export default App;
