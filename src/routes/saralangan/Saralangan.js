import React from 'react'
import './Saralangan.css'
import photo from '../../assets/hearts.cf414be.png'

function Saralangan() {
  return (
    <div className='saralangan'>
      <img src={photo} alt='photo' />
      <h1>Добавьте то, что понравилось</h1>
      <p>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</p>
      <button>войти в аккаунт</button>
    </div>
  )
}

export default Saralangan
