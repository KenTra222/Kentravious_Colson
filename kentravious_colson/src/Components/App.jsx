import Form from './Form/Form'
import { useAtom } from 'jotai'
import Intro from './Intro/Intro'
import About from './About/About'
import Layout from './Layout/Layout'
import portfolio from './data/portfolio'
import { Canvas } from '@react-three/fiber'
import React, {useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Portfolio, currentProjectAtom } from './Portfolio/Portfolio'
import { OrbitControls } from '@react-three/drei'

const BUTTONSTYLES = {
  border: "none",
  background: "none",
  color: "white",
  marginBottom: "-20px",
  fontSize: "1.5rem",
}



const App = () => {  
  

  // const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)
  
  // const nextProject = () => {
  //   setCurrentProject((currentProject + 1) % portfolio.length)
  // }

  // const prevProject = () => {
  //   setCurrentProject((currentProject - 1 + portfolio.length) % portfolio.length)
  // }



  return (
    <div className='Canvas_Container'>

    <Canvas flat linear> 
    <OrbitControls/>
      <pointLight position={[0,1,0]} intensity={1.5}/>
      <pointLight position={[8,1,0]} intensity={1.5}/>

      <group>
         <mesh position={[0,0,0]} scale={0.5}>
           <sphereGeometry  />
          <meshStandardMaterial color={'yellow'} />
        </mesh>
        <mesh position={[2,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh position={[4,0,0]} scale={0.5}>
          <sphereGeometry  />
          <meshStandardMaterial color={'blue'} />
        </mesh>
        <mesh position={[6,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'pink'} />
        </mesh>
        <mesh position={[8,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'lime'} />
        </mesh>
        <mesh position={[10,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'teal'} />
        </mesh>
        <mesh position={[12,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'purple'} />
        </mesh>
        <mesh position={[14,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'green'} />
        </mesh>
        <mesh position={[16,0,0]} scale={0.5}>
          <sphereGeometry />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      </group>
    </Canvas>
    </div>
  )
}

export default App