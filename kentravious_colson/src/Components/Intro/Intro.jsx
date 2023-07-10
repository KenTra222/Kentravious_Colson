import {useRef} from 'react'
import { motion  } from "framer-motion"
import './intro.scss'
 import {HiOutlineArrowSmDown } from 'react-icons/hi'
 import { Canvas } from '@react-three/fiber'
 import { Text, Float, useFBX, OrbitControls} from '@react-three/drei'


const Intro = (props) => {

  let delorean = useFBX('/public/assets/models/DeLorean.FBX')

  return (
    <section id='intro' className='section' >
      <article>
        <Canvas  flat linear>
        <ambientLight intensity={1} position={[0,4,0]}/>
        {/* <OrbitControls/> */}

          <Text position={[0, 3, -1]}>
            Kentravious Colson
          </Text>

          <Text position={[0, 2, -2]}>
            Creative Developer
          </Text>

          <Text position={[0, 1, -4]}>
            From ideation to implementaion, giving life to your creations
          </Text>

          <Float>

          <primitive 
            object={delorean} 
            position={[0, -8, -25]}
            rotation={[0, Math.PI * 0.25, 0]} 
            scale={0.05}/>
          
          </Float>
        </Canvas>
      </article>
     </section>
  )
}

export default Intro

