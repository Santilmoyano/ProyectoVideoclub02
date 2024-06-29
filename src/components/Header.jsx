import React from 'react'
import { Link } from 'react-router-dom'
import { GoPerson } from "react-icons/go";
import logo from "../assets/logo.ico"

const Header = () => {
 
  return (
    <>
    <nav class="bg-gray-800">
          <div class="relative flex h-16 items-center justify-between ml-10">
            <div>
              <img src={logo} alt="logo" class="rounded-full flex justify-start items-start w-12 h-12 bg-gray-100" />
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
              <div class="flex flex-shrink-0 items-center">
              </div>
              <div class="flex items-center ml-56 ">
                <div class="flex space-x-4">
                  <Link to="/" class="rounded-md px-3 py-2 text-lg font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Inicio</Link>
                  <Link to="/peliculas" class="rounded-md  bg-gray-900 px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Peliculas</Link>
                </div>
              </div>
            </div>
            <div class="relative flex items-center mr-10" >
              <p class="rounded-md  text-lg font-medium text-gray-300">Buscador</p>
              <form action="#" class="ml-2">
                <label for="pelicula"  ></label>
                <input id="pelicula" type="text" name="pelicula" placeholder='Buscá tu pelicula' class="rounded-md" />
              </form>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto  ">
              <Link to="/" class="text-xl rounded-full hover:bg-gray-700 mr-10" ><GoPerson color='white' /></Link>
            </div>
          </div>
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2 ">
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Inicio</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Peliculas</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Buscador</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header