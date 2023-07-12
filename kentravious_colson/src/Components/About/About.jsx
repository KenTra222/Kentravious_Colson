import React,{useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import './about.scss'
import ImageCube from '../ImageCube/ImageCube'
 

const About = () => {
  const ref = useRef(null)
 

  return (
  
    <section id='about' className='section' ref={ref}>
          <div className='AboutCanvasWrapper'>
            <Canvas id='aboutExperience'  flat linear>
              <ambientLight position={[0,4,0]} intensity={0.9}/>
              <ImageCube/> 
            </Canvas>
            
          </div> 
          <div className='bioWrapper'>
            <h2>Biography</h2>
            <p>Hi my name is Kentravious Colson! <br/> I'm a Creative Developer specializing in user experince and customer marketing. I started my journey in the tech space in 2014 as an audio engineer and as the years passed by fell in love with software development. I love to create engaging design that  </p>
            <a href='assets/Kentravious_Colson_Resume.pdf' download="Resume.pdf">download resume</a>
          </div>
                
    </section>
 
   
  )
}

export default About