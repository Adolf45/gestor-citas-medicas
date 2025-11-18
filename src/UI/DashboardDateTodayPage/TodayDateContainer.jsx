import React from 'react'
import { TodayDateItem } from '../../components/card/TodayDateItem'

const date =[
  {
    namePatient: "Carlos Pérez",
    datePatient: "2025-11-20",
    timePatient: "09:30",
    meridiemPatient: "AM",
    reasonPatient: "Chequeo general",
    notePatient: "Paciente con historial de presión alta"
  }
] 
  
export const TodayDateContainer = () => {


  return (
    <div className='h-80'>
    {date.map(date =>
<TodayDateItem data={date}/>
    )        
    }
    </div>
  )
}
