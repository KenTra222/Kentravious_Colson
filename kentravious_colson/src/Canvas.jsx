import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas } from '@react-three/fiber';

 

ReactDOM.createRoot(document.getElementById('canvas')).render(
  <React.StrictMode>
    <div className='Website'>
    <Canvas
     flat
     camera={ {
       fov: 45,
       near: 0.1,
       far: 50,
       position: [ 1, 2, 6 ]
      } }>
     <Experience/>
     </Canvas>
    </div>
  </React.StrictMode>,
)
