import React from "react";
import "./cupcakes.css";
import {data} from "./Flavourmenu";

const Cupcakes = () => {
  return (
    <div>

      <div className="cupcake-div">
        <img className="cupcake-img" src="https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        <div className="">
          <p className="cupcakes-txt pink">Cupcakes</p>
          <p className="cupcake-desc">
            I can make cupcakes for any occasion from a simple box of Thank You
            Cupcakes to 100s of Wedding Cupcakes. Buttercream flowers, hand
            stamped fondant toppers, printed toppers, photo toppers, hand
            modelled toppers and a variety of sprinkles all available. Please
            get to touch to discuss your requirements.
          </p>
        </div>

      </div>

        <div className="cupcakeflavour-div">
            <p className="pink cupcake-menutxt">CupCake Menu</p>

            <div className="cake-flavours graycup-bg">
                {data.map((data) => (
                    <div className="flex-item">
                        <p className="pink flavour-header" >{data.header}</p>
                        <p>{data.subtext}</p>
                    </div>
                ))}
            </div>
        </div>


        


    </div>
  );
};

export default Cupcakes;
