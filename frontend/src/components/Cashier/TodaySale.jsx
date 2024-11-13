import React from 'react'

const TodaySale = () => {
  return (
     <div className="w-full flex flex-row justify-between gap-3 mt-4">
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Opening Drawer Amount</p>
          <h3 className="text-5xl text-orange">$10,000.00</h3>
        </div>
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Cash Payment Sale</p>
          <h3 className="text-5xl text-green">$320.00</h3>
        </div>
        <div className="w-full px-5 py-6 border drop-shadow-md shadow-md rounded-lg">
          <p className="mb-1">Other Payment Sale</p>
          <h3 className="text-5xl text-green">$980.00</h3>
        </div>
        
      </div> 
  )
}

export default TodaySale