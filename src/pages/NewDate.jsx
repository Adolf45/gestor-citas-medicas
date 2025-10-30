import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { AiOutlineBook } from "react-icons/ai";

export const NewDate = () => {

    function HandleSubmitCreateDate(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }
  return (
    <main className="min-h-screen flex flex-col items-center  py-10">
    
          <h2 className='text-center text-2xl mb-6'>Crear Cita</h2>
    
        <section className='w-[750px] max-md:w-[80%] border-2 border-gray-200 p-10 rounded-md shadow-md'>
         
         <form onSubmit={HandleSubmitCreateDate}>

         <div>
            <label htmlFor="name-patient">Nombre del paciente</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <FaUserCheck size={20}/>
                      <input 
                      type="text" 
                      placeholder='Ingresa el nombre del paciente' 
                      required
                      id='name-patient'
                      name='name-patient'
                      className='w-full overflow-ellipsis focus:outline-none focus:ring-0' />
            </div>
         </div>

         <div className='flex w-full justify-between max-md:flex-col'>

            <div>
            <label htmlFor="date-patient">Fecha de la cita</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <FaRegCalendar size={20}/>
                      <input 
                      type="date" 
                      name='date-patient'
                      required
                      placeholder='Usuario o correo electrónico' 
                      id='date-patient'
                      className='w-full overflow-ellipsis focus:outline-none focus:ring-0' />
            </div>
         </div>

         <div>
            <label htmlFor="time-patient">Hora de la cita</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <IoMdTime size={25}/>
                      <input 
                      type="time" 
                      required
                      name='time-patient'
                      placeholder='Usuario o correo electrónico' 
                      id='time-patient'
                      className='w-full overflow-ellipsis focus:outline-none focus:ring-0' />

                     <div>
                        <select name="meridiem-patient" id="meridiem-patient" className='focus:outline-none focus:ring-0'>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                     </div>
            </div>
         </div>

         </div>

        <div>
            <label htmlFor="reason-patient">Motivo de la cita</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <AiOutlineBook size={20}/>
                      <input 
                      type="text" 
                      name='reason-patient'
                      required
                      placeholder='Introduce el motivo de la cita' 
                      id='reason-patient'
                      className='w-full overflow-ellipsis focus:outline-none focus:ring-0' />
            </div>
         </div>

         <div className='flex flex-col'>
            <label htmlFor="note-patient">Notas adicionales</label>
            <textarea name="note-patient" id="note-patient" rows={5} placeholder='Introduce Notas adicionales'
            className='p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-0 mt-2' required
            ></textarea>
         </div>
            
            <div className='w-full flex justify-end'>
            
            <button type='button' className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-400 transition-colors mt-4 mr-4 cursor-pointer'>
                  Cancelar
            </button>
            
            <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4 cursor-pointer'>Agregar cita</button>
            
            </div>
        </form>
            
        </section>

        </main>
  )
}
