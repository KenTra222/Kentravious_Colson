import React,{useState} from 'react'
import './portfolioItem.scss'
import {IoIosArrowDropup, IoIosArrowDropdown} from 'react-icons/io'
 
export const PortfolioItem = ({ title, imgUrl, stack, link, product, description }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };
  
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
                <button className='see_morebtn' onClick={handleToggleContent}>
                  
                 {showContent ?  <IoIosArrowDropup/>:  <IoIosArrowDropdown/>}
                    
                </button>           
              </div>    

              <div className='see_more_container'>
                {showContent &&  <p className='description'> {description} </p>}
              </div>                
      </div>
     
  )
}
