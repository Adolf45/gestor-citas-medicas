import React from "react";

export const PatientInfo = ({ data }) => {

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
        <div
          className="border p-4 rounded-md shadow-sm bg-white dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold mb-2">
            {data.namePatient}
          </h3>
          <p>
            <strong>Fecha:</strong> {data.datePatient}
          </p>
          <p>
            <strong>Hora:</strong> {data.timePatient}{" "}
            {data.meridiemPatient}
          </p>
          <p className="break-all">
            <strong>Motivo:</strong> {data.reasonPatient}
          </p>
          <p className="break-all">
            <strong>Notas:</strong> {data.notePatient}
          </p>
        </div>
    </div>
  );
};
