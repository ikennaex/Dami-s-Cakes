import React from 'react'
import "./instagram.css"

const Instagram = () => {
    const data = [ 
        {
            img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1277202/pexels-photo-1277202.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]
  return (
    <div className='instagram-main'>
        <div>
            <p className='ig-txt pink '>---- Instagram ----</p>

            <div className='img-maindiv'>
                {data.map((data) => 
                <div>
                    <img className='ig-cake' src= {data.img} alt="cake pics" />
                </div>
            )}
            </div>

            <p className='pink follow-igtxt'>Follow me on instagram </p>
        </div>
    </div>
  )
}

export default Instagram