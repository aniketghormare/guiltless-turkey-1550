import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import {MiddlePart} from './Components/MiddlePart'
import {Collective} from './Components/Collective'
import Navbar from './Components/Navbar';


import bgImage from './Images/background_image.mp4'
import Login from './Components/Login';

import Games from "./Pages/Games"
import Movies from './Pages/Movies';
import { useSelector } from 'react-redux';
import { MainRoutes } from './Pages/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Pages/Footer';



function App() {
  const show = useSelector((store)=>{
    return store.ProductReducer.show
})
console.log(show);
  return (
    <BrowserRouter>
    {
      show ? 
      <DIV className="App">
        <video autoPlay loop muted>
          <source src={bgImage} type='video/mp4'/>
        </video>
        <Header/>
        <MiddlePart/>
        <Collective/>
  
      </DIV> :
       <DIV className="App">
       <Navbar/>
       <MainRoutes/>
       <Footer/>
       </DIV>
      
      
    }
    </BrowserRouter>
    


  );
}

export default App;
const DIV= styled.div`
text-align: center;
`