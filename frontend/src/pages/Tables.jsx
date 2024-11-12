import error from '../assets/error_table.svg'
import order from '../assets/orders.svg'
import SelectTable from '../components/Table/SelectTable'
import TableItem from '../components/Table/TableItem'


const Tables = () => {
  return (
      <div className="h-full w-full  pt-2 flex flex-col justify-end">
          {/* Table Options */}
          <div className="w-fit flex flex-row gap-3 px-2">
              <p className="cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg active-btn">All Tables</p>
              <p className="cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg">Vacant</p>
              <p className="cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg">Occupied</p>
              <p className="cursor-pointer px-3 py-1 border shadow-md drop-shadow-md rounded-lg">Disabled</p>
      </div>
      {/* Tables Note */}
      <div className='h-fit mt-5 flex w-[600px] justify-between gap-2 px-2'>
        <div className='flex flex-row items-center gap-1'>
          <img src={error} className='h-4' alt="" />
          <p>Tables visible are for 4-6 guests occupancy.</p>
        </div>
        <p className='text-orange font-medium cursor-pointer'>Show All Tables</p>
      </div>

      {/* Table Display */}
      <div className='px-2  py-2 border border-b-0 rounded-se-lg  max-w-fit h-[66vh] grid grid-flow-dense sm:grid-cols-3 md:grid-cols-4 grid-cols-6 gap-2 mt-3 overflow-y-scroll'>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        <TableItem/>
        
        
      </div>
      {/* Placing Table Order */}
      <div className='py-4 w-full flex flex-row justify-between items-center border-t'>
        <div className=' px-2 flex flex-row gap-6'>
          <p className='inline-block text-md font-medium'><span className='px-4 py-1.5 bg-red-500 rounded-full mr-2'></span>Occupied</p>
          <p className='inline-block text-md font-medium'><span className='px-4 py-1.5 bg-blue-500 rounded-full  mr-2'></span>Order On Hold</p>
          <p className='inline-block text-md font-medium'><span className='px-4 py-1.5 bg-green-500 rounded-full  mr-2'></span>Vacant</p>
        </div>
        <div className='flex gap-2'>
          <div className='flex flex-col mr-2'>
            <p className='text-lg font-semibold text-gray-800'>Table T42</p>
            <p className='text-lg text-gray-600'>Order #4238</p>
          </div>
          <button className='flex px-5 py-2 orange items-center rounded-lg'><img src={order} className='h-5' alt="" />Select and Place Order</button>
      </div>
      </div>
    </div>
  )
}

export default Tables