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



function App() {
  return (
    <>
    <DIV className="App">


     
    


      <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4'/>
      </video>
      <Header/>
      <MiddlePart/>
      <Collective/>

    </DIV>
    {/* <Collective/> */}
    {/* <Navbar/> */}
    {/* <Login/> */}
    </>


  );
}

export default App;
const DIV= styled.div`
text-align: center;
`