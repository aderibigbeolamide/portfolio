import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'Student Votting Application',
    github: 'https://github.com/aderibigbeolamide/VottingApp-API',
    demo: 'https.//dribbble.com'
  },
  {
    id: 2,
    image: IMG1,
    tittle: 'React Docker Project',
    github: 'https://github.com/aderibigbeolamide/React-Docker-Project',
    demo: 'https.//dribbble.com'
  },
  {
    id: 3,
    image: IMG1,
    tittle: 'Charity Management System',
    github: 'https://github.com/aderibigbeolamide/CMSApplication',
    demo: 'https.//dribbble.com'
  },
  {
    id: 4,
    image: IMG1,
    tittle: 'Docker React App',
    github: 'https://github.com/aderibigbeolamide/Docker-ReactApp',
    demo: 'https.//dribbble.com'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Working Experience</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, tittle, github, demo }) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={tittle} />
                  <h3>{tittle}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio