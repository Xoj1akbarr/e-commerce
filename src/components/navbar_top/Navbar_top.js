import React from 'react'
import './Navbar_top.css'
import Logo from '../../assets/Logo.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { IoBasket } from "react-icons/io5";



function Navbar_top() {

  const { pathname } = useLocation()

  if (pathname.includes('kirish')) {
    return <></>
  }


  return (
    <div className='navbar'>

      <div className='Logo'>
        <NavLink to={'/'}><img src={Logo} alt="" /></NavLink>
      </div>

      <div className='navbar-input'>
        <button>Katalog</button>
        <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
        <div className="Icon"><p className='p' ><IoIosSearch /></p></div>
        </div>

        <div className='iconnn'>
        <NavLink to={'/kirish'} className='icons'><CiUser />Kirish</NavLink>
        <NavLink to={'/saralangan'} className='icons'><FcLike />Saralangan</NavLink>
        <NavLink to={'/savat'} className='icons'><IoBasket />Savat</NavLink>
        </div>
      
      
    </div>
  )
}

export default Navbar_top
