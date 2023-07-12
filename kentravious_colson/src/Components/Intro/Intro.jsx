import {useRef} from 'react'
import { motion  } from "framer-motion"
import './intro.scss'
 import {HiOutlineArrowSmDown } from 'react-icons/hi'
 import { Canvas } from '@react-three/fiber'
 import { Text, Float,  OrbitControls} from '@react-three/drei'
import { Avatar } from '../Avatar/Avatar'


const Intro = (props) => {

  

  return (
    <section id='intro' className='section' >
      <article className='article_intro'>
        <Canvas  flat linear>
        <ambientLight intensity={1} position={[0,4,0]}/>
        {/* <OrbitControls/> */}

          <Text position={[-0, 2, -1]}>
            Kentravious Colson
          </Text>

          <Text position={[0, 1, -2]}>
            Creative Developer
          </Text>

          <group>

          <Text position={[-13, -4., -14]} >
            From ideation 
          </Text>
          <Text position={[-12, -5.25, -14]} >
            to implementaion 
          </Text>
          
          <Text position={[6, -4, -14]}>
            giving life 
          </Text>
         
          <Text position={[8, -5.25, -14]}>
             to your creations 
          </Text>
          </group>

      

         <Avatar/>
          
        </Canvas>
      </article>
     </section>
  )
}

export default Intro

