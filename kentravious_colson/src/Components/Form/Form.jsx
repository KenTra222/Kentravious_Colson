import React, {useRef, useState} from 'react';
import './form.scss'
import { Canvas } from '@react-three/fiber';
import { Center, Html, OrbitControls, useGLTF, Text, Float } from '@react-three/drei';

const WRAPPERSTYLES = {
  width: "17.4rem",
  height: '12rem',
  marginBottom: '15rem',
 
  borderRadius: '20px',
  overflow: "hidden"
}

export default function Form(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  return (
    
    <section id='contact' className='section' >

    <article>
      <Canvas >
        <ambientLight intensity={1} position={[0,4,0]}/>
        {/* <OrbitControls/> */}

        <Text position={[-4, 4, -3]}>
          Let's Chat
        </Text>

        <Float>

      

        <primitive 
            position={[8, -5, -15]}
            rotation={[Math.PI * 0.05, Math.PI * -0.3, 0]}
            object={scene}  
            {...props} 
            scale={4}>

          <Html
          position={[0 ,0.25, -1.05]}
          rotation={[Math.PI * -0.085, 0, 0]}
          transform
          center
          distanceFactor={3.5}>
           <iframe
             src='https://forms.gle/ZfznMkbQCiTuJK8g8'
             style={WRAPPERSTYLES}/>
          </Html>
        
         </primitive>
             </Float>
        
      </Canvas>
      
    </article>
    </section>
  
  );
}


 