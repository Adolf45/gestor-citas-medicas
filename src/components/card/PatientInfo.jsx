import React from "react";

export const PatientInfo = ({ data }) => {

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
        <div
          className="border p-4 rounded-md shadow-sm bg-white dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold mb-2">
            {data["name-patient"]}
          </h3>
          <p>
            <strong>Fecha:</strong> {data["date-patient"]}
          </p>
          <p>
            <strong>Hora:</strong> {data["time-patient"]}{" "}
            {data["meridiem-patient"]}
          </p>
          <p className="break-all">
            <strong>Motivo:</strong> {data["reason-patient"]}
          </p>
          <p className="break-all">
            <strong>Notas:</strong> {data["note-patient"]}
          </p>
        </div>
    </div>
  );
};
