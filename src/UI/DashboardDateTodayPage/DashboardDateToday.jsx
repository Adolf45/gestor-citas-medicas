import React from 'react'
import { TodayDateContainer } from './TodayDateContainer'
import { CiSearch } from "react-icons/ci";

export const DashboardDateToday = () => {
  return (
    <>
    <h3 className='text-3xl text-center mt-10'>Proximas Citas</h3>
    
                <div className='w-lg mt-10 max-sm:max-w-4/5 rounded-2xl shadow shadow-black p-2 '>
    
                    <div className='flex justify-start items-center gap-5 border-b-2 border-gray-200'>
                    
                    <div className='flex justify-center items-center border-b-2 border-violet-500 w-fit max-sm:w-full gap-4 p-2 mb-2'>
                        <CiSearch size={20}/>
                        <input type="text" placeholder='Buscar Paciente' className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
                    </div>
    
                    </div>
    
                    <TodayDateContainer/>
    
                </div>
    </>
  )
}
