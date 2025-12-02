import React from 'react'
import { FiSearch } from 'react-icons/fi';

export const DateSearchInput = ({search,setSearch}) => {
  return (
    <div className="flex items-center bg-white rounded-lg px-3 py-2 w-64 shadow-sm">
        <FiSearch className="w-4 h-4 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Buscar Paciente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-none focus:ring-0 focus:outline-none w-full text-sm"
        />
      </div>
  )
}
