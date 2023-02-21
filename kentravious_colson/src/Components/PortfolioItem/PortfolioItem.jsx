import React from 'react'

export const PortfolioItem = ({ title, imgUrl, stack, link}) => {
  return (
    <div>
        <img
            src={imgUrl}
            alt='portfolio'
            className='portfolio_img'/>
            <div>
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
