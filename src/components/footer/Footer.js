import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { useLocation } from 'react-router';





function Footer() {

    const { pathname } = useLocation()

    if (pathname.includes('kirish')) {
      return <></>
    }
  
    return (
        <div className='Footer' >
            <div className="box_1">
                <h3>Biz haqimizda</h3>
                <p>Topshirish punktlari</p>
                <p>Vakansiyalar</p>
            </div>
            <div className="box_2">
                <h3>Foydalanuvchilarga</h3>
                <p>Biz bilan bog'lanish</p>
                <p>Savol - Javob</p>
            </div>
            <div className="box_3">
                <h3>Tadbitkorlarga</h3>
                <p>Uzumda sot</p>
                <p>Sotuvchi kabinentiga kirish</p>
            </div>
            <div className='box_4'>
                <h3>Ilovani yuklab oling</h3>
                <div className='btn' >
                    <button className='btn1'> <FaApple /> App Store</button>
                    <button className='btn1'> <FaGooglePlay /> Google Play</button>
                </div>

                <h3>Ichtimoiy Tarmoqlarda uzum</h3>
                <div className='icon' >
                    <p><FaInstagram /></p>
                    <p><FaTelegram /></p>
                    <p><FaYoutube /></p>
                    <p><FaFacebook /></p>
                </div>
            </div>
        </div>
    )
}

export default Footer