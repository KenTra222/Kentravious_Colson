import React from 'react'
import './portfolioItem.scss'
 
export const PortfolioItem = ({ title, imgUrl, stack, link,product }) => {

  
  return (
    
      <div className='portfolioItem_wrapper'>
          <img
              src={imgUrl}
              alt='portfolio'
              className='portfolio_img'/>

              <div className='item_details'>
                        <div className='projectInfo'>
                            <h3>{title}</h3>
                            <p className='product_tag'><span>{product}</span></p>
                        </div>
                   
                  <p>
                      {stack.map(item =>(
                        <span>{item}</span>
                        ))}
                  </p>
              </div>
      </div>
     
  )
}
