import React from "react";
import { useState } from "react";

import {
  FiSearch,
  FiEdit,
  FiEye,
  FiTrash,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiClock
} from "react-icons/fi";


export const DashboardCitasPage = () =>{

   const HandleSubmit = (e) => {
        e.preventDefault();
    }

     const [search, setSearch] = useState("");

     const citas = [
      { id: 1, paciente: "Jose Perez", fecha: "2024-05-15", hora: "11:00 AM" },
      ];

    return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mt-1">Gestión de Citas</h1>
      <div className="w-full max-w-5xl bg-purple-100 rounded-2xl p-4 flex flex-wrap gap-3 items-center justify-between shadow-sm mt-4">
       
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

        <div className="flex gap-3">
         <FiCalendar className="w-4 h-4 text-gray-600 mr-2 mt-2" />
          <select className="bg-white w-40 shadow-sm rounded-lg px-3 py-2 text-sm border border-gray-200">
            <option>Recientes</option>
            <option>Antiguos</option>
          </select>
          <FiClock className="w-4 h-5 text-gray-600 right-3 mr-2 mt-2" />
          <select className="bg-white w-40 shadow-sm rounded-lg px-3 py-2 text-sm border border-gray-200">
            <option>Recientes</option>
            <option>Antiguos</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            APLICAR FILTROS
          </button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            GENERAR CITA
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-6 bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="p-3 font-semibold text-sm">Paciente</th>
              <th className="p-3 font-semibold text-sm">Fecha</th>
              <th className="p-3 font-semibold text-sm">Hora</th>
              <th className="p-3 font-semibold text-sm text-right pr-6">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="p-3">{cita.paciente}</td>
                <td className="p-3">{cita.fecha}</td>
                <td className="p-3">{cita.hora}</td>
                <td className="p-3 flex justify-end gap-3 pr-6">
                  <FiEdit className="w-4 h-4 text-blue-500 cursor-pointer" />
                  <FiEye className="w-4 h-4 text-gray-600 cursor-pointer" />
                  <FiTrash className="w-4 h-4 text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center py-3 gap-3 text-sm">
          <FiChevronLeft className="w-4 h-4 cursor-pointer" />
          <span className="font-medium">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <FiChevronRight className="w-4 h-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}