import React from 'react';
import { Route } from 'react-router';
import PageOne from './components/pOne';
import PageTwo from './components/pTwo';
import NavFour from './nav/NavFour';


const ExFour = () => {
    return (
        <div>
            <NavFour />
            <Route path="/four/pOne" render={() => <PageOne />} />
            <Route path="/four/pTwo" render={() => <PageTwo/>} />


        </div>
    )
}

export default ExFour;