import React from 'react'
import './portfolioItem.scss'

 
export const PortfolioItem = ({id, title, imgUrl, stack, link, product, description }) => {
    
  return (
    
      <div id={id} className='portfolioItem_wrapper'>

          <img
              src={imgUrl}
              alt='portfolio'
              className='portfolio_img'/>

              <div className='item_details'>    
              <div className='title_link_combo'>
                <h3>{title}</h3>

                <a href={link}> 
                    link here
                </a>
              </div>  
         
                <span>

                <p className='description'>{description}</p>
                </span>
                             
                <p className='stack'> STACK: 
                    {stack.map(item =>(
                      <span> {item} </span>
                      ))}
                </p>    
                        
              </div>    

                           
      </div>
     
  )
}
