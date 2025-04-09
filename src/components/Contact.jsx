import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <div className="contact min-h-[100vh] w-[100%] flex justify-center items-center text-2xl md:text-7xl ">
            <h1>This is Contact</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Contact;