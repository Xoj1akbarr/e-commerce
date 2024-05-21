import React from 'react'
import './Savat.css'
import pic from '../../assets/cat.jpg'
import { Link } from 'react-router-dom'

function Savat() {
  return (
    <div className='savat'>
        <img src={pic} alt="" />
        <h1>В корзине пока нет товаров</h1>
        <p>Начните с подборок на главной странице или найдите нужный товар через поиск</p>
        <Link to={'/'}><button>на главную</button></Link>
    </div>
  )
}

export default Savat
