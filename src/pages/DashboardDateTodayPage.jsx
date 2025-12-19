import React from 'react'
import { ContainerToday } from '../Layout/DashboardDateTodayPage/ContainerToday'
import { DashboardDateToday } from '../Layout/DashboardDateTodayPage/DashboardDateToday'

export const DashboardDateTodayPage = () => {
  return (
    <main className='min-h-dvh w-full '>
        <section className='w-full flex flex-col items-center justify-center py-20 '>
            <h2 className='text-3xl text-center mb-10'>Resumen de Hoy</h2>

            <ContainerToday/>
            
            <DashboardDateToday/>

        </section>
    </main>
  )
}
