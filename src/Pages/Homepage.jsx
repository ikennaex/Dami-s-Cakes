import React from 'react'
import { bakerimg, cakeimg, homepageimg } from '../imports'
import "./homepage.css"
import Reviews from '../Components/Reviews'
import Instagram from '../Components/Instagram'
import Contactus from '../Components/Contactus'

const Homepage = () => {
  return (
    <div>
      <div>

        <img className='homepageimg' src= {homepageimg} alt="cakes" />
      </div>
      
      <div className='welcometxt-div'>
      <p className='welcome-text pink'>----- Welcome to Dami's Cakes of Basingstoke ----- </p>
      </div>

      <div className='bakercake-info'>
        
      <div className='baker-info'>
        <img className='baker-img' src= {bakerimg} alt="" />
        <p className='baker-txt'>Hello I'm Emmanuel a cake maker/ baker and I run Emmanuel's Cakes from my home in Basingstoke. I love to make people smile with my delicious home bakes and cakes for any occasion. I'm fully insured and hold a 5* hygiene rating.</p>
      </div>

      <div className='cake-info'>
        <p className='cake-txt'>Celebration Cakes freshly made for your special occasion. Birthday cakes, wedding cakes, baby showers, christening cake, gender reveal, parties. Whatever your event I can make the perfect cake for the occasion. </p>
        <img className='cake-img' src= {cakeimg} alt="" />
      </div>

      </div>

      {/* Reviews Section  */}
      <Reviews />
      <Instagram />
      <Contactus />
    </div>
  )
}

export default Homepage