import React, { useEffect, useState } from 'react';
import './Three.css'
import axios from 'axios'


const ExThree = () => {

    let [promText, setPromText] = useState([])


    useEffect(() => {
        let arrPers = axios.get("https://reqres.in/api/users?per_page=12").then(res => res.data.data);
        let arr = axios.get("https://reqres.in/api/users?per_page=12")
            .then(res => res.data.support.text);
        Promise.all([arrPers, arr]).then((res) => setPromText(res))
    }, [])


    return (
        <div>
            <p className="op">В данном блоке находиться задание 3,
            которое подразумевает под собой возвращение 1 ответа, по средством двух "вопросов"</p>
            <p className="op"> как только отет буде получен, текст отобразится в дисплее</p>
            <div className="display">
                <span className='text'>
                    {!promText
                        ? 'Loading'
                        : "Oба ответа получены"
                    }
                </span>
            </div>
        </div>
    )
}


export default ExThree;