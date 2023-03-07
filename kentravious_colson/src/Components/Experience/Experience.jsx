import React, {useRef} from 'react'
import './experience.scss'
import { useFrame } from '@react-three/fiber';
import { Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience() {
  const {nodes} = useGLTF("./model/kingkai.glb");
  const texture = useTexture('./model/kingKaiTexture.jpg')
  texture.flipY = false

  console.log({nodes});

  const planet = useRef()

  useFrame((state, delta) =>
  {
      planet.current.rotation.y += delta * 0.5
      planet.current.rotation.x += delta * 0.2
  })

  return (
    <> 
        <OrbitControls makeDefault/>
        <ambientLight intensity={1}/>
        <color args={['#010101']} attach='background'/>
        <Center>

        <mesh ref={planet} scale={1} geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={texture}/>
        </mesh>
        </Center>    
      </>
  )
}

