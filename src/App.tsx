import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Registration, ResetPassword } from './pages'

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  )
}
