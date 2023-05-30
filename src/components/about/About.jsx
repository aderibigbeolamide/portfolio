import React from 'react'
import './About.css'
import Me from '../../assests/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { VscNewFolder } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Comapany</h5>
              <small>Sysbeams, Abeokuta</small>
            </article>

            <article className='about__card'>
              <VscNewFolder className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Passionate backend developer and problem-solving competitor demonstrated in solving different problems using appropriate algorithms and data structures to make scalable and high performing applications.
            I am a true team player with strengths in adaptability, communication, and accuracy My objective is simply to be the best developer that I can be and to contribute to the technology industry.
            I'm driven by starting new projects from scratch and achieving engineering excellence in the products I ship Geared towards the position</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About