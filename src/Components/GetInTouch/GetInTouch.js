import React from 'react';
import './GetInTouch.css'
import emailjs from "emailjs-com";


function GetInTouch() {


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('stratton', 'template_64jva5n', e.target, 'user_RUuKdJ2GeHqbg1RhTvRbp')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset();
      }
    
  return (
      <div className="GetInTouch">
    <div id="contact-form-title" data-uw-styling-context="true">Get In Touch With Us</div>
    <p className="GetInTouch__p">
    When you are ready, give us a call or send us a message and let us show you how our knowledge can help your business grow.
    </p>
    <form className="contact__form" onSubmit={sendEmail}>
                <h1 contact__form>Contact Us</h1>
                <label> Name </label>
                <input type="text" className="form-control" placeholder="Name" name="name" />
                <label> Email </label>
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                <label> Subject </label>
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                <label>Message</label>
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                <button
                  type="submit" >
                  Send Now
                </button>
              </form>


    </div>

  )
  
  

}

export default GetInTouch;
