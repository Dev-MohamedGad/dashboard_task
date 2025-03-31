import React from 'react'
import {data} from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-6 border border-gray-200 rounded-xl bg-white shadow-sm'>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
      </div>
      <div className="overflow-y-auto h-[calc(100%-4rem)]">
        <ul className="space-y-3">
          {data.map((order,id)=>(
            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex items-center justify-between transition-colors duration-200'>
              <div className="flex items-center space-x-4">
                <div className='bg-indigo-100 rounded-lg p-3'>
                  <FaShoppingBag className='text-indigo-600 text-lg'/>
                </div>
                <div>
                  <p className='text-gray-800 font-semibold'>${order.total.toLocaleString()}</p>
                  <p className='text-gray-500 text-sm'>{order.name.first}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className='text-gray-500 text-sm'>{order.date}</span>
                <div className="ml-4 w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecentOrders
