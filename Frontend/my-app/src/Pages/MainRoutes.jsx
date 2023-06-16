import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Games from './Games'
import Cart from './Cart'
//import Singlepage from './Singlepage'
import Simple from './Singlepage'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Games/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/single' element={<Simple/>}/>
   </Routes>
  )
}

export default MainRoutes