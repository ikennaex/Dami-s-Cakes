import React from 'react'
import "./reviews.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: "https://images.unsplash.com/photo-1602133187081-4874fdbd555c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Alex Smith",
    review: "Dami's Cakes nails it every time! Gorgeous cakes that taste divine. Highly recommended!"
  }, 

  {
    img: "https://images.unsplash.com/photo-1616002411355-49593fd89721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Samantha Jordan",
    review: "Dami's Cakes made my daughter's birthday unforgettable. Stunning design, delicious cake. Thank you!"
  },

  {
    img: "https://images.unsplash.com/photo-1509839862600-309617c3201e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Emily Parker",
    review: "Dami's Cakes = perfection! Stunning, delicious, and amazing service. Can't wait to order again!"
  },

  {
    img: "https://images.unsplash.com/photo-1555421689-43cad7100750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    name: "Michael Renold",
    review: "Dami's Cakes nailed our wedding cake. Beautiful and delicious—our guests loved it!"
  },

  {
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Linda Holding",
    review: "Dami's Cakes is the best! Beautiful and tasty cakes for any occasion. Trustworthy and accommodating"
  },

  {
    img: "https://images.unsplash.com/photo-1608485439523-25b28d982428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Jonathan Saul",
    review: "Dami's Cakes is a sweet tooth's dream! Moist, flavorful, and stunning. Lifelong customer here!"
  },
]

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className='reviews-div'>
        <p className='review-text pink'>---- Reviews ----</p>

        <div className='reviews-container'>
        {/* <Slider {...settings}> */}
          {data.map((info) => (
            <div className='review-card'>
            <div className='img-div'>
              <img className='review-img' src= {info.img} alt="" />
            </div>

            <div>
              <p className='review-infoname pink'>{info.name}</p>
              <p className='review-txt'>{info.review}</p>
            </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
    </div>
  )
}

export default Reviews