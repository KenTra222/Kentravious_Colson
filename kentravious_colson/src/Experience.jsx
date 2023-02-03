import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva'
import {Center, OrbitControls, useGLTF, useTexture, } from '@react-three/drei'

function Experience() {
  //load model
  const  {nodes} = useGLTF('/lunch.glb')
  console.log(nodes);
    
  //load texture
  const bakedTexture = useTexture("/lunch.jpg")
  bakedTexture.flipY = false
  console.log(bakedTexture);

  return (
    <Canvas>
        <color  args={ [ '#201919' ] } attach="background"/>
        <OrbitControls makeDefault />

        <mesh geometry={ nodes.baked.geometry }>
                <meshStandardMaterial />
            </mesh>
        
    </Canvas>
  )
}

export default Experience