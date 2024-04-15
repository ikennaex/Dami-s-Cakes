import React from "react";
import "./placeorder.css";
import Contactus from "../Components/Contactus";

const Placeorder = () => {
  return (
    <div className="placeorder-div">
      <div className="bespokediv">
        <img
          className="placeorder-img"
          src="https://images.pexels.com/photos/3923555/pexels-photo-3923555.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />

        <div className="bespoke-cake">
          <p>Bespoke Cakes</p>
          <h3 className="bespoke-h3 pink">Just for you</h3>
          <div>

          <p className="bespoke-p">
            I can design and create any cake perfect for your celebration
            whether it's creating your little ones dream birthday cake,
            something a bit cheeky for a friend or a big party showstopper.
            Prices start from £50.
          </p>
          </div>
        </div>
      </div>

      <div className="howtoorder-div">
        <p className="howtoorder-txt">How to Order</p>
        <div className="order-procedure">

        <h3>Step 1: Get in touch</h3>
        <p>
          For a free of charge design and quote drop me an e-mail at
          sliceoffuncakes@outlook.com and let me know . . . . <br /> 
          Date of event (Check availability here) <br />
          Cake size/ number of servings (see Serving Guide) <br />
          Which flavours would you like (see Flavour Menu) <br />
          Any theme/ideas you have, feel free to include some inspiration images although
          I do not offer <br /> exact copies due to copyright (it's better to be
          original anyway!) <br />
          If you plan to collect or need delivery
        </p>

        <h3>Step 2: Quote</h3>
        <p>
          I'll get back to you with some ideas and prices for you to chose from.
        </p>

        <h3>Step 3: Booking your order</h3>
        <p>
          If you wish to proceed let me know and I will arrange for an online
          invoice for the £10 deposit to <br /> be e-mailed over to you. Your order is
          confirmed once this deposit has been paid.
        </p>

        <h3>Step 4: Balance Payment</h3>
        <p>
          I will e-mail you an invoice for the balance of the cake payment to be
          paid a few days before you <br /> collect your cake.
        </p>

        <h3>Step 4: Receive your cake</h3>
        <p>
          This is the exciting bit! Your cake will be ready and waiting for your
          collection or delivered to you <br /> as agreed. <br /> Go and enjoy that cake!
        </p>
        </div>

      </div>

      <Contactus />
    </div>
  );
};

export default Placeorder;
