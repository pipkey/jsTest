import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NAV.css"

const Nav = () => {
    return (
        <div className="nav">
            <span className='link'> <NavLink to="/first"> Ex First </NavLink> </span>
            <span className='link'> <NavLink to="/six"> Ex Six </NavLink> </span>
        </div>
    )
}

export default Nav;