import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignupPage } from './pages/authentication_pages/SignupPage'
import { SigninPage } from './pages/authentication_pages/SigninPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
