import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between px-10 items-center bg-blue-400'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRo2qaVGQC8KwVT6Y03OXBiH8sZ1jkWQgZg&s" className='rounded-[50%]' width="60px" alt="logo" />
        <nav>
            <ul className='flex gap-10 p-10'>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                 <li>
                    <NavLink to="add-user">AddUser</NavLink>
                </li>
                 <li>
                    <NavLink to="users">UsersList</NavLink>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Header