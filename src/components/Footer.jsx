import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 pb-10 pt-10 ">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
              <div class="sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a href="#" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Términos de uso</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Politica de privacidad</a>
                  <a href="#" class="rounded-md py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Ayuda</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Acerca de la Videoteca</a>
                  <div class='px-3 py-2  text-gray-300'>© 2024</div>
                </div>
                
              </div>
            </div>
      </footer>
    </>
  )
}

export default Footer