import React from 'react'
import { ContainerToday } from '../UI/DashboardDateTodayPage/ContainerToday'
import { CiSearch } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FiEye } from "react-icons/fi";



export const DashboardDateTodayPage = () => {
  return (
    <main className='max-h-dvh min-h-fit w-full '>
        <section className='w-full flex flex-col items-center justify-center p-20 '>
            <h2 className='text-3xl text-center mb-10'>Resumen de Hoy</h2>

            <ContainerToday/>

            <div className='w-lg mt-10 rounded-2xl shadow shadow-black p-2 '>

                <div className='flex justify-start items-center gap-5 border-b-2 border-gray-200'>
                
                <div className='flex justify-center items-center border-b-2 border-violet-500 w-fit gap-4 p-2 mb-2'>
                    <CiSearch size={20}/>
                    <input type="text" placeholder='Buscar Paciente' className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
                </div>

                </div>

                <div className='h-80'>

                    <div className='flex justify-between items-center border-b-2 border-violet-400 w-full gap-4 p-2 mb-2'>

                        <div className='flex justify-center items-center gap-2'>
                            <IoMdTime size={20}/>
                            <span>Chequeo General</span>
                        </div>
                        <span className='text-center '>
                        11:00 AM - Jose Perez
                        </span>
                        
                        <FiEye size={20} />
                        
                    </div>

                </div>

            </div>

        </section>
    </main>
  )
}
