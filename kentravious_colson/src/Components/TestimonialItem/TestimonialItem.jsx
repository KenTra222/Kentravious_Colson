import React from 'react'
import './testimonialItem.scss'

 
export const TestimonialItem = ({id, name, imgUrl, project, clientReview }) => {
    
  return (
    
      <div id={id} className='portfolioItem_wrapper'>

          <img
              src={imgUrl}
              alt='client image'
              className='portfolio_img'/>

              <div className='item_details'>    
              <div className='title_link_combo'>
                <h3>{name}</h3>
              </div>  
         
                <span>

                <p className='review'>"{clientReview}"</p>
                </span>
                             
                
                        
              </div>    

                           
      </div>
     
  )
}
