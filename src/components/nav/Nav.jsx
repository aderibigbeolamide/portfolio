import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="http://localhost:3000/musodiqportfolio.com#"  onClick={() => setActiveNav('http://localhost:3000/musodiqportfolio.com#')} className={activeNav === 'http://localhost:3000/musodiqportfolio.com#' ? 'active' : ''} rel="noopener noreferrer"><AiOutlineHome/></a>
      <a href="#about" rel="noopener noreferrer" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" rel="noopener noreferrer" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" rel="noopener noreferrer" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav