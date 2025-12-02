import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { SidebarContainer } from './Sidebar/SidebarContainer'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
export const Header = () => {
  const {loginState} = useContext(AuthContext);
  return (
    <header className='w-full border-2 border-gray-200/50 shadow-md flex items-center justify-between bg-white px-10'>

        <a className='w-70 h-18 decoration-none block' href="/">
            <img src="/logo.webp" alt="Logo de gestor de citas medicas" className='w-full h-full object-cover' />
        </a>
      {loginState ? <Sidebar container={<SidebarContainer/>} title={null}/> : null}
    </header>
  )
}
