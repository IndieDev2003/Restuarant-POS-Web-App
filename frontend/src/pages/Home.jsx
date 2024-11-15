import { useLocation } from "react-router-dom";
import Meal from "../components/modals/Meal";
import AddOrder from "../components/ui/AddOrder";
import { useEffect, useState } from "react";

const Home = () => {
  const [starter, setStarter] = useState(true);
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [supper, setSupper] = useState();
  const [deserts, setDeserts] = useState();
  const [beverages, setBeverages] = useState();

  return (
    <div className="flex w-full justify-between overflow-y-hidden">
      {/* Recipes */}
      <div className=" px-3 min-w-fit shadow-lg">
        {/* Meals Category */}
        <div className="flex flex-row gap-3 mt-2 ml-2 ">
          <p
            onClick={() => {
              setStarter(true),
                setBeverages(false),
                setBreakfast(false),
                setDeserts(false),
                setLunch(false),
                setSupper(false);
            }}
            className={`${starter?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Starters
          </p>
          <p
            onClick={() => {
              setStarter(false),
                setBeverages(false),
                setBreakfast(true),
                setDeserts(false),
                setLunch(false),
                setSupper(false);
            }}
            className={`${breakfast?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Breakfast
          </p>
          <p
            onClick={() => {
              setStarter(false),
                setBeverages(false),
                setBreakfast(false),
                setDeserts(false),
                setLunch(true),
                setSupper(false);
            }}
            className={`${lunch?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Lunch
          </p>
          <p
            onClick={() => {
              setStarter(false),
                setBeverages(false),
                setBreakfast(false),
                setDeserts(false),
                setLunch(false),
                setSupper(true);
            }}
            className={`${supper?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Supper
          </p>
          <p
            onClick={() => {
              setStarter(false),
                setBeverages(false),
                setBreakfast(false),
                setDeserts(true),
                setLunch(false),
                setSupper(false);
            }}
            className={`${deserts?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Desserts
          </p>
          <p
            onClick={() => {
              setStarter(false),
                setBeverages(true),
                setBreakfast(false),
                setDeserts(false),
                setLunch(false),
                setSupper(false);
            }}
            className={`${beverages?'active':''} px-3 py-1 border shadow-md drop-shadow-md rounded-lg`}
          >
            Beverages
          </p>
        </div>
        {/* Meals */}
        <div className="max-h-[82vh]  my-2 mx-2 grid grid-cols-5   gap-2 overflow-y-scroll relative">
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />

          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />

          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />

          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
        </div>
      </div>

      {/* Add Customer Orders */}
      {/* <div className='w-[30vw] h-[90vh]'> */}
      {/* <AddOrder/> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
