import React from 'react';
import {NavLink} from "react-router-dom"
import './navSix.css'

const NavSix =()=>{
    return(
        <nav className="sixNav">
            <NavLink to='/six/main'> Main </NavLink>
            <NavLink to='/six/employess'> Employees </NavLink>
        </nav>
    )
}

export default NavSix;


// export const getUsers = async () => {
//     const res = await instance.get()
//     const data = res.data.data
//     let name = data[10].first_name
//     return console.log(name)
// }