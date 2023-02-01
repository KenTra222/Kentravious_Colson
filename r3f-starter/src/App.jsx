import { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Clone, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
 
 



export default function App() {
  const { nodes} = useGLTF("/lunch.glb");
  const modelTexture = useTexture('/lunch.jpg')
   console.log(modelTexture)


  return (
    <div id="canvas-container">
      <Canvas>
      
      <color args={ [ '#030202' ] } attach="background" />      
      <OrbitControls makeDefault />      
      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
           
      </Canvas>
    </div>
  )
}
useGLTF.preload("/lunch.glb");

