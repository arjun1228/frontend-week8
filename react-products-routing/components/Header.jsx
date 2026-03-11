import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between px-10 items-center bg-violet-400 py-6 '>
        <img width="60px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRo2qaVGQC8KwVT6Y03OXBiH8sZ1jkWQgZg&s" className='rounded-[50%] ' alt="logo" />
        <nav>
            <ul className='flex gap-10 text-2xl'>
                <li>
                    <NavLink to="" className={({isActive}) => isActive?"text-blue-100 bg-orange-500 p-2":"" }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="products"  className={({isActive}) => isActive?"text-blue-100 bg-orange-500 p-2":"" }>ProductList</NavLink>
                </li>
                <li>
                    <NavLink to="contact"  className={({isActive}) => isActive?"text-blue-100 bg-orange-500 p-2":"" }>ContactUS</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header