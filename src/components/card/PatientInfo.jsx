import React from "react";
import { InfoField } from "../ui/InfoField";

export const PatientInfo = ({ data }) => {

  return (
    <div className="flex flex-col gap-3 p-5 ">
      <h3 className="text-lg font-medium text-gray-800">Informacion del Paciente</h3>
      
      <InfoField label={"Paciente"} data={data.namePatient}/>

      <div className="flex gap-5">
        <InfoField label={"Fecha"} data={data.datePatient}/>
        <InfoField label={"Fecha"} data={data.timePatient + data.meridiemPatient}/>
      </div>

      <InfoField label={"Motivo de la consulta"} data={data.reasonPatient}/>

      <div>
        <strong className="text-gray-800">Notas</strong>
        <div className="w-full p-2 h-28 rounded-2xl bg-gray-100 overflow-hidden overflow-y-auto mt-2">
        <p className="break-all font-medium text-gray-600">{data.notePatient}</p>
        </div>
      </div>
    </div>
  );
};
