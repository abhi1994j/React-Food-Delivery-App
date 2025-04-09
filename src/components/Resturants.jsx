import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Resturants = () => {
  return (
    <>
        <Navbar/>
        <div className="resturants min-h-[100vh] w-[100%] flex justify-center items-center text-2xl md:text-7xl ">
            <h1>This is Resturants</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Resturants;