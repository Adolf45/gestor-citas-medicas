import React from 'react'
import { useState } from 'react'

export const Input = ({
    placeholder = "",
    type = "text",
    name = "",
    id = "",
    icon = null ,
    desingDiv = "w-fit",
    desingInput = "w-[220px]",
    required = true,
    value,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  function onChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className={`${desingDiv} ` + 'flex justify-center items-center border-b-2 border-gray-200 p-2 gap-4'}>
            {icon && icon}
            <input 
            type={type}
            id={id}
            value={inputValue}
            onChange={onChange}
            placeholder={placeholder} 
            name={name}
            required={required}
            className={'overflow-ellipsis focus:outline-none focus:ring-0' + ` ${desingInput}`} />
    </div>
  )
}
