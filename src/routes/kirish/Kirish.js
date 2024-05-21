import React from 'react'
import './Kirish.css'
import { Link } from 'react-router-dom'

function Kirish() {



    return (
        <div className='Kirish' >
            <div className="inner-part">
                <h1>Tizimga Krish</h1>

                <p>Foydalanuvchi nomi</p>
                <input type="text" placeholder='Foydalanuvchi nomi' />


                <p>Parol</p>
                <input type="password" placeholder='Parolni kiriting' />

                <button>Kirish</button> 

                <Link className='Link' to={'/'}  >Asosiy Sahifaga qaytish</Link>
            </div>
        </div>
    )
}

export default Kirish