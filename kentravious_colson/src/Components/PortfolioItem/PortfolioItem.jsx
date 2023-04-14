import React from 'react'
import './portfolioItem.scss'
 
export const PortfolioItem = ({ title, imgUrl, stack, link, product }) => {

  
  return (
    
      <div className='portfolioItem_wrapper'>
          <img
              src={imgUrl}
              alt='portfolio'
              className='portfolio_img'/>

              <div className='item_details'>             
                <h3>{title}</h3>
                             
                <p className='stack'> STACK: 
                    {stack.map(item =>(
                        <span> {item} </span>
                        ))}
                </p>               
              </div>                    
      </div>
     
  )
}
