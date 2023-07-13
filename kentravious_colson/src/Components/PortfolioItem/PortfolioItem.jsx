import React, { useEffect, useRef } from 'react'
import './portfolioItem.scss'
import {useFrame, useThree} from '@react-three/fiber'
import {Image, Text} from '@react-three/drei'
import { useMotionValue,  animate  } from "framer-motion"
 


 
export const PortfolioItem = ({id, title, imgUrl, link,  description, props, highlighted }) => {
  const viewport = useThree()

  const background = useRef()
  const bgOpacity = useMotionValue(0.4)
  

  useEffect(() => {
   animate(bgOpacity, highlighted ? 0.9 : 0.4)
  }, [highlighted])

  useFrame(()=>{
     background.current.material.opacity = bgOpacity.get()
  })
  

  return (
    
      <group {...props} >
          <mesh position-z={-0.01} onClick={() => window.open(link, "blank")} ref={background}>
            <planeGeometry args={[2.2, 3]}/>
            <meshBasicMaterial color={'black'} transparent opacity={0.5} toneMapped={false}/>
          </mesh>
          <Image scale={[2, 1.2, 2]} url={imgUrl} position-y={0.8}/>
          <Text maxWidth={2} anchorX={'left'} anchorY={'top'} fontSize={0.2} position={[-1, 0,0]}>
            {title}
          </Text>
          <Text maxWidth={2} anchorX={'left'} anchorY={'top'} fontSize={0.1} position={[-1, -0.5,0]}>
            {description}
          </Text>

      </group>
     
  )
}
