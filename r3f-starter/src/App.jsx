import { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      
      <Canvas>
      <OrbitControls makeDefault />
        {/* objects */}
        <ambientLight intensity={0.9} />
      <directionalLight color="red" position={[0, 0, ]} />
      <mesh color='blue'>
        <boxGeometry  />
        <meshStandardMaterial />
      </mesh> 

      {/* lights */}
      </Canvas>
      
    </div>
  )
}


export default App
