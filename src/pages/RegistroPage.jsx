import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaUserDoctor } from 'react-icons/fa6';
import { FaHandHoldingMedical } from 'react-icons/fa6';
import { InputPasswordToggle } from "../components/input/InputPasswordToggle";
import { Form } from '../utils/form';
import { Input } from '../components/input/Input';


export const RegistroPage = () =>{
   const HandleSubmit = (e) => {
        const {HandleSubmit} = Form();
        const dataForm = HandleSubmit(e);
        console.log(dataForm);
    }

  return (
  <main className="min-h-screen flex flex-col items-center justify-center py-10">


    <section className='w-md border-2 border-gray-200 p-10 rounded-md shadow-md'>
      <h2 className='text-center text-2xl mb-6'>Crear cuenta</h2>
     
      <form action="" onSubmit={HandleSubmit} className='flex flex-col justify-center items-center'>
        <Input
        type="email"
        placeholder="Correo electronico"
        icon={<FaUserCheck size={20}/>}
        name="createEmail"
        id="createEmail"
        desingDiv="mb-6"
        />

        <Input
        type="text"
        placeholder="Nombre completo"
        icon={<FaUserDoctor size={20}/>}
        name="createDoctor"
        id="createDoctor"
        desingDiv="mb-6"
        />
        <Input
        type="text"
        placeholder="Especialidad"
        icon={<FaHandHoldingMedical size={20}/>}
        name="createSpecialty"
        id="createSpecialty"
        desingDiv="mb-6"
        />
            <InputPasswordToggle placeholder={'Ingresa tu contraseña'} id={'createPassword'}/>
            <InputPasswordToggle placeholder={'Confirma tu contraseña'} id={'confirmPassword'}/>

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
