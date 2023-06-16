import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Games} from './Games';
import {Movies} from './Movies'
import Navbar from '../Components/Navbar';

export const MainRoutes = () => {
  return <Routes>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/games' element={<Games/>}/>
    <Route path='/movies' element={<Movies/>}/>
  </Routes>
}
