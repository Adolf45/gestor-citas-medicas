import React from 'react'
import { VisibilityToggle } from '../../hooks/VisibilityToggle';
import { FaLock } from "react-icons/fa";

export const InputPasswordToggle = ({placeholder,id}) => {
    const {toggleVisibility,type,icon} = VisibilityToggle();
  return (
        <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-fit p-2 gap-4'>
            <FaLock size={20}/>

            <input type={type} name={id} placeholder={placeholder} className='w-fit overflow-ellipsis focus:outline-none focus:ring-0' required/>

                <button type='button' onClick={toggleVisibility} className='focus:outline-none focus:ring-0 cursor-pointer'>
                {icon}
            </button>

        </div>
  )
}
