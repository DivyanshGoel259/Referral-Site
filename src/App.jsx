import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignupPage } from './pages/authentication_pages/SignupPage'
import { SigninPage } from './pages/authentication_pages/SigninPage'
import { HomePage } from './pages/home_page/HomePage'
import { ProfilePic } from './pages/profile_page/profile_page_components/Profile_pic'
import { Name } from './pages/profile_page/profile_page_components/Name'
import { ProfileType } from './pages/profile_page/profile_page_components/ProfileType'
import { Bio } from './pages/profile_page/profile_page_components/Bio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/profile' element={<Bio bio={"I am a passionate full stack developer"}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
