import React from "react";
import "./corperateorders.css"
import Contactus from "../Components/Contactus";

const data = [
  {
    text: "Your product in Cake!",
    img: "https://images.pexels.com/photos/18054975/pexels-photo-18054975/free-photo-of-homemade-cake-decorated-with-a-cartoon-fox-drawing.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtext:
      "Re-creating your product in cake form is a fun way to celebrate a launch, anniversary or award! Why not go super size for a bold statement that feeds a crowd! Get in touch for a personalised quote ",
  },
  {
    text: "Celebrate with a cake",
    img: "https://images.pexels.com/photos/18841336/pexels-photo-18841336/free-photo-of-brownie-with-fruit.jpeg?auto=compress&cs=tinysrgb&w=600",
    subtext:
      "Businesses have birthdays too, why not celebrate with a showstopper!",
  },
  {
    text: "Branded Cupcakes",
    img: "https://cupcakesweeties.co.nz/cdn/shop/products/corporate-cupcakes-786842_525x700.jpg?v=1709672573",
    subtext:
      "Get your logo or slogan on our completely edible cake toppers. Orders from 12 to 500.",
  },
];

const Corperateorders = () => {
  return (
    <div>
      <div>
        <p className="corporate-caketext pink">Corporate Cake Services</p>

        <div className="corperatemenu-div">

        {data.map((data) => {
          return (
            <div className="corperateinfo-div">
              <p className="corperateinfo-header pink">{data.text}</p>
              <img className="corperate-img" src= {data.img} alt="" />
              <p>{data.subtext}</p>
            </div>
          );
        })}
        </div>
      </div>

      <Contactus />
    </div>
  );
};

export default Corperateorders;
