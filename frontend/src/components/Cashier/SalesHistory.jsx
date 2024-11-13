import React from 'react'
import SalesHistoryItem from './SalesHistoryItem'

const SalesHistory = () => {
  return (
      <div className='flex flex-col'>
          <div className='flex mt-3'>
                <h3 className='text-3xl'>Sales History</h3>
          </div>
            {/* Title for Sales history */}
          <div>
              <div className='w-[95%] bg-slate-400 px-4 py-2 grid grid-cols-5 mt-2'>
                  <p className='w-fit'>Date</p>
                  <p className='w-fit'>Cash Payments</p>
                  <p className='w-fit'>Other Payments</p>
                  <p className=' text-center'>Total Sale</p>
                  <p className='w-fit'>Drawer Note</p>
              </div>

              <div className='max-h-[50vh]'>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
                  <SalesHistoryItem/>
              </div>
              
          </div>
          
    </div>
  )
}

export default SalesHistory