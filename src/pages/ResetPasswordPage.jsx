import React from 'react'
import { MdEmail } from "react-icons/md";
import { Form } from '../utils/form';

export const ResetPasswordPage = () => {
    const HandleSubmit = (e) => {
        e.preventDefault();
        const {HandleSubmit} = Form();
        const dataForm = HandleSubmit(e);
    }
  return (
    <main className='h-dvh w-full flex flex-col items-center justify-center'>
        <section className='w-md border-2 border-gray-200 p-20 rounded-md shadow-md'>
            <h2 className='text-center text-2xl'>¿Olvidaste tu contraseña?</h2>
            <p className='text-[#0A8029] text-[15px] text-center mt-4 mb-8'>
                Ingresa tu información y te enviaremos
                instrucciones para cambiar tu contraseña
            </p>

            <form action="" onSubmit={HandleSubmit} className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-fit p-2 gap-4'>
                    <MdEmail size={20}/>
                    <input type="email" placeholder='Usuario o Correo electronico' className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
                </div>

                <button className='w-[80%] p-1 border-[#60D956] border-1 rounded-xs text-[#60D956] font-bold shadow-md'>Continuar</button>
            </form>
        </section>
    </main>
  )
}
