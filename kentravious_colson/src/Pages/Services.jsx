import React from 'react'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div className='services'>{/* Services */}
    <div className='services Wrapper'>
        <h2  className='page_title'>My Services</h2>
        
        <section className='services_container'>
        
        <div className='card'>
        <div className='box'>
        <img className='service_image' src='/projects/cadet.jpg'/>
        </div>
        
        <div className='card_details'>
        <h4>Single Page Design</h4>
        <div className='service_description'> 
        <p>$350</p>
        <p>single page</p>
        </div>
        
        <div className='book_button'>
        <NavLink className='services_contact' to='contact'> Contact</NavLink>

        </div>
        </div>
        </div>
        
        <div className='card'>
          <div className='box'>
            <img className='service_image' src='/projects/cadet.jpg'/>
          </div>

          <div className='card_details'>
            <h4>Multi Page Design</h4>
            <div className='service_description'> 
              <p>$800</p>
              <p>single page</p>
              </div>
              
              <div className='book_button'>
              <NavLink className='services_contact' to='contact'> Contact</NavLink>

              </div>
              </div>
              </div>
              
              <div className='card'>
              <div className='box'>
              <img className='service_image' src='/projects/cadet.jpg'/>
              </div>
              
              <div className='card_details'>
              <h4>Visual Asset Creation</h4>
              <div className='service_description'> 
              <p>$600</p>
              <p>single page</p>
              </div>
              
              <div className='book_button'>
              <NavLink className='services_contact' to='contact'> Contact</NavLink>

              </div>
              </div>
              </div>
              </section>
            </div>
            </div>
  )
}

export default Services