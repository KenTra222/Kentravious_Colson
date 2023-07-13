import React, {useRef} from 'react'
import portfolio from "../data/portfolio.js"
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import './portfolio.scss'
import {Canvas} from '@react-three/fiber'
import { Center, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import {motion} from 'framer-motion-3d'
import { atom, useAtom } from 'jotai'


export const currentProjectAtom = atom(Math.floor(portfolio.length / 2))



export const Portfolio = () => {

  const [currentProject] = useAtom(currentProjectAtom)


 
  return (
    <section id='projects' className='section' >
        <h2 className='section_header'>.03<span>My Recent Projects!</span></h2>           
              
    <div className='portfolio_wrapper'>
        <Canvas>
          <PerspectiveCamera position={[6, -1, 6]}>

              <Center>
              {portfolio.map((project, id) => (
                <motion.group 
                key={project.id} 
                position={[id * 2.5, 0, 2]}
                animate={{
                  x: 0 + (id - currentProject) * 2.5,
                  y: currentProject === id ? 0 : -0.1,
                  z: currentProject === id ? -2 : -3,
                  rotateX: currentProject === id ? 0 : -Math.PI /  3,
                  rotatez: currentProject === id ? 0 : -0.2 * Math.PI
                  
                }}
                
                transition={{type: "ease-out",  duration: 3.5 }}>
                <PortfolioItem
                  
                  imgUrl={project.imgUrl}
                  title={project.title.toUpperCase()}
                  link={project.link}
                  description={project.description}
                  highlighted={id===currentProject}
                  />           
            </motion.group>
                ))}
          
                </Center>
                  </PerspectiveCamera>
            
        </Canvas>

        
    </div>
    
          </section>
            
  )
}
