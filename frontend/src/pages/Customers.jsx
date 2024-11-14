
import AddOrder from '../components/ui/AddOrder'
import CustomerList from '../components/Customers/CustomerList'

const Customers = () => {
  return (
    <div className='flex flex-col '>
      {/* Heading */}
      <div className="h-fit flex items-center justify-between px-4 py-5 w-full bg-white text-white">
        <h2 className="text-xl font-medium text-black">Customers</h2>
        <p className="text-lg  px-3 py-1 orange rounded-lg">
          + Add New Customer
        </p>
      </div>
          {/* Customer Info */}
          <div className='h-[80vh] w-[60vw] '>
              <CustomerList/>
          </div>

          {/* Checkout
          <div className='w-[30vw] h-[90vh]'>
              <AddOrder/>
          </div> */}
    </div>
  )
}

export default Customers