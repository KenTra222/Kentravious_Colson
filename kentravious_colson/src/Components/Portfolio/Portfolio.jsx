import React, {useRef} from 'react'
import portfolio from "../data/portfolio.js"
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import './portfolio.scss'
import {   useInView } from 'framer-motion'

export const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
 
  return (
    <section id='projects' className='section' ref={ref}
    style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
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
