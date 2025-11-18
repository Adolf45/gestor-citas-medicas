import React from 'react'
import { useNavigate } from 'react-router-dom'
export const SidebarLink = ({title,link,icon,func = null}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(func) {
            func();
        }}
  return (
    <div onClick={() => {navigate(link),handleClick()}} className='flex justify-start items-center w-full p-4 hover:bg-blue-300 cursor-pointer gap-5'>
        {icon}
        <span className='text-gray-700 font-medium'>{title}</span>
    </div>
  )
}
