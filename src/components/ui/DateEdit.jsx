import React from "react";
import { Form } from "../../utils/form";
import { FaUserCheck } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { AiOutlineBook } from "react-icons/ai";
import { Input } from "../input/Input";
import { NoteField } from "../input/NoteField";
import { MeridiemSelector } from "../input/MeridiemSelector";
export const DateEdit = ({ data }) => {
  function HandleSubmitEditDate(e) {
    const { HandleSubmit } = Form();
    const dataForm = HandleSubmit(e);
  }
  return (
    <section className="w-full max-md:w-[80%]">
      <form onSubmit={HandleSubmitEditDate}>
        <div>
          <label htmlFor="namePatient">Nombre del paciente</label>

          <Input
            icon={<FaUserCheck size={20} />}
            type="text"
            placeholder="Ingresa el nombre del paciente"
            required
            id="namePatient"
            value={data.namePatient}
            name="namePatient"
            desingDiv="w-full mb-6 mt-4"
            desingInput="w-full"
          />
        </div>

        <div className="flex w-full justify-between max-md:flex-col">
          <div>
            <label htmlFor="datePatient">Fecha de la cita</label>
            <Input
              icon={<FaRegCalendar size={20} />}
              type="date"
              name="datePatient"
              value={data.datePatient}
              required
              placeholder="Usuario o correo electrónico"
              id="datePatient"
              desingDiv="w-full mb-6 mt-4"
              desingInput="w-full"
            />
          </div>

          <div>
            <label htmlFor="timePatient">Hora de la cita</label>
            <div className="flex justify-center items-center border-b-2 border-gray-200 mb-6 mt-4">
              <Input
                icon={<IoMdTime size={25} />}
                type="time"
                required
                name="timePatient"
                value={data.timePatient}
                placeholder="Usuario o correo electrónico"
                id="timePatient"
                desingDiv="w-full border-none"
                desingInput="w-full"
              />
              <MeridiemSelector data={data.meridiemPatient} />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="reasonPatient">Motivo de la cita</label>
          <Input
            icon={<AiOutlineBook size={20} />}
            type="text"
            name="reasonPatient"
            value={data.reasonPatient}
            placeholder="Introduce el motivo de la cita"
            id="reasonPatient"
            desingDiv="w-full mb-6 mt-4"
            desingInput="w-full"
          />
        </div>
        <NoteField data={data.notePatient} />

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4 cursor-pointer"
          >
            Editar Cita
          </button>
        </div>
      </form>
    </section>
  );
};
