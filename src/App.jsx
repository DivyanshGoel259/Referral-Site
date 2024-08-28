import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './pages/authentication_pages/Authentication_Page_Components/Heading'
import { SubHeading } from './pages/authentication_pages/Authentication_Page_Components/SubHeading'
import { InputBox } from './pages/authentication_pages/Authentication_Page_Components/InputBox'
import {  AuthbuttonFaceBook, AuthbuttonGoogle } from './pages/authentication_pages/Authentication_Page_Components/Authbutton'
import { Button } from './pages/authentication_pages/Authentication_Page_Components/Button'
import { ForgotPassCompo } from './pages/authentication_pages/Authentication_Page_Components/ForgotPassCompo'
import { BrowserRouter } from 'react-router-dom'
import { SignupPage } from './pages/authentication_pages/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <SignupPage/>
    </BrowserRouter>
    </>
  )
}

export default App
