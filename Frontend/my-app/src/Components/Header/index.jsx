import React, { useState } from "react"
import {Container} from './styles'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import Image from '../../Images/GAMEZY-removebg-preview.png'

const Header = () => {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const handleSignIn = () => {
        // Handle sign in functionality
      };

    return (
        <>
        <Container className="bg">
            
                <FaBars className="burgur-icon" onClick={showSidebar}/>
                <img src={Image} alt="icons" />
            
            <button onClick={handleSignIn}>Sign In</button>
            {sidebar && <Sidebar active={setSidebar}/>}
            
        </Container>
        </>
    )
}

export default Header