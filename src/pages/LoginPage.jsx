import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { FaUserCheck } from "react-icons/fa";
import { InputPasswordToggle } from "../components/input/InputPasswordToggle";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Form } from "../utils/form.js";

export const LoginPage = () =>{
  const {SignIn,error} = useContext(AuthContext);
   const HandleSubmit = (e) => {
        const {HandleSubmit} = Form();
        const data = HandleSubmit(e);
        SignIn(data);
    }

    return(
     <main className='h-dvh w-full flex flex-col items-center justify-center'> 
       <section className='w-md border-2 border-gray-200 p-20 rounded-md shadow-md'>
        <h2 className='text-center text-2xl'>Iniciar sesión</h2>
         <div className='flex justify-center mb-6 mt-4'>
         <FaUserCircle size={80} />
        </div>

        <form action="" onSubmit={HandleSubmit} className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center border-b-2 border-gray-200 mb-6 w-fit p-2 gap-4 mt-4'>
         <FaUserCheck size={20}/>
          <input 
          type="email" 
          placeholder='Usuario o correo electrónico' 
          name="email"
          className='w-[220px] overflow-ellipsis focus:outline-none focus:ring-0' />
          </div>
          
        <InputPasswordToggle placeholder={'Contraseña'} id={"password"}/>

         <button className='w-[80%] p-1 border-[#60D956] border-1 rounded-xs text-[#60D956] font-bold shadow-md cursor-pointer'>Ingresar</button>

    {error && <p className="text-red-500 text-sm mt-2">Usuario o contraseña incorrecta</p>}
  
  <a href="/resetPassword" className='text-sm text-blue-500 hover:underline mb-2 mt-5'>
    ¿Olvidaste tu contraseña?
  </a>

 
  <p className='text-sm mt-3'>
    ¿No tienes cuenta?{' '}
    <a href="/registroPage" className='text-blue-500 hover:underline'>
      Crear cuenta
    </a>
  </p>
        </form>
         
       </section>
       
     </main>
    )
}