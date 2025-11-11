import React from 'react'
import { TodayDateItem } from '../../components/card/TodayDateItem'

const date =  {
    "name-patient": "Carlos Pérez",
    "date-patient": "2025-11-20",
    "time-patient": "09:30",
    "meridiem-patient": "AM",
    "reason-patient": "Chequeo general",
    "note-patient": "Paciente con historial de presión alta"
  }
  
export const TodayDateContainer = () => {


  return (
    <div className='h-80'>
    
     <TodayDateItem data={date}/>
        
    </div>
  )
}
