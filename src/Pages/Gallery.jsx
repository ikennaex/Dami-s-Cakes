import React from 'react'
import "./gallery.css"

const numberCakes = [
    {
        img: "https://images.pexels.com/photos/18745767/pexels-photo-18745767/free-photo-of-a-birthday-cake-with-number-7-candle.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/7180726/pexels-photo-7180726.jpeg?auto=compress&cs=tinysrgb&w=600"
        
    },
    {
        img: "https://images.pexels.com/photos/5804891/pexels-photo-5804891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        img: "https://images.pexels.com/photos/14353834/pexels-photo-14353834.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/7826287/pexels-photo-7826287.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    
]

const weddingCakes = [
    {
        img: "https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/3181263/pexels-photo-3181263.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/7666531/pexels-photo-7666531.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

const rainbowCakes = [
    {
        img: "https://images.pexels.com/photos/11753321/pexels-photo-11753321.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        img: "https://images.pexels.com/photos/8245682/pexels-photo-8245682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

]

const Gallery = () => {
  return (
    <div className='gallery-main'>
        <p className='gallery-txt pink'>Gallery</p>
        <div className='number-cakesmain'>
            <p className='pink'>Number Cakes</p>
             {numberCakes.map((data) => {
                 return (
                    <img className='number-cakesimg' src= {data.img} alt="" />
                )
             })}
        </div>


        <div className='weddingcake-div'>
            <p className='weddingcake-txt pink'>Wedding Cakes</p>
            
            {weddingCakes.map((data) => (
                <img className='wedding-img' src= {data.img} alt="" />
            ))}
        </div>


        <div className='rainbowcake-div'>
            <p className='pink rainbowcake-txt'>Rainbow Cakes</p>

            {rainbowCakes.map((data) => (
                <img className='rainbow-img' src= {data.img} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Gallery