import React from 'react'
import portfolio from "../data/portfolio.js"
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import './portfolio.scss'

export const Portfolio = () => {
  return (
    <section id='projects' className='section'>
        <h2 className='section_header'>03.<span>My Recent Projects!</span></h2>           
              
    <div className='portfolio_wrapper'>
          <div className='portfolio'>
              {portfolio.map(project => (
                <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                product={project.product}
                />           
                ))}
          </div>
    </div>
          </section>
            
  )
}
