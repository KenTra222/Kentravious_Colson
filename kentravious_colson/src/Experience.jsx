import React from 'react';

import { Perf } from 'r3f-perf';
import { useControls } from 'leva'
import { Sparkles, Center, useTexture, useGLTF, OrbitControls  } from '@react-three/drei'

function Experience() {
  
  const {nodes} = useGLTF("/lunch.glb")
  
  const texture =  useTexture('/lunch.jpg')
  texture.flipY = false


  return (
    <>
        <color  args={ [ '#201919' ] } attach="background"/>
        <OrbitControls makeDefault />

        
      <Center>
       
       
      
            <mesh geometry={nodes.baked.geometry}>
              <meshBasicMaterial map={texture}/>
            </mesh>
      </Center>
        
    </>
  )
}

export default Experience