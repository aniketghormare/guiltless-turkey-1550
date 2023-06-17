import styled from 'styled-components';

export const Container = styled.div`
height: auto;
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;