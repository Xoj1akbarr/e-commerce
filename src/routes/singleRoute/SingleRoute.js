import React from 'react'
import './SingleRoute.css'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';

function SingleRoute() {

  const param = useParams()

  const item = PRODUCTS.find((item, index) => item.id == param.id)

  return (
    <div className='singleroute'>

      <div className='img'>
      <img src={item.url[0]} width={400} alt="" />
      </div>
      
      <div className='info'>
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
      </div>

    </div>
  )
}

export default SingleRoute