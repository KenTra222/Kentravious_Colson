import React from 'react'
import portfolio from "../data/portfolio.js"
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
console.log(portfolio);

export const Portfolio = () => {
  return (
    <div className='portfolio_wrapper'>
        <div className='portfolio'>
            {portfolio.map(project => (
                <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                />
            ))}
        </div>
    </div>
  )
}
