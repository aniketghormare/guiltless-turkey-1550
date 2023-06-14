import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    box-shadow: 0 0 20px 3px;
    padding: 0 16px;

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    .burgur-icon{
        margin-top: 60px;
    }

    > img {
        width: 200px;
        height: 55px;
        position: fixed;
        margin-left: 85px;
        margin-top: 60px;
    }
    
    > button {
        position: fixed;
    background-color: #ffffff;
    color: #ffffff;
    background-color: tomato;
    padding: 8px 16px;
    margin-top: 55px;
    margin-right: 10px;
    margin-left: 85%;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

`