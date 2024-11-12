import reload from '../assets/refresh.svg'
import OrderItem from '../components/Orders/OrderItem'

function Order() {
    return (
        <>
            <div className="px-2 py-1 bg-gray-200">
                {/* Upper */}
                <div className="flex flex-row gap-3">
                    <p className=" px-2 py-1 rounded-lg shadow-md drop-shadow-md border">Order History</p>
                    <p className=" px-2 py-1 rounded-lg shadow-md drop-shadow-md border">Orders On Hold</p>
                    <p className=" px-2 py-1 rounded-lg shadow-md drop-shadow-md border active-btn">Offline Orders</p>
                </div>


                {/* Center */}
                <div className='w-[700px] '>
                    {/* Center Upper */}
                    <div className='flex justify-between items-center mt-3'>
                        <h2 className='text-xl'>Offline Orders</h2>
                        <div className='w-max flex flex-row items-center gap-1 px-3 py-2 orange rounded-lg'>
                            <img src={reload} className='h-4' alt="" />
                            <h3 className='text-lg'>Sync all Orders</h3>
                        </div>
                    </div>

                    {/* Order List */}

                    <div className='h-[74vh] px-2 pt-2 rounded-lg w-full mt-2 bg-white overflow-y-scroll'>
                        <div className='w-full flex items-center pb-0.5 border-b border-gray-400'>
                            <input type="text" placeholder='Search Order Id' className='flex-1 px-2 py-1'/>
                            <button className='px-2 py-1 '>Search</button>
                        </div>
                        <div className='grid grid-cols-[2fr_3fr] px-3 py-2 border-b items-center'>
                            <p className='text-md text-start'>Order Id</p>
                            <p className='text-md text-start'>Date</p>
                        </div>
                        <div>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Order