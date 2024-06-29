import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer class="flex content-end bg-gray-800 pb-10 pt-10 ">
            <div class="flex flex-auto sm:justify-center ">
              <div class="sm:ml-6">
                <div class="flex justify-center space-x-3 ">
                  <Link to="/error" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Términos de uso</Link>
                  <Link to="/error" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Politica de privacidad</Link>
                  <Link to="/error" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Ayuda</Link>
                  <Link to="/error" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Acerca de la Videoteca</Link>
                </div>
              </div>
            </div>
            <div class="py-2 relative right-8 text-gray-300">© 2024</div>
      </footer>
    </>
  )
}

export default Footer