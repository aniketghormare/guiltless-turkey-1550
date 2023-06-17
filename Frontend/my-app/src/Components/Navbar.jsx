import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <DIV>
      <Link to={"/games"}>Games</Link>
      <Link to={"/movies"}>Movies</Link>
      <Link to={"/playstation5"}>PlayStation 5</Link>
      <Link to={"/xboxseriesx"}>Xbox Series X</Link>
      <Link to={"/xboxone"}>Xbox One</Link>
      <Link to={"/nitendo"}>Nitendo Switch</Link>
      <Link to={"/uhd"}>4K UHD</Link>
      <Link to={"/bluray"}>Blu-ray</Link>
      <Link to={"/dvd"}>DVD</Link>
      <Link to={"/more"}>More Platforms</Link>
      <Link to={"/cart"}>Cart</Link>
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid gray;
`