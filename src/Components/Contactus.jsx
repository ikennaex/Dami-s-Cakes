import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <div className="contactus-div">
      <p className="contactus-txt pink">---- Contact Us ----</p>
      <p className="contactus-subtext">Get in touch</p>
      <div className="form-div">
        <form className="contact-form" action="">
          <input placeholder="Name" className="contactinput" type="text" />
          <input
            placeholder="Email Address"
            className="contactinput"
            type="email"
          />

          <textarea
            className="contact-textarea"
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div className="signup-text">
            <input type="checkbox" name="" id="sign-up" />
            <label htmlFor="sign-up">
              {" "}
              Sign up for our email list for updates, promotions, and more.
            </label>
          </div>

          <div className="contact-btn-div">
            <button className="contact-btn">Send</button>
          </div>
        </form>
      </div>

      <div className="contact-extra">
        <p className="recaptcha">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <p className="damicakes-txt">Dami's Cakes</p>
        <p>
          134 Culver road, RG21 3NL, Winchester road, Basingstoke England,
          United Kingdom
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.967980599574!2d-1.0951686!3d51.2564989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742227bc330d19%3A0x7de7083012f60423!2s134%20Culver%20Rd%2C%20Basingstoke%20RG21%203NL%2C%20UK!5e0!3m2!1sen!2sng!4v1713264166975!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p>Damiscakes@outlook.com </p>
      </div>
    </div>
  );
};

export default Contactus;
