import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PRODUCTS } from '../../static'
// import { FcLike } from "react-icons/fc";
// import { IoBasket } from "react-icons/io5";
import { Link } from 'react-router-dom'
import './Product.css'

function Products() {

    const [product, setProduct] = useState(PRODUCTS)

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
    


    return (
        <div className='product' >
            {
                product.map((item, index) => {
                    return (
                        <div className='items' key={index}>
                            {/* <p className='ikon'><FcLike /></p> */}
                           <Link to={`product/${item.id}`}>
                              <img width={200} src={item.url[0]} alt="" />
                           </Link>
                            <h3>{item.title}</h3>
                            <p className='prices'>{item.price}</p>
                            <p className='types'>{item.category}</p>
                            {/* <p className='ikon'><IoBasket /></p> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products