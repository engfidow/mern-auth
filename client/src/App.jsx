import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Sigin from './pages/Sigin'
import SignUp from './pages/SignUp'
import Header from './Components/Header'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/sign-in' element={<Sigin/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App