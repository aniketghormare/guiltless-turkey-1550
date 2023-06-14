import React, { useState } from "react"
import {Container} from './styles'
import {FaBars} from 'react-icons/fa'


const Header = () => {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Container>
            <FaBars onClick={showSidebar}/>
            
        </Container>
    )
}

export default Header