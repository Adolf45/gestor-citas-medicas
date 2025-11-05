import React from 'react'

export const TodayDateCard = (
    {
    title = 'Citas',
    quantity = 0,
    bgColor = 'bg-green-200'
    }
) => {
  return (
    <div className='flex justify-around items-center mb-5 max-w-[400px]'>

    <div className={`${bgColor} py-12 px-20 rounded-2xl flex flex-col justify-items-start gap-4`}>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <span className='text-2xl'>{quantity}</span>
    </div>

    </div>
  )
}
