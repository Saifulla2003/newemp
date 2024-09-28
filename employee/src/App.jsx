import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Addemployee from './components/Addemployee'
import { Route, Routes } from 'react-router-dom'
import Viewemployee from './components/Viewemployee'
import './App.css'
const App = () => {
  const [count,setcount] = useState(0)
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
      <Route path='/A' element={<Addemployee/>}/>
      <Route path='/B' element={<Viewemployee/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
