import React from 'react'
import './index.scss'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Center, useGLTF, useTexture} from '@react-three/drei'



const Experience = () => {
  const {nodes} = useGLTF("/kingkai.glb")
  
  
  return (
    <div id='canvas_wrapper'> 

      <Canvas>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.9}/>
        <color args={['#010101']} attach='background'/>
        <Center>

        <mesh scale={2.5} geometry={nodes.baked.geometry}>
          <meshBasicMaterial />
        </mesh>
        </Center>
      </Canvas>
    
      </div>
  )
}

export default Experience
