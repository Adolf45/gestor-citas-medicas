import React from 'react'

export const InfoField = ({label,data}) => {
  return (
    <div>
        <strong className="text-gray-800">{label}</strong>
        <p className="font-medium text-gray-700">{data}</p>
    </div>
  )
}
