import React from 'react';
import IFrame from './iFrame';

const PageOne = () => {
    return (
        <div>
            <h1>I'm first</h1>
            <input type="text" />
            <button>+</button>
            <button>-</button>
            <button>read</button>

            <IFrame
                src="http://localhost:3000/four/pTwo"
                width="99.8%"
                height="300"
            />
        </div>
    )
}

export default PageOne;