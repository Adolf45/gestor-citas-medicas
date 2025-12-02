import React from 'react'

export const DashboardHead = () => {
  return (
    <thead className="border-b bg-gray-100">
                <tr>
                  <th className="p-3 font-semibold text-sm">Paciente</th>
                  <th className="p-3 font-semibold text-sm">Fecha</th>
                  <th className="p-3 font-semibold text-sm">Hora</th>
                  <th className="p-3 font-semibold text-sm text-right pr-6">Acciones</th>
                </tr>
              </thead>
  )
}
