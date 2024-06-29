import React from 'react'
import logo from "../assets/logo.ico"
import Navbar from '../components/Navbar'


const Error = () => {
  return (
    <>
    <Navbar/>
    <div class="container mx-auto  w-max ">
    <img src={logo} alt="logo"  />
    </div>
    <h1 class="relative left-16 bottom-36 mx-auto w-max">ERROR: 404 NOT FOUND</h1>
    </>
  )
}

export default Error