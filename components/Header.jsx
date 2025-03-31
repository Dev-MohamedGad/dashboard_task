import React from 'react'
import { FiBell, FiSearch, FiUser } from 'react-icons/fi'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back to your dashboard</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <FiBell className="text-gray-600 text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <FiUser className="text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
