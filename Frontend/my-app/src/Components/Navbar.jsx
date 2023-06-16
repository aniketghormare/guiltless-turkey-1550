import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { InputGroup, Input, InputRightElement, IconButton, Box, Badge  } from '@chakra-ui/react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Image from '../../src/Images/GAMEZY-removebg-preview.png'

const Navbar = () => {
  return (
    <DIV>
      <div style={{display:"flex",borderBottom:"1px solid #d4cfcf"}}>
        <div>
          <img className='logo' src={Image} alt="icons" />
        </div>
        <div style={{marginLeft:"240px",display:"flex",gap:"12px",marginTop:"24px"}}>
        <div>
          <button className='btn'>Rent</button>
        </div>
        <div>
          <button className='btn'>Buy</button>
        </div>
        </div>
        
        <div >
          <InputGroup>
            <Input
            className='searchbtn'
              placeholder="Search"
            />
          <InputRightElement>
            <IconButton className='iconbtn'
              icon={<FaSearch />}
              aria-label="Search"
              border={'none'}
              
            />
          </InputRightElement>
          </InputGroup>
        </div>
        <div>
          <Box>
            <IconButton className='cartbtn'
              aria-label="Cart"
              icon={<FaShoppingCart />}
              colorScheme="teal"
              variant="ghost"
            />
            <Badge colorScheme="red" borderRadius="full" position="absolute" top="-1" right="-1">
        
            </Badge>
          </Box>
        </div>
      </div>
      <div className='nav'>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/games"}>Games</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/movies"}>Movies</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/playstation5"}>PlayStation 5</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/xboxseriesx"}>Xbox Series X</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/xboxone"}>Xbox One</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/nitendo"}>Nitendo Switch</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/uhd"}>4K UHD</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/bluray"}>Blu-ray</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/dvd"}>DVD</Link>
      <Link style={{textDecoration:"none",color:"tomato"}} to={"/more"}>More Platforms</Link>
      </div>
      

      
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`

  .logo{
    width: 200px;
    height: 55px;
    position: fixed;
    margin-left: 10px;
    margin-top: 8px;
    cursor: pointer;
  }
  .btn{
    width: 80px;
    height:27px;
    font-Size:13px;
    font-Weight:500;
    cursor: pointer;
    font-Family:sans-serif;
    border-Radius:15px;
    border:none;
    background-color: tomato;
    color: #ffffff;
  }
  .searchbtn{
    width: 710px;
    height: 33px;
    margin-top: 17px;
    margin-left: 15px;
    padding-left: 40px;
    border-radius: 15px;
    border: 1px solid #b1abab;
  }
  .iconbtn{
    margin-right: 730px;
    margin-top: 30px;
    cursor: pointer;
  }
  .cartbtn{
    width: 40px;
    height: 40px;
    margin-top: 19px;
    margin-left: 20px;
    border-radius: 50%;
    color: black;
    border: 1px solid #c4c0c0;
    cursor: pointer;
  }
  .nav{
    display: flex;
    gap: 20px;
    padding-left: 20px;
    margin-top: 11px;
    height: 36px;
    font-size: 14px;
    color: tomato;
    border-bottom: 2px solid #cfc7c7;
  }
`