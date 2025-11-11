import React from 'react'
import { ContainerToday } from '../UI/DashboardDateTodayPage/ContainerToday'
import { DashboardDateToday } from '../UI/DashboardDateTodayPage/DashboardDateToday'

export const DashboardDateTodayPage = () => {
  return (
    <main className='max-h-dvh min-h-fit w-full '>
        <section className='w-full flex flex-col items-center justify-center py-20 '>
            <h2 className='text-3xl text-center mb-10'>Resumen de Hoy</h2>

            <ContainerToday/>
            
            <DashboardDateToday/>

        </section>
    </main>
  )
}
