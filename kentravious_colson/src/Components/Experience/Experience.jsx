import React from "react";

import { OrbitControls, useTexture, useGLTF } from '@react-three/drei'
 
function Experience() {

  const  {nodes} = useGLTF(' ./assets/model/kingkai.glb')
 const bakedTexture = useTexture('./assets/model/kingKaiTexture.jpg')
 bakedTexture.flipY = false
 
  return (
    <>
       <color  args={ [ '#0a192f'] } attach="background"/>
      <OrbitControls/>
  
      <mesh geometry={ nodes.baked.geometry }>
         <meshBasicMaterial  map={bakedTexture} />
      </mesh>    
    </>
  );
}

export default Experience;


