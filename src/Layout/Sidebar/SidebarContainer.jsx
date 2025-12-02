import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { SidebarLink } from '../../components/sidebar/SidebarLink'
import { IoCreateOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
export const SidebarContainer = () => {
    const {SignOut} = useContext(AuthContext);
  return (
    <div className='w-full'>
        <SidebarLink title={"Dashboard"} link={"/dashboard"} icon={<MdDashboard size={40} color='gray'/>}/>
        <SidebarLink title={"Crear Cita"} link={"/newDate"} icon={<IoCreateOutline size={40} color='gray'/>}/>
        <SidebarLink title={"Citas de Hoy"} link={"/dashboardDateToday"} icon={<CiCalendarDate size={40} color='gray'/>}/>
        <SidebarLink title={"Cerrar Sesion"} link={"/"} icon={<CiLogout size={40} color='red'/>} func={SignOut}/>
    </div>
  )
}
