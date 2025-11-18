import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
export const SidebarsButton = ({button,open,setOpen}) => {
  return (<>
  {button === 1 ? <button className="p-2 m-2 rounded-md w-fit bg-gray-100 text-red-400 transition hover:bg-red-600 hover:text-white cursor-pointer"
  onClick={() => setOpen(!open)}>
      <FaBars size={20}/>
      </button>

        :<button
        className="p-2 m-2 rounded-md bg-gray-300 text-red-400 hover:text-white hover:bg-gray-500 transition z-50 fixed right-0 cursor-pointer"
        onClick={() => setOpen(!open)}
        >
      <FaTimes size={20}/>
      </button>
    }
    </>
  )
}