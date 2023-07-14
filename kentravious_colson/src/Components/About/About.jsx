import React,{useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import './about.scss'
import ImageCube from '../ImageCube/ImageCube'
 

const About = () => {
  const ref = useRef(null)
 

  return (
  
    <section id='about' className='section' ref={ref}>

<h2 className='section_header'>.02<span>About </span></h2>  

<div className='canvas_bio_wrapper'>

          <div className='AboutCanvasWrapper'>
            <Canvas id='aboutExperience'  flat linear>
              <ambientLight position={[0,4,0]} intensity={0.9}/>
              <ImageCube/> 
            </Canvas>  
          </div> 

          <div className='bioWrapper'>
            <p>Hi my name is Kentravious Colson! <br/> I'm a Creative Developer specializing in user experince and customer marketing. I started my journey in the tech space in 2014 as an audio engineer and as the years passed by fell in love with software development. I love to create engaging design that  </p>
           <p>you can download my <a href='assets/resume.docx' download="Resume.pdf">resume.docx</a> file here</p> 
          </div>
                
</div>
    </section>
 
   
  )
}

export default About