import React from 'react'
import { MdEmail } from "react-icons/md";
import { Form } from '../utils/form';
import { Input } from '../components/input/Input';

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
                <Input
                        placeholder="Correo electronico"
                        type="email"
                        name="email"
                        icon={<MdEmail size={20}/>}
                        required={true}
                        desingDiv="w-fit mb-6 mt-4"
                        desingInput="w-[220px]"
                        />
                <button className='w-[80%] p-1 border-[#60D956] border-1 rounded-xs text-[#60D956] font-bold shadow-md'>Continuar</button>
            </form>
        </section>
    </main>
  )
}
