import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from '@material-ui/icons/Instagram';
// import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact() {
  return (
    <div className="container contact" id="contact">
      <div className="row">
        <div className="col-lg-12 col-md-12 order-lg-1 order-md-4 order-4">
          <div className="contact-info mt-2">
            <ul>
              {/* <li className="mb-4">
                <span>
                  <PhoneIcon />
                </span>
                +44 0123 4567
              </li>
              <li className="mb-4">
                <span>
                  <TelegramIcon />
                </span>
                info@company.com
              </li> */}
              <a className="mb-4" href="https://t.me/ctcwtfico" target="_blank"> 
                <span >
                  <TelegramIcon />
                </span>
                Join us on Telegram
              </a>
              <a className="mb-4" href="https://instagram.com/ctcwtf" target="_blank"> 
                <span >
                  <InstagramIcon />
                </span>
                Join us on Instagram
              </a>
              <a className="mb-4" href="https://twitter.com/ctcwtf" target="_blank"> 
                <span >
                  <TwitterIcon />
                </span>
                Join us on Twitter
              </a>
            </ul>
          </div>
        </div>
        {/* <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
          <div className="contact-form">
            <h2>CONTACT US</h2>
            <p>
            We are always open and we welcome and questions you have for 
            our team. If you wish to get in touch, please fill out the form below. 
            Someone from our team will get back to you shortly.

            </p>
            <form className="row">
              <div className="col-lg-6 col-12 form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="Introduce yourself" />
              </div>
              <div className="col-lg-6 col-12 form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Who do we replay to"
                />
              </div>
              <div className="col-12 form-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  rows="10"
                  placeholder="Leave your question or comment here"
                ></textarea>
              </div>
              <div className="col-12 form-group">
                <button className="button-custom">Send</button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
