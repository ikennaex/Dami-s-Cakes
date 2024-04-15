import React from 'react'
import "./availability.css"
import { availability } from '../imports'

const Availability = () => {
  return (
    <div>
        <div className='availability-div'>
            <p className='bespoke-cake pink'>------- Bespoke Cake Availability ------</p>
            <img className='bespoke-img' src= {availability} alt="" />
        </div>
    </div>
  )
}

export default Availability