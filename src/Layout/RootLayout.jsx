import React from 'react'
import Header from '../component/Header/Header'
import Body from '../component/Body/Body'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='font-Poppins'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout