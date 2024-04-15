import React from 'react'
import "./contactus.css"

const Contactus = () => {
  return (
    <div className='contactus-div'>
        <p className='contactus-txt pink'>---- Contact Us ----</p>
        <p className='contactus-subtext'>Get in touch</p>
        <div className='form-div'>

        <form className='contact-form' action="">
            <input placeholder='Name' className='contactinput' type="text" />
            <input placeholder='Email Address' className='contactinput' type="email" />

            <textarea className='contact-textarea' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>

            <div className='signup-text'>
            <input type="checkbox" name="" id="sign-up" />
            <label htmlFor="sign-up" > Sign up for our email list for updates, promotions, and more.</label>
            </div>

            <div className='contact-btn-div'>

            <button className='contact-btn'>Send</button>
            </div>
        </form> 
        </div>

        <div className='contact-extra'>
            <p className='recaptcha'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <p className='damicakes-txt'>Dami's Cakes</p>
            <p>Basingstoke England, United Kingdom</p>
            <p>Damiscakes@outlook.com </p>
        </div>
    </div>
  )
}

export default Contactus