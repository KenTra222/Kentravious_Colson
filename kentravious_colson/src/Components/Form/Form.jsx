import React, {useRef, useState} from 'react';
import './form.scss'
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Form() {
  
  

  return (
    
    <section id='contact' className='section' >
      
form

    <article>
      <Canvas>
        <mesh>
          <planeGeometry/>
          <meshBasicMaterial/>
          <Html center>
           <iframe src='https://forms.gle/ZfznMkbQCiTuJK8g8'/>
          </Html>
        </mesh>
      </Canvas>
      
    </article>
    </section>
  
  );
}