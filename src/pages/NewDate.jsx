import React from 'react'
import { FaUserCheck } from "react-icons/fa";
export const NewDate = () => {
    const name = ["name-patient","date-patient","time-patient","reason-patient","note-patient","meridiem-patient"];
    function HandleSubmitCreateDate(e){
        e.preventDefault();
        const data = name.map((n) =>{
            return {[n]: e.target[n].value}
        })
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

         <div className='flex w-full justify-between max-md:flex-col flex-wrap'>

            <div>
            <label htmlFor="date-patient">Fecha de la cita</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <FaUserCheck size={20}/>
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
                     <FaUserCheck size={20}/>
                      <input 
                      type="time" 
                      required
                      name='time-patient'
                      placeholder='Usuario o correo electrónico' 
                      id='time-patient'
                      className='w-full overflow-ellipsis focus:outline-none focus:ring-0' />

                      <select name="meridiem-patient" id="" required>
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                      </select>
            </div>
         </div>

         </div>

        <div>
            <label htmlFor="reason-patient">Motivo de la cita</label>
            <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-full p-2 gap-4 mt-4'>
                     <FaUserCheck size={20}/>
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
            
            <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4 cursor-pointer'>Crear Cita</button>
            
            </div>
        </form>
            
        </section>

        </main>
  )
}
