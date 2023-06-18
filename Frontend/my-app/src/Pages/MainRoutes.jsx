import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Cart from './Cart'

import Simple from './Singlepage'




import Games from './Games'
import Movies from "./Movies"

export const MainRoutes = () => {
  return <Routes>
   
    <Route path='/' element={<Games/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/cart' element={<Cart/>}/>
    
  </Routes>
}

