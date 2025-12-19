import React from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { Modal } from "../ui/Modal";
import { PatientInfo } from "./PatientInfo";
import { DateEdit } from "../ui/DateEdit";

export const DateItem = ({ data }) => {
  return (
    <tr className="border-b hover:bg-gray-50 text-sm">
      <td className="p-3">{data.namePatient}</td>
      <td className="p-3">{data.datePatient}</td>
      <td className="p-3">
        {(data.timePatient || "") +
          (data.meridiemPatient ? "-" + data.meridiemPatient : "")}
      </td>
      <td className="p-3 flex justify-end gap-3 pr-6">
        <Modal
          title={null}
          children={<PatientInfo data={data} />}
          buttonText={
            <FiEye className="w-4 h-4 text-blue-500 cursor-pointer" />
          }
          buttonOpen="Cerrar"
        />
        <Modal
          title={"Cita"}
          children={<DateEdit data={data} />}
          buttonOpen="Cerrar"
          buttonText={
            <FiEdit className="w-4 h-4 text-blue-500 cursor-pointer" />
          }
        />
        <button>
          <FiTrash className="w-4 h-4 text-red-500 cursor-pointer" />
        </button>
      </td>
    </tr>
  );
};
