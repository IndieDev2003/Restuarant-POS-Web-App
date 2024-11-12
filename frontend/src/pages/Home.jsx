
import Meal from '../components/modals/Meal'
import AddOrder from '../components/ui/AddOrder'

const Home = () => {
  return (
      <div className='flex w-full justify-between overflow-y-hidden'>
          {/* Recipes */}
          <div className=' px-3 min-w-fit'>
              {/* Meals Category */}
              <div className='flex flex-row gap-3 mt-2 ml-2'>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg'>Starters</p>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg'>Breakfast</p>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg active-btn'>Lunch</p>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg'>Supper</p>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg'>Desserts</p>
                  <p className='px-3 py-1 border shadow-md drop-shadow-md rounded-lg'>Beverages</p>
              </div>
              {/* Meals */}
              <div className='max-h-[82vh]  my-2 mx-2 grid grid-cols-5   gap-2 overflow-y-scroll relative'>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal/>
                  <Meal />
                  
              </div>
          </div>

          {/* Add Customer Orders */}
          <div className='w-[30vw] h-[90vh]'>
              <AddOrder/>
          </div>

    </div>
  )
}

export default Home