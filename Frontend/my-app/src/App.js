import styled from 'styled-components';
import './App.css';

import Games from "./Pages/Games"
import Movies from './Pages/Movies';
function App() {
  return (

    <DIV className="App">

      <Header/>
      <MiddlePart/>

    </DIV>



  );
}

export default App;
const DIV= styled.div`
text-align: center;
`