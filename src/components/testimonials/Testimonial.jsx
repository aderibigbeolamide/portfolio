import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assests/WhatsApp Image 2022-08-25 at 10.20 1 (1).jpg'

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Adebowale Glory',
    review: 'I am writing to recommend Aderibigbe Musodiq for the developer position atyour Organization. During our time working together at Sysbeams, Aderibigbe Musodiq proved to be a highly skilled and dedicated developer who consistently delivered high-quality work.',
    
  },
  {
    avatar: AVTR1,
    name: 'Adebowale Glory',
    review: 'Aderibigbe Musodiq has a strong background in relevant skills and experience, which made them an invaluable member of our development team. They have a keen eye for detail and take pride in their work, ensuring that every project they worked on was completed to the highest standard.',
    
  },
  {
    avatar: AVTR1,
    name: 'Adebowale Glory',
    review: 'One of Aderibigbe Musodiq  greatest strengths is their ability to collaborate effectively with others. They are an excellent communicator, always willing to listen to feedback and offer their own insights and ideas. Aderibigbe Musodiq is also proactive and takes the initiative to identify potential problems and suggest solutions before they become major issues.',
    
  },
  {
    avatar: AVTR1,
    name: 'Adebowale Glory',
    review: ' I have no doubt that Aderibigbe Musodiq would make a valuable addition to your development team at your Organization. They are a dedicated and talented developer with a proven track record of success, and I highly recommend them for the role.',
    
  }
];

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar1" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial