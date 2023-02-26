import React, {useRef} from 'react'
import './experience.scss'
import { useFrame } from '@react-three/fiber';
import { Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience() {
  const {nodes} = useGLTF("./model/kingkai.glb");
  const texture = useTexture('./model/kingkai_texture.jpg')
  texture.flipY = false

  const planet = useRef()

  useFrame((state, delta) =>
  {
      
      planet.current.rotation.y += delta * 0.2
      planet.current.rotation.x += delta * 0.2

  })
 
  
  return (
    <> 
        <OrbitControls makeDefault/>
        <ambientLight intensity={1}/>
        <color args={['#252525']} attach='background'/>
        <Center>

        <mesh ref={planet} scale={2} geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={texture}/>
        </mesh>
        </Center>    
      </>
  )
}
