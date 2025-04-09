import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Foods = () => {
  return (
    <>
        <Navbar/>
        <div className="foods min-h-[100vh] w-[100%] flex justify-center items-center text-2xl md:text-7xl ">
            <h1>This is Foods</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Foods;