import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio'> 
        {/* gallery */}

        <section className='portfolio_wrapper'>
              <h2 className='page_title'>Portfolio</h2>
              
              <div className="container">
              <div className="box">  <img className='portfolio_img' src='/projects/cadet.jpg'/></div>
              <div className="box2"> <img className='portfolio_img' src='/projects/ctc.jpg'/></div>
              <div className="box-3"> <img className='portfolio_img' src='/projects/gigibite.jpg'/></div>
              <div className="box-4"> <img className='portfolio_img' src='/projects/king.jpg'/></div>
              <div className="box-5"> <img className='portfolio_img' src='/projects/kkpic.png'/></div>
              <div className="box-6"> <img className='portfolio_img' src='/projects/ctc2.jpg'/></div>
              <div className="box-7"> <img className='portfolio_img' src='/projects/copiousStaffing.png'/></div>
              <div className="box-8"> <img className='portfolio_img' src='/projects/king.jpg'/></div>
              <div className="box-9"> <img className='portfolio_img' src='/projects/cadet.jpg'/></div>
              </div>
              
            </section>
    </div>
  )
}

export default Portfolio