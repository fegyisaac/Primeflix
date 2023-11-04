import React from 'react'
import {Header, Footer} from '../component'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='font-Poppins bg-gray-900 text-sky-200 overflow-x-hidden'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout;