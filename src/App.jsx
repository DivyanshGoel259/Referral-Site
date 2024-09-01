import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignupPage } from './pages/authentication_pages/SignupPage'
import { SigninPage } from './pages/authentication_pages/SigninPage'
import { TopBar } from './pages/home_page/home_page_components/TopBar'
import { HeroSection } from './pages/home_page/home_page_components/HeroSection'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/' element={<HeroSection/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
