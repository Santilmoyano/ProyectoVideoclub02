import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 pb-10 pt-10 ">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
              <div class="sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <Link to="/error" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Términos de uso</Link>
                  <Link to="/error" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Politica de privacidad</Link>
                  <Link to="/error" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Ayuda</Link>
                  <Link to="/error" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Acerca de la Videoteca</Link>
                  <div class='px-3 py-2  text-gray-300'>© 2024</div>
                </div>
                
              </div>
            </div>
      </footer>
    </>
  )
}

export default Footer