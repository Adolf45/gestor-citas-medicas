import React from 'react'
import { IoMdTime } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { Modal } from '../modal/Modal';
import { PatientInfo } from './PatientInfo';

export const TodayDateItem = ({data = []}) => {
  return (
    <div className='flex justify-between items-center border-b-2 border-violet-400 w-full gap-4 p-2 mb-2'>
    
                            <div className='flex justify-center items-center gap-2 w-full'>
                                <IoMdTime size={20}/>
                                <span>Chequeo General</span>
                            </div>

                            <span className='w-full'>
                            {data["time-patient"] + data["meridiem-patient"]}
                             - 
                             {data["name-patient"]}
                            </span>
                            
                            <Modal title={"Cita"} children={<PatientInfo data={data}/>} buttonText={<FiEye/>}/>
                            
                        </div>
  )
}
