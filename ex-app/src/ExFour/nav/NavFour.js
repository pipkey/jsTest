import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavFour.css'


const NavFour = () => {
    return (
        <nav className='navWrap' >
            <span className='link'> <NavLink to="/four/pOne"> Page One </NavLink> </span>
            <span className='link'> <NavLink to="/four/pTwo"> Page Two </NavLink> </span>
        </nav>
    )
}

export default NavFour;