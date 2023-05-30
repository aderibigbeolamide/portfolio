import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A clear hierarchy.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Usability first.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Keep it consistent.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>design process.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>accessibility.</p>
            </li>
          </ul>
        </article>
        
        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Call to Actions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Contact Information.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Well Designed.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Easy to Use.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimized. </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Readily.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog posts.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Newsletters.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Podcasts.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Videos.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Editing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service