import styled from 'styled-components';
import './App.css';

import Games from "./Pages/Games"
import Movies from './Pages/Movies';
import Product from './Components/Product/ProductPage';
import { Route, Routes } from 'react-router-dom';
import MoviesPoster from './Components/Movies/Movie';
function App() {
  return (

    <DIV className="App">

      {/* <Games/>
      <Movies/> */}
      <Routes>
        <Route path="/game" element={<Product/>}/>
        <Route path="/movie" element={<MoviesPoster/>}/>
      </Routes>

    </DIV>



  );
}

export default App;
const DIV= styled.div`
text-align: center;
`