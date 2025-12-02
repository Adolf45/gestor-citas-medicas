import React from 'react'
import { TodayDateItem } from '../../components/card/TodayDateItem'
  
export const TodayDateContainer = ({data}) => {

  return (
    <div className='h-80'>
    {data.map(date =>
  <TodayDateItem data={date}/>
    )        
    }
    </div>
  )
}
