import React from 'react'

import "./footer.css"
const Footer = () => {

    const data = [
        {
            img: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
        },

        {
            img: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png'
        },
    ]

  return (
    <div className='footer-div'>

        <div className='footer-text'>
            <p>Copyright © 2024 Slice of Fun Cakes - All Rights Reserved.</p>
            
            <div className='socialmedia-div'>
                {data.map((data) => 
                <div>
                    <img className='socialmedia-icon' src= {data.img} alt="" />
                </div>
            )}
            </div>
            
        </div>

        <div className='quicklinks-footer'>
            <p>FAQ</p>
            <p>Delivery</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer