import React from 'react'
import Link from 'next/link'
import { RxSketchLogo ,RxDashboard, RxPerson} from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const navigationItems = [
    { href: '/', icon: RxDashboard, name: 'Dashboard' },
    { href: '/customers', icon: RxPerson, name: 'Customers' },
    { href: '/orders', icon: HiOutlineShoppingBag, name: 'Orders' },
    { href: '/', icon: FiSettings, name: 'Settings' },
]

const NavItem = ({ href, Icon, name }) => (
    <Link href={href}>
        <div className='bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block hover:bg-gray-300' title={name}>
            <Icon size={20} />
        </div>
    </Link>
)

const Sidebar=({children})=> {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-400  hover:bg-purple-500 text-white p-3 rounded-lg inline-block'>
                            <RxSketchLogo size={20}/>
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    {navigationItems.map((item, index) => (
                        <NavItem key={index} href={item.href} Icon={item.icon} name={item.name} />
                    ))}
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar
