import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaUserDoctor } from 'react-icons/fa6';
import { FaHandHoldingMedical } from 'react-icons/fa6';
import { InputPasswordToggle } from "../components/input/InputPasswordToggle";
import { Form } from '../utils/form';


export const RegistroPage = () =>{
   const HandleSubmit = (e) => {
        const {HandleSubmit} = Form();
        const dataForm = HandleSubmit(e);
    }

  return (
  <main className="min-h-screen flex flex-col items-center justify-center py-10">


    <section className='w-md border-2 border-gray-200 p-10 rounded-md shadow-md'>
      <h2 className='text-center text-2xl mb-6'>Crear cuenta</h2>
     
      <form action="" onSubmit={HandleSubmit} className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center border-b-2 border-gray-200 mb-3 w-fit p-2 gap-4 mt-4'>
               <FaUserCheck size={20}/>
                <input 
                type="email" 
                placeholder='Usuario o correo electrónico' 
                className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
                </div>
                <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-fit p-2 gap-4 mt-4'>
               <FaUserDoctor size={20}/>  
                <input 
                type="text" 
                placeholder='Nombre' 
                className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
                </div>
              <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-fit p-2 gap-4'>
              <FaHandHoldingMedical size={20}/>
              <input
              type="text"
              placeholder='Especialidad'
             className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0'/>
            </div>
            <InputPasswordToggle placeholder={'Ingresa tu contraseña'} id={'create-password'}/>
            <InputPasswordToggle placeholder={'Confirma tu contraseña'} id={'create-confirm-password'}/>

               <button className='w-[80%] p-1 border-[#60D956] border-1 rounded-xs text-[#60D956] font-bold shadow-md'>Ingresar</button>
      
              </form>

        <p className='text-sm  mt-5 text-center'>
          ¿Tienes una cuenta?{' '}
          <a href="/loginPage" className='text-blue-500 hover:underline'>
            Iniciar sesión
          </a>
        </p>
    </section>

  </main>
  
)


}
