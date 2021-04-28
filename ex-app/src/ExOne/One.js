import React, { useState } from 'react';
import './One.css'

const ExOne = () => {

    let [val, setVal] = useState('')

    const onChangeHandler = event => {
        setVal(event.target.value)
    }

    return (
        <div className="Wrapper">
            <h4>Exercize One</h4>
            <input
                className={val !== '' ? "red" : ''}
                id='one'
                name='first'
                value={val}
                onChange={onChangeHandler}
            />
            <button onClick={() => setVal('')}> Cleare Area </button>
        </div>
    )
}


export default ExOne;