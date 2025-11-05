import React from 'react'
import { TodayDateCard } from '../../components/card/TodayDateCard'
export const ContainerToday = () => {
  return (
    <div className='flex justify-center items-center w-full flex-wrap gap-20'>

        <TodayDateCard title='Citas para hoy' quantity={10} bgColor='bg-green-200'/>
        <TodayDateCard title='Citas canceladas' quantity={10} bgColor='bg-violet-200'/>
        <TodayDateCard title='Pacientes atendidos' quantity={10} bgColor='bg-red-200'/>

    </div>
  )
}
