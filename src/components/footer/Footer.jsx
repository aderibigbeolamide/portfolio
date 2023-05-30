import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from  'react-icons/fa'
import {ImTwitter} from 'react-icons/im'


const Footer = () => {
  return (
    <footer>
      <a href="#Home" className='footer__logo'  rel="noopener noreferrer">Musodiq</a>

      <ul className="permalinks">
        <li><a href="#Home" rel="noopener noreferrer">Home</a></li>
        <li><a href="#about" rel="noopener noreferrer">About</a></li>
        <li><a href="#experience" rel="noopener noreferrer">Experience</a></li>
        <li><a href="#services" rel="noopener noreferrer">Services</a></li>
        <li><a href="#portfolio" rel="noopener noreferrer">Portfolio</a></li>
        <li><a href="#testimonial" rel="noopener noreferrer">Testimonials</a></li>
        <li><a href="#contact" rel="noopener noreferrer">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook" target='_blank' rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://instagram" target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
        <a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer"><ImTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Musodiq</small>
      </div>
    </footer>
  )
}

export default Footer