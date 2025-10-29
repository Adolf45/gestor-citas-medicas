import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="w-full border-2 border-blue-200/50 shadow-md flex items-center bg-sky-100">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">

        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4 ">Dirección</h3>
          <p className="text-gray-500 text-sm mb-10">
            Calle inés palma #5, colonia caracoles, CDMX, México  </p>
        </div>

        <div className="p-5 sm:w-4/12">
          <div className="text-sm text-indigo-600 font-bold">Contacto</div>
          <ul>
            <li className="my-4">+52 5361783627</li>
            <li className="my-2"><a className="hover:text-indigo-600" href="#">soporte@docify.com</a></li>
          </ul>
        </div>
      </div>

      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        
        <div className="my-5">© Copyright 2025 Docify. Todos los derechos reservados</div>
      </div>
    </footer>

  )
}