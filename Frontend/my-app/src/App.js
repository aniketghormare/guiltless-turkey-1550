import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import { MiddlePart } from './Components/MiddlePart';
import { Collective } from './Components/Collective';

function App() {
  return (
    <>
    <DIV className="App">
      <Header/>
      <MiddlePart/>
      
    </DIV>
    <Collective/>
    </>
  );
}

export default App;
const DIV= styled.div`
text-align: center;
`