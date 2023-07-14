import {useRef} from 'react'

import './intro.scss'
 import {HiOutlineArrowSmDown } from 'react-icons/hi'
 import { Text, Float,  OrbitControls} from '@react-three/drei'
import { Avatar } from '../Avatar/Avatar'
import { useThree } from '@react-three/fiber'



const Intro = (props) => {

  const {viewport } = useThree()
  

  const isMobile = window.innerWidth < 768
  const responsiveRatio = viewport.width / 12

  return (
    
          <>
        <ambientLight intensity={1} position={[0,4,0]}/>
       

          <Text position={[0, isMobile? 10:  2, isMobile? -20 : -1]}
            fontSize={isMobile ? 2 : 1}>
            Kentravious Colson
          </Text>

          <Text position={[0, isMobile? 7.5:  1, isMobile? -18 :  -2]} fontSize={isMobile? 1.7 : 1}>
            Creative Developer
          </Text>

          <group>

          <Text position={[isMobile ? -7 : -13, isMobile? 5: -4., isMobile ? -25:  -14]} >
            From ideation 
          </Text>
          <Text position={[isMobile? -4 : -12,isMobile? 4: -5.25, isMobile? -25: -14]} >
            to implementaion 
          </Text>
          
          <Text position={[isMobile?4: 6,isMobile? 3: -4, isMobile? -25: -14]}>
            giving life 
          </Text>
         
          <Text position={[isMobile? 7.5: 8, isMobile? 2: -5.25,isMobile? -25: -14]}>
             to your creations 
          </Text>
          </group>   

         <Avatar  />
       
          
          </>
    
  )
}

export default Intro

