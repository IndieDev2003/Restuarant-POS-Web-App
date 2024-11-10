import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="pt-4 px-2">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
};

export default App;
