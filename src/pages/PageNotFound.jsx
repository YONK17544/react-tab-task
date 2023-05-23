import React from 'react'
import {  useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const PageNotFound = () => {
    const navigate=useNavigate()
    const clickHandler=()=>{
     navigate('/')
    }

  return (
    <div>
      <Button variant="primary" onClick={clickHandler} >Back to Home Page</Button>
    </div>
  )
}

export default PageNotFound
