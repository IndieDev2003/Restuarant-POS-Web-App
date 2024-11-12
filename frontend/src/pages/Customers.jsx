import React from 'react'

import AddOrder from '../components/ui/AddOrder'
import CustomerList from '../components/Customers/CustomerList'

const Customers = () => {
  return (
      <div className='flex'>
          {/* Customer Info */}
          <div className='h-full w-[60vw] bg-gray-600'>
              <CustomerList/>
          </div>

          {/* Checkout */}
          <div className='w-[30vw] h-[90vh]'>
              <AddOrder/>
          </div>
    </div>
  )
}

export default Customers