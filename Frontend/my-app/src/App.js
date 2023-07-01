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
import AdminNavbar from "./Pages/Admin/AdminNavbar"
import Admin from './Pages/Admin/admin';
// import Admin from "./Pages/Admin/Admin"


function App() {
  const show = useSelector((store)=>{
    return store.ProductReducer.show
})
const admin = useSelector((store)=>{
  return store.ProductReducer.admin
})
console.log(admin);
  return (
    <BrowserRouter>
    {
      admin?<Admin/> :
      
      <div>
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
      </div>
     
    

    }
  
  </BrowserRouter>
    
    
    // <BrowserRouter>

    // {
    //   show ? 
    //   <DIV className="App">
    //     <video autoPlay loop muted>
    //       <source src={bgImage} type='video/mp4'/>
    //     </video>
    //     <Header/>
    //     <MiddlePart/>
    //     <Collective/>
  
    //   </DIV> :
    //    <DIV className="App">
    //    <Navbar/>
    //    <MainRoutes/>
    //    <Footer/>
    //    </DIV>
      
      
    // }
  
    // {/* <Admin/> */}
    // </BrowserRouter>
    


  );
}

export default App;
const DIV= styled.div`
text-align: center;
`