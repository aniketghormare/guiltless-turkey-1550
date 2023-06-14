import React from 'react'
import styled from 'styled-components'

export const MiddlePart = () => {
  return (
    <DIV>
        <h1>Rent Thousands of Games & Movies</h1>
        <h2>NO LATE FEES. CANCEL ANYTIME.</h2>
        <div>
            <button>Start Free Trial</button>
        </div>
    </DIV>
  )
}
const DIV = styled.div`
    
    h1{
        margin-top: 200px;
        font-size: 56px;
        font-weight: 500;
        line-height: 67px;
        word-spacing: 0px;
        color: #FFFFFF;
    }
    h2{
        margin-top: 20px;
        font-size: 32px;
        font-weight: 500;
        line-height: 38px;
        word-spacing: 0px;
        color: #D4D4D4;
    }
    button{
        width: 249px;
        height: 56px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1.2px;
        background-color: tomato;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
    }
`