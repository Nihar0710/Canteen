import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../components/Login/Login'
import Register from '../components/Login/Register'

const Myroutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Login}/>
            <Route path='/Register' Component={Register}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Myroutes