import React,{useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import './about.scss'
import {  OrbitControls } from '@react-three/drei'
import ImageCube from '../ImageCube/ImageCube'
 

const About = () => {
  const ref = useRef(null)
 

  return (
  
    <section id='about' className='section' ref={ref}>
          <div className='AboutCanvasWrapper'>
            <Canvas id='aboutExperience'  flat linear>
              
              <ambientLight position={[0,8,0]} intensity={0.9}/>
              <ImageCube/>
            </Canvas>
            
          </div> 
          <div className='bioWrapper'>
            <h2>Biography</h2>
            <p>this is the Biography section </p>
          </div>
                
    </section>
 
   
  )
}

export default About