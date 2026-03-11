import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
    <Header />
    <div className='mx-20 min-h-screen'>
        <Outlet />  
    </div>
    <Footer />
    </div>

  )
}

export default RootLayout