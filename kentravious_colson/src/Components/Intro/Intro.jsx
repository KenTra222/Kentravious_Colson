import {useRef} from 'react'
import { motion  } from "framer-motion"
import './intro.scss'
 import {HiOutlineArrowSmDown } from 'react-icons/hi'
 import { Canvas } from '@react-three/fiber'
 import { Text, Float, useCubeTexture} from '@react-three/drei'


const Intro = (props) => {
  return (
    <section id='intro' className='section' >
      <article>
        <Canvas color='black' attach flat linear>
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

          <mesh scale={0.7} position={[0,-1,0]} rotation={[0,0, Math.PI * 1]}>
            <coneGeometry />
             <meshBasicMaterial color={"red"} />
          
          </mesh>
          
          </Float>
        </Canvas>
      </article>
     </section>
  )
}

export default Intro

