
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import React, { useRef } from 'react';
import icons from "../../assets/icons/sprite.svg";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hb0trx3', 'template_zuas21b', form.current, '_0376bPPpkaBHW5_S')
    e.target.reset();
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact__heading'>
        Contact Me
      </div>
      <div className='contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Hazmclean92@gmail.com</h5>
              <a href='mailto:hazmclean92@gmail.com'>Send Me a Message</a>
            </article>
            <div className="contact-text">
              You can also find me here:
            </div>
            <div className='social__links'>
              <a href="https://www.linkedin.com/in/harry-mclean-98b216154/">
                <svg className="icon-linkedin">
                  <use xlinkHref={`${icons}#icon-linkedin`} />
                </svg>
              </a>
              <a href="https://github.com/Flintysnail2">
                <svg className="icon-github">
                  <use xlinkHref={`${icons}#icon-github`} />
                </svg>
              </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message"/>
          <button type="submit" className="btn btn-message">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
