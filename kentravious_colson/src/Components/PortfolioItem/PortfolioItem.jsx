import React from 'react'
import './portfolioItem.scss'
import {Carousel} from 'react-responsive-carousel'
export const PortfolioItem = ({ title, imgUrl, stack, link}) => {

  
  return (
    
      <div className='portfolioItem_wrapper'>
          <img
              src={imgUrl}
              alt='portfolio'
              className='portfolio_img'/>

              <div className='item_details'>
                  <h3>{title}</h3>
                  <p>
                      {stack.map(item =>(
                        <span>{item}</span>
                        ))}
                  </p>
              </div>
      </div>
     
  )
}
