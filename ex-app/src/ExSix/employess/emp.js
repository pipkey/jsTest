import React, { useEffect, useState } from 'react';
import axois from "axios"
import { v1 } from "uuid"
import './emp.css'

const Employees = () => {

    let [allData, setAllData] = useState([])
    let [valInp, setValInp] = useState('')

    useEffect(() => {
        axois.get("https://reqres.in/api/users?per_page=12")
            .then((responce) => {
                let data = responce.data.data
                setAllData(data)
            })
    }, [setAllData])


    const addPerson = (name) => {
        let newPers = { id: v1(), first_name: name }
        name.trim()
            ? setAllData([newPers, ...allData])
            : alert("incorrect value")
        setValInp('')
    }

    const removePers = (id) => {
        setAllData(allData.filter(el => el.id !== id))
    }

    const onChangeHandler = e => {
        setValInp(e.target.value)
    }

    return (
    <div >
        <input
            type="text"
            placeholder="add name"
            value={valInp}
            onChange={onChangeHandler}
        />
        <button onClick={() => { addPerson(valInp) }}>create</button>
        <ul className='data'>{
            allData.length > 0
                ? allData.map(el => {
                    return <li key={el.id}>
                        <span className='namePers'>{el.first_name}</span>
                        <button onClick={() => { removePers(el.id) }}>Del</button>
                    </li>

                })
                : "LIST IS CLEAR"
        }
        </ul>
    </div>)
}
export default Employees;