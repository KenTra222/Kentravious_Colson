import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
     flat
     camera={ {
         fov: 45,
         near: 0.1,
         far: 50,
         position: [ 1, 2, 6 ]
     } }>
      <Experience />
    </Canvas>
  </React.StrictMode>,
)
