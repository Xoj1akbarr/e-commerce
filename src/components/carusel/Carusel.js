import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carusel.css'
import { useLocation, NavLink } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Stilni chaqirish



// Carusel img
import photo from '../../assets/main_page_banner (5).jpg'
import img from '../../assets/main_page_banner (7).jpg'
import pic from '../../assets/main_page_banner (8).jpg'

function Carusel() {



    const { pathname } = useLocation()


    if (pathname.includes('kirish')) {
        return <></>
    }

    if (pathname.includes('saralangan')) {
        return <></>
    }

    if (pathname.includes('savat')) {
        return <></>
    }

    if (pathname.includes('product')) {
        return <></>
    }



    const settings = {
        dots: true, // Slides turga tegishli nog'larni ko'rsatish
        infinite: true, // Tog'ri yuvalarda aylanish
        speed: 500, // Aylanish tezligi (milisoniyalar)
        slidesToShow: 3, // Ko'rsatiladigan slaydlar soni
        slidesToScroll: 1, // Kerakli slaydlarga qanday o'tish kerakligini aytadi
        autoplay: true, // Avtomatik aylanish
        autoplaySpeed: 2000, // Avtomatik aylanish tezligi (milisoniyalar)
    };

    return (
        <div className='carusel' >

            <Carousel className='inner-carusel' >
                <div className='picture1' >
                    <img src={photo} alt="Image 1" />
                </div>
                <div className='picture2' >
                    <img src={img} alt="Image 2" />
                </div >
                <div className='picture3' >
                    <img src={pic} alt="Image 3" />
                </div >
            </Carousel>
        </div>
    );
}

export default Carusel;