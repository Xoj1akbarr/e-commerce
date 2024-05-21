import React from 'react'
import './Navbar_bottom.css'
import { useLocation } from 'react-router'

function Navbar_bottom() {

  const { pathname } = useLocation()

  if (pathname.includes('kirish')) {
    return <></>
  }

  return (
    <div className='navbar_bottom'>
      <p>Muddatli to'llov</p>
      <p>Elektornika</p>
      <p>Maishiy texnika</p>
      <p>Kiyim</p>
      <p>Poyabzallar</p>
      <p>Aksessuarlar</p>
      <p>Go'zallik va parvarish</p>
      <p>Salomatlik</p>
      <p>Uy-ro'zg'or buyumlari</p>
      <p>Qurilish va ta'mirlash</p>
    </div>
  )
}

export default Navbar_bottom
