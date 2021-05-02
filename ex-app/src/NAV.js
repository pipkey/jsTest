import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NAV.css"

const Nav = () => {
    return (
        <div className="nav">
            <span className='link'> <NavLink to="/first"> Ex One </NavLink> </span>
            <span className='link'> <NavLink to="/two"> Ex Two </NavLink> </span>
            <span className='link'> <NavLink to="/three"> Ex Three </NavLink> </span>
            <span className='link'> <NavLink to="/four"> Ex Four </NavLink> </span>
            <span className='link'> <NavLink to="/six"> Ex Six </NavLink> </span>
        </div>
    )
}

export default Nav;