import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  height: 100vw;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    cursor: pointer;
  }

  > img {
        width: 200px;
        height: 55px;
        margin-right: 52px;
        margin-top: 13px;
    }

     button {
    width: 110px;
    color: #ffffff;
    background-color: tomato;
    margin-left: 15px;
    padding: 8px 16px;
    margin-right: 10px;
    font-size: 14px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  background-color: #FFFFFF;
`;