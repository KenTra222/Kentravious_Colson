import React from 'react';
import {Canvas} from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import { useControls } from 'leva'
import { Sparkles, Center, useTexture, useGLTF, OrbitControls  } from '@react-three/drei'

export const Experience = () => {
  
  const {nodes} = useGLTF("/lunch.glb")
  
  const texture =  useTexture('/lunch.jpg')
  texture.flipY = false


  return (
    <Canvas>
        <color  args={ [ '#201919' ] } attach="background"/>
        <OrbitControls makeDefault />

        
      <Center>     
            <mesh >
              <boxGeometry/>
              <meshBasicMaterial />
            </mesh>
      </Center>
        
    </Canvas>
  )
}

