import React from 'react'

const CasestudyItem = ({ title, imgUrl, description }) => {
  return (
     
        <div>
            <img
                src={imgUrl}
                alt="case study"
                className='casestudy_img'/>
            <h4> {title}</h4>
            <p>{description}</p>
        </div>
  
  )
}

export default CasestudyItem