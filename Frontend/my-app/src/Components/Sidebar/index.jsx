import React from 'react'
import { Container, Content } from './styles'
import Image from '../../Images/GAMEZY-removebg-preview.png'
import { 
  FaTimes, 
  FaGamepad, 
  FaRegSun, 
  FaRegFileAlt,
  FaFilm,
  FaTv,
  FaCompactDisc,
  FaCube
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <img src={Image} alt="icons" />
      <FaTimes onClick={closeSidebar} />
      <br />
      <button>Rent</button><button>Buy</button>
      
      <Content>
        <SidebarItem Icon={FaGamepad} Text="Games" />
        <SidebarItem Icon={FaFilm} Text="Movies" />
        <SidebarItem Icon={FaRegFileAlt} Text="PlayStation 5" />
        <SidebarItem Icon={FaRegFileAlt} Text="PlayStation 4" />
        <SidebarItem Icon={FaTv} Text="4K UHD" />
        <SidebarItem Icon={FaGamepad} Text="Xbox Series X" />
        <SidebarItem Icon={FaGamepad} Text="Xbox One" />
        <SidebarItem Icon={FaGamepad} Text="Nintendo Switch" />
        <SidebarItem Icon={FaCompactDisc} Text="Blu-ray" />
        <SidebarItem Icon={FaCompactDisc} Text="DVD" />
        <SidebarItem Icon={FaCube} Text="More Platforms" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar