import React from 'react'
import { motion  } from "framer-motion"
import './intro.scss'
 

const Intro = () => {
  return (
    <section id='intro' className='section' >
    
            
            <div className='intro_contents'  >
              <div>
                <div className='small'>
                  Hi, my name is
                </div>
                <div>
                <h1> 
                <motion.div
                    initial={{y: 1000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.5}}
                    >
                  <span>K</span>
                  <span>E</span>
                  <span>T</span>
                  <span>R</span>
                  <span>A</span>
                  <span>V</span>
                  <span>I</span>
                  <span>O</span>
                  <span>U</span>
                  <span>S</span>
                  <br/>
                 

                  <span>C</span>
                  <span>O</span>
                  <span>L</span>
                  <span>S</span>
                  <span>O</span>
                  <span>N</span>
                  <br/>
                

                  <span className='diff_color'>W</span>
                  <span className='diff_color'>E</span>
                  <span className='diff_color'>B</span>
                  <span className='diff_color'> </span>
                  <span className='diff_color'>D</span>
                  <span className='diff_color'>E</span>
                  <span className='diff_color'>V</span>
                    </motion.div>
            
                </h1>
                </div>
                <div>
                  <p>Frontend Developer | Creative Artist </p>
                </div>
                
              </div>
            </div>
    
          </section>
  )
}

export default Intro