import React, {useRef} from 'react'
import testimonials from '../data/testimonials'
import { TestimonialItem } from '../TestimonialItem/TestimonialItem';
import './testimonial.scss'
import { useInView } from 'framer-motion'

export const Testimonial = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
 
  return (
    <section id='projects' className='section' ref={ref}
    style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
        <h2 className='section_header'>06.<span>Testimonials From Clients!</span></h2>           
              
    <div className='portfolio_wrapper'>
          <div className='portfolio'>
              {testimonials.map(testimonial => (
                <TestimonialItem
                key={testimonial.id}
                imgUrl={testimonial.imgUrl}
                name={testimonial.title}
                clientReview={testimonial.clientReview}
                 
                />           
                ))}
          </div>
    </div>
          </section>
            
  )
}