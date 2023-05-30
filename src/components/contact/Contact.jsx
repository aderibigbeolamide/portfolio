import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hvq310p', 'template_kd8ef9g', form.current, 'H41NRRUKhv77WgVeY')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Olamide Email</h5>
            <a href="mailto:aderibigbeolamide56@gmail.com" target='_blank'rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <ImLinkedin className='contact__option-icon' />
            <h4>Linked</h4>
            <h5>Aderibigbe Musodiq Olamide</h5>
            <a href="https://www.linkedin.com/in/musodiq-aderibigbe-a70975227/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>Aderibigbe Musodiq Olamide</h5>
            <a href="https://github.com/aderibigbeolamide" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Aderibigbe Musodiq Olamide</h5>
            <a href="https://api.whatsapp.com/send?phone+2348107183206" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your FullName' required />
          <input type="email" name='email' placeholder='Enter your Email' required />
          <textarea name="message" rows="7" placeholder='Input your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact