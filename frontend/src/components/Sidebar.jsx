

import home from '../assets/home.svg'
import customer from '../assets/customers.svg'
import table from '../assets/table.svg'
import cashier from '../assets/cashier.svg'
import orders from '../assets/orders.svg'
import report from '../assets/piechart.svg'
import setting from '../assets/settings.svg'

import avatar from '../assets/avatar.svg'
import logout from '../assets/logout.svg'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
      <div className='h-[91vh] w-20 border-r-2'>
          <div className='h-full flex flex-col justify-between'>
              {/* Upper Side */}
              <div className=' mt-1 flex flex-col gap-1 items-center justify-center'>
                  {/* Home Button */}
                  <NavLink to={'/'} className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-cente'>
                      <img src={home} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Home</h3>
                  </NavLink>
                  {/* Customers Button */}
                  <NavLink to='/customer' className='w-[80%] py-2.5 px-2 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={customer} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Customers</h3>
                  </NavLink>
                  {/* Tables Button */}
                  <NavLink to='/table' className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={table} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Tables</h3>
                  </NavLink>
                  {/* Cashier Button */}
                  <NavLink to='/cashier' className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={cashier} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Cashier</h3>
                  </NavLink>
                  {/* Orders Button */}
                  <NavLink to='/orders' className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={orders} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Orders</h3>
                  </NavLink>
                  {/* Reports Button */}
                  <NavLink to='/reports' className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={report} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Reports</h3>
                  </NavLink>
                  {/* Settings Button */}
                  <NavLink to='/settings' className='w-[80%] py-2.5 p-1 rounded-lg flex flex-col items-center justify-center '>
                      <img src={setting} className='h-5' alt="" />
                      <h3 className='text-center text-xs'>Settings</h3>
                  </NavLink>
              </div>

              {/* Bottom Side */}
              <div className='mb-2 flex flex-col items-center gap-2 justify-center'>
                  <div className='w-10 rounded-full p-2 bg-gray-300'>
                      <img src={avatar} className='object-cover' alt="" />
                  </div>
                  <div className='w-10 rounded-full p-2 bg-gray-300'>
                      <img src={logout} className='object-cover' alt="" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Sidebar