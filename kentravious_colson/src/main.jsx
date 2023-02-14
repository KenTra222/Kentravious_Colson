import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './index.css'
import { Canvas } from '@react-three/fiber';
import Form from './Form';

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

    <div className='Website'>

      <section className='work'>
        <h2>My Work</h2>
        <div className='portfolio'> 
          <ul className='categories'>
            <li>
              <h4>Real World</h4>
              <ul className='projects'>
                <li className='project1'></li>
                <li className='project1'></li>
                <li className='project1'></li>
              </ul>
            </li>
            <li> 
              <h4>For fun</h4>
              <ul className='projects'>
                  <li className='project1'></li>
                  <li className='project1'></li>
                  <li className='project1'></li>
              </ul>
            </li>
            <li> 
              <h4>Artwork</h4>
              <ul className='projects'>
                  <li className='project1'></li>
                  <li className='project1'></li>
                  <li className='project1'></li>
              </ul>
            </li>
          </ul>
        </div>

      </section>

      <section className='contact'>
        <h2>Contact Me</h2>
         <Form/>
      </section>
    </div>
  </React.StrictMode>,
)

