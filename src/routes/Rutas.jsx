import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ResetPasswordPage } from '../pages/ResetPasswordPage'
import { LoginPage } from '../pages/LoginPage'
import { RegistroPage } from '../pages/RegistroPage'
import {ResetPasswordSuccessPage} from '../pages/ResetPasswordSuccessPage'
import { NewDate } from '../pages/NewDate'
import { ProtectedRouter } from './ProtectedRouter.jsx'
import { DashboardDateTodayPage } from '../pages/DashboardDateTodayPage.jsx'
import {DashboardCitasPage} from '../pages/DashboardCitasPage.jsx'

export const Rutas = () => {
  return (

    <Routes>

        <Route path="/" element={<LoginPage/>}/>
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registroPage" element={<RegistroPage />} />
        <Route path="/resetPasswordSuccess" element={<ResetPasswordSuccessPage />} />

        {/* Aqui van las rutas privadas osea las que se necesitan el login activo */}
        
        <Route element={<ProtectedRouter/>}>

        <Route path='/newDate' element={<NewDate/>}/>

        <Route path='/dashboardDateToday' element={<DashboardDateTodayPage/>}/>

        <Route path='/dashboard' element={<DashboardCitasPage/>}/>

        </Route>
    </Routes>
  )
}
