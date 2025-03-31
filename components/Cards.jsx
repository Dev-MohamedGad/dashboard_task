import React from 'react'
import { FiDollarSign, FiTrendingUp, FiUsers } from 'react-icons/fi'


const Cards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-6 p-4">
        <div className='lg:col-span-2 col-span-1 bg-white hover:shadow-lg transition-all duration-300 flex justify-between w-full border border-gray-200 p-6 rounded-xl'>
            <div className="flex flex-col w-full pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-100">
                        <FiDollarSign className="text-indigo-600 text-xl" />
                    </div>
                    <p className='text-gray-600 font-medium'>Daily Revenue</p>
                </div>
                <p className='text-3xl font-bold text-gray-800'>$7,846</p>
                <p className='text-sm text-gray-500 mt-2'>Compared to last week</p>
            </div>
            <div className="flex items-start">
                <div className='bg-green-100 flex justify-center items-center px-3 py-1 rounded-lg'>
                    <span className="text-green-700 text-sm font-semibold">+18%</span>
                </div>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white hover:shadow-lg transition-all duration-300 flex justify-between w-full border border-gray-200 p-6 rounded-xl'>
            <div className="flex flex-col w-full pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-purple-100">
                        <FiTrendingUp className="text-purple-600 text-xl" />
                    </div>
                    <p className='text-gray-600 font-medium'>YTD Revenue</p>
                </div>
                <p className='text-3xl font-bold text-gray-800'>$7,846</p>
                <p className='text-sm text-gray-500 mt-2'>Year to date earnings</p>
            </div>
            <div className="flex items-start">
                <div className='bg-green-100 flex justify-center items-center px-3 py-1 rounded-lg'>
                    <span className="text-green-700 text-sm font-semibold">+18%</span>
                </div>
            </div>
        </div>
        <div className="bg-white hover:shadow-lg transition-all duration-300 flex justify-between w-full border border-gray-200 p-6 rounded-xl">
            <div className="flex flex-col w-full pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-blue-100">
                        <FiUsers className="text-blue-600 text-xl" />
                    </div>
                    <p className='text-gray-600 font-medium'>Customers</p>
                </div>
                <p className='text-3xl font-bold text-gray-800'>7,846</p>
                <p className='text-sm text-gray-500 mt-2'>Total active users</p>
            </div>
            <div className="flex items-start">
                <div className='bg-green-100 flex justify-center items-center px-3 py-1 rounded-lg'>
                    <span className="text-green-700 text-sm font-semibold">+18%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
