import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
export const ResetPasswordSuccess = () => {
  return (
    <section className='h-dvh w-full flex flex-col items-center justify-center'>
                
                <div className='flex flex-col items-center justify-center'>
                    <HiOutlineMailOpen size={100}/>
                    <h2 className='text-center text-2xl mt-2'>Revisa tu correo</h2>
                </div>
    
     <div className='bg-[#E8D4D4] p-10 rounded-2xl border-2 border-[#B0B0B0] mt-6'>
                <ol className='list-disc text-[18px] font-medium'>
                    <li>
                        Te enviamos un correo con instrucciones
                        para que cambies tu contraseña.
                    </li>
                    <li className='mt-4'>
                        Revisa también tu bandeja de spam.
                    </li>
                    <li className='mt-4'>
                        Asegúrate de usar el correo más reciente
                    </li>
                </ol>
            </div>
    </section>
  )
}
