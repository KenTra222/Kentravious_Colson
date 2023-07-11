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

          <Text position={[0, 2.7, -1]}>
            Kentravious Colson
          </Text>

          <Text position={[0, 1.7, -2]}>
            Creative Developer
          </Text>
          <group>

          <Text position={[-20, -8.7, -14]}>
            From  
          </Text>
          <Text position={[-16, -6.7, -14]}>
             ideation  
          </Text>
          <Text position={[-12, -4.7, -14]}>
             to  
          </Text>
          <Text position={[-8, 0.7, -14]}>
             implementaion, 
          </Text>
          <Text position={[2, 0.7, -14]}>
            giving  
          </Text>
          <Text position={[10, -1.7, -14]}>
             life  
          </Text>
          <Text position={[14, -3.7, -14]}>
             to  
          </Text>
          <Text position={[17, -4.7, -14]}>
             your  
          </Text>
          <Text position={[20, -8.7, -14]}>
             creations
          </Text>
          </group>

      

         <Avatar/>
          
        </Canvas>
      </article>
     </section>
  )
}

export default Intro

