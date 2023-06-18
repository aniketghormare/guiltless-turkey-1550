import React, { useState } from "react"
import {Container} from './styles'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import Image from '../../Images/GAMEZY-removebg-preview.png'
import {Link, Routes, Route} from 'react-router-dom'
import Login from "../Login"

const Header = () => {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const handleSignIn = () => {
        // Handle sign in functionality
      };

    return (
        <>
        <Routes>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        
        <Container className="bg">
            
                <FaBars className="burgur-icon" onClick={showSidebar}/>
                <img src={Image} alt="icons" />
            <Link to="/login"><button className="btn" onClick={handleSignIn}> Sign In</button></Link>
            
            {sidebar && <Sidebar active={setSidebar}/>}
            
        </Container>
        </>
    )
}

export default Header