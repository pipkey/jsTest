import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid'


const PageTwo = () => {
    let genericID = v1();
    let MylocalStorage = Object.entries(localStorage);
    let keysArr = MylocalStorage.map(e => e[0])
    let [val, setVal] = useState();
    let [readMode, setReadMode] = useState(false)


    const addButton = (k, v) => {
        val === '' ? alert('incorrect') : localStorage.setItem(k, v);
        setVal('')
    }
    const delButton = (k) => {
        localStorage.removeItem(k)
    }
    const readButton = () => {
        setReadMode(!readMode)
    }
    const DellALLButton = () => {
        localStorage.clear()
    }


    return (
        <div>
            <input
                type="text"
                placeholder="set Value LS"
                value={val}
                onChange={e => setVal(e.target.value)}
            />
            <button onClick={() => { addButton(genericID, val) }}>add </button>
            <button onClick={readButton}>seen</button>
            <button onClick={DellALLButton}>delet all LS </button>
            <ul>
                {readMode
                    ? keysArr.map(e => <li id={e}> {localStorage.getItem(e)}
                        <button
                            onClick={() => { delButton(e) }}>-</button></li>)
                    : ''
                }
            </ul>

        </div>
    )
}

export default PageTwo;