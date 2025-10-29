import React from 'react'
import { useState } from 'react';
import { InputPasswordToggle } from '../components/input/InputPasswordToggle';

export const ResetPasswordSuccessPage = () => {
    const [error, setError] = useState(false);

    function HandleSubmit (e){
            e.preventDefault();
            const newPassword = e.target['new-password'].value;
            const newConfirmPassword = e.target['new-confirm-password'].value;
            if(newPassword !== newConfirmPassword){
                setError(true);
                return
            }}
  return (
    <main className='h-dvh w-full flex flex-col items-center justify-center'>
            <section className='flex flex-col gap-3 w-md border-2 border-gray-200 py-10 px-5 rounded-md shadow-md'>
                <h2 className='text-center text-2xl'>Cambia tu contraseña</h2>
                <p className='text-[#0A8029] text-[15px] text-center mt-4 mb-8'>
                    Crea una nueva contraseña para acceder a tu cuenta
                </p>
    
                <form action="" onSubmit={HandleSubmit} className='flex flex-col justify-center items-center gap-4'>

                    <InputPasswordToggle placeholder={'Nueva Contraseña'} id={"new-password"}/>

                    <InputPasswordToggle placeholder={'Confirma Tu Contraseña'} id={'new-confirm-password'}/>
    
                    <button className='w-[80%] p-1 border-[#60D956] border-1 rounded-xs text-[#60D956] font-bold shadow-md cursor-pointer'>Confirmar Contraseña</button>

                    {error ? <span className='text-red-400 mt-5'>Contraseña no coincide</span> : null}
                </form>
            </section>
        </main>
  )
}
