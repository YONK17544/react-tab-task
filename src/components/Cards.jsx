import React from 'react'
// import { useState, useEffect } from 'react'
import CardItem from './CardItems'
// import {getData} from '../services/axios.service'
// import { PRODUCT_URL } from '../constants/api.constants'


const Cards = ({prod, handleDeleteProduct, handleEditProduct}) => {
    // const [prod, setProd]=useState([])

    // useEffect(()=>{
    //  getData(PRODUCT_URL).then((resp)=>setProd(resp.data.products))
    // },[])
  
    return (
    <div className='d-flex flex-wrap justify-content-center'>
      {prod.map((product)=>{
        return <CardItem key={product.id} product={product} handleDeleteProduct={handleDeleteProduct} handleEditProduct ={handleEditProduct} />

      })}
    </div>
  )
}

export default Cards
