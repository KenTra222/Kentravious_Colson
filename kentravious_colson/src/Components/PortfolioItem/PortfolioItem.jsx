import React from 'react'
import './portfolioItem.scss'

export const PortfolioItem = ({ title, imgUrl, stack, link}) => {
  return (
    <div className='portfolioItem_wrapper'>
      <div className='item_container'>

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
    </div>
  )
}
