import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./pages/Tables";
import Home from "./pages/Home";
// import Customers from "./pages/Customers";

import SelectTable from "./components/Table/SelectTable";

const App = () => {
  return (
    <div className="pt-4 px-2">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        {/* <Home/> */}
        {/* <Customers/> */}
        <Tables/>
        {/* <SelectTable/> */}
      </div>
    </div>
  );
};

export default App;
