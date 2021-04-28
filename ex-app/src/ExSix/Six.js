import React from 'react';
import MainSix from './main/main'
import {Route } from "react-router-dom"
import './Six.css'
import NavSix from "./navSix"
import Employees from "./employess/emp"

const ExSix = () => {
    return (
        <div className="SixWrapper">
            <NavSix />
            <Route path="/six/main" render={() => <MainSix />} />
            <Route path="/six/employess" render={() => <Employees />}/>


        </div>
    )
}

export default ExSix;