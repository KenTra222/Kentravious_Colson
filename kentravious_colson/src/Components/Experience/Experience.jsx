import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {  useGLTF, Trail } from '@react-three/drei';
import * as THREE from 'three';


const Experience = (props) => {
  
    
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')

    const ref = useRef();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [lastMouseMoveTime, setLastMouseMoveTime] = useState(Date.now());

    const updateMousePos = (event) => {
        setMousePos({
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1,
        });
        setLastMouseMoveTime(Date.now());
      };;

      // Add event listener for mouse movement
    useEffect(() => {
        window.addEventListener('mousemove', updateMousePos);
        return () => {
        window.removeEventListener('mousemove', updateMousePos);
        };
    }, []);
    useFrame(({ clock }) => {
        const timeSinceLastMove = Date.now() - lastMouseMoveTime;
        const moveSpeed = 0.00001; // Adjust this to control how fast the object moves
        const moveAmount = Math.min(timeSinceLastMove * moveSpeed, 1);
        const newX = ref.current.position.x + mousePos.x * moveAmount;
        const newY = ref.current.position.y + mousePos.y * moveAmount;
        ref.current.position.x = newX;
        ref.current.position.y = newY;
        const lookAtVector = new THREE.Vector3(mousePos.x, mousePos.y, 0.5);
        ref.current.lookAt(lookAtVector);
      });

      
      

  return (
    <> 
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Trail
      width={0.8} // Width of the line
      color={'#57cbff'} // Color of the line
      length={6} // Length of the line
      decay={1} // How fast the line fades away

      stride={0} // Min distance between previous and current point
      interval={1} // Number of frames to wait before next calculation

      attenuation={(width) => width} // A function to define the width in each point along it.
    >

      <primitive  object={scene} ref={ref} {...props} position={[0, 18, -20]}  />
    </Trail>
    </>

  )
}

export default Experience


 
 