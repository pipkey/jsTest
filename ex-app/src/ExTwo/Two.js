import React, { useState } from 'react';
import './Two.css'
import history from "../API/api"

const ExTwo = () => {

    let baseUrl = 'http://localhost:3000/two'

    let [size,setSize] =useState('/filter?')
    let [color,setColor] =useState('&')

    return (
        <div>
            <div className="sizeBox">
                <h2>Size</h2>
                <input type='radio'
                    name="siz"
                    value="s"
                    // checked={() => { setSize(...size + "size=S") }} 
                    />S
                <input type='radio' name="siz" value="l"   />L
                <input type='radio' name="siz" value="m"  />M
            </div>
            <div className='colorBox'>
                <h2>Color</h2>
                <input type="checkbox" name='1' value="1" onChange={() => setColor(`color=1`)} />1
                <input type="checkbox" name='2' value="2" onChange={() => history.push(`&color=2`)} />2
                <input type="checkbox" name='3' value="3" onChange={() => history.push(`&color=3`)} />3
                <input type="checkbox" name='4' value="4" onChange={() => history.push(`&color=4`)} />4
                <input type="checkbox" name='5' value="5" onChange={() => history.push(`&color=5`)} />5
            </div>
            <div className="miltu">
                <h2>Manufacturer</h2>
                <select size='1' className="sel">
                    <option>aaa</option>
                    <option>b&c</option>
                    <option>ddd</option>
                    <option>eee</option>
                </select>
            </div>
            <div className="sold">
                <h2>Sold</h2>
                <input type="checkbox" checked/> Sold
            </div>
        </div>
    )
}

export default ExTwo;