import React from 'react'
import './index.scss'


import { Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience() {
  const {nodes} = useGLTF("./model/kingkai.glb");
  const texture = useTexture('./model/kingkai_texture.jpg')
  texture.flipY = false
 
  
  return (
    <> 
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.9}/>
        <color args={['#010101']} attach='background'/>
        <Center>

        <mesh scale={2.75} geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={texture}/>
        </mesh>
        </Center>    
      </>
  )
}

