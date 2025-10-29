import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ResetPasswordPage } from '../pages/ResetPasswordPage'
import { LoginPage } from '../pages/LoginPage'
import { RegistroPage } from '../pages/RegistroPage'
import {ResetPasswordSuccessPage} from '../pages/ResetPasswordSuccessPage'
import { NewDate } from '../pages/NewDate'

export const Rutas = () => {
  return (

    <Routes>

        <Route path="/" element={<LoginPage/>}/>
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registroPage" element={<RegistroPage />} />
        <Route path="/resetPasswordSuccess" element={<ResetPasswordSuccessPage />} />
        <Route path='/newDate' element={<NewDate/>}/>

    </Routes>
  )
}
