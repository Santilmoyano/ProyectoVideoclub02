import React from 'react'
import { GoPerson } from "react-icons/go";
import logo from "../assets/logo.ico"


const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div>
              <img src={logo} alt="logo" class="rounded-full flex justify-start items-start w-12 h-12 bg-gray-100" />
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
              <div class="flex flex-shrink-0 items-center">
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 ml-48">
                  <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-lg font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Inicio</a>
                  <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Peliculas</a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-5 flex items-center pr-2 sm:static sm:inset-auto ml-6" >
              <p class="rounded-md px-3 py-2 text-lg font-medium text-gray-300">Buscador</p>
              <form action="">
                <label for="nombre"  ></label>
                <input id="nombre" type="text" name="nombre" placeholder='Buscá tu pelicula' class="rounded-md" />
              </form>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto ml-6 ">
              <a href="#" class="text-xl rounded-full hover:bg-gray-700" ><GoPerson color='white' /></a>
            </div>
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

export default Navbar