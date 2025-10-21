import React from 'react'

export const Header = () => {
  return (
    <header className='w-full border-2 border-gray-200/50 shadow-md flex items-center bg-white'>

        <a className='w-70 h-18 p-2 decoration-none block' href="/">
            <img src="/logo.webp" alt="Logo de gestor de citas medicas" className='w-full h-full object-cover' />
        </a>


    </header>
  )
}
