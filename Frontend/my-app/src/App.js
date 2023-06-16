import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import {MiddlePart} from './Components/MiddlePart'
import {Collective} from './Components/Collective'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    {/* <DIV className="App">

      <Header/>
      <MiddlePart/>
    </DIV>
    <Collective/> */}
    <Navbar/>
    </>
  );
}

export default App;
const DIV= styled.div`
text-align: center;
`