import React from 'react'
import { motion  } from "framer-motion"
import './intro.scss'
 import {HiOutlineArrowSmDown } from 'react-icons/hi'

const Intro = () => {
  return (
    <section id='intro' className='section' >
    
            
            <div className='intro_contents'  >
              <div>
              <motion.div
                    initial={{  opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{duration: 2}}
                    >
                       <div className='small'>
                        Hi, my name is
                      </div>
                    </motion.div>
               
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
                
                  </motion.div>
                  <motion.div
                    initial={{y: 1000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.85}}
                    >
                    
                  <span className='diff_color'>WEB DEV</span>
             

                  </motion.div>
            
                </h1>

                </div>

                <br/>
                <motion.div
                    initial={{y: 1000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 3.85}}
                    >
                      <div>
                      <p> "I am a frontend developer who is passionate about crafting visually stunning and intuitive digital experiences. With expertise in React, Three.js, and UX design, I am self-taught and constantly seeking to expand my skill set. Currently, I am focused on building high-quality, responsive websites using Wix."</p>
                    </div>
                    </motion.div>
                
                
              </div>
              <motion.div
                    initial={{  opacity: 0}}
                    animate={{  opacity:[0,0.2,1] }}
                    transition={{duration: 10}}
                    >

                   
          <span className='scroll'>
            
            <span className='letterTurn'>
            S
            </span>
            <span className='letterTurn'>
            C
            </span>
            <span className='letterTurn'>
            R
            </span>
            <span className='letterTurn'>
            O
            </span>
            <span className='letterTurn'>
            L
            </span>
            <span className='letterTurn'>
            L
            </span>
            <span className='letterTurn'>
            </span>
            <span className='letterTurn'>
            D
            </span>
            <span className='letterTurn'>
            O
            </span>
            <span className='letterTurn'>
            W
            </span>
            <span className='letterTurn'>
            N
            </span>
            <span className='arrow'>
              <HiOutlineArrowSmDown/>

            </span>
            </span>
       
            <span className='scroll2'>
            <span className='letterTurn'>
            S
            </span>
            <span className='letterTurn'>
            C
            </span>
            <span className='letterTurn'>
            R
            </span>
            <span className='letterTurn'>
            O
            </span>
            <span className='letterTurn'>
            L
            </span>
            <span className='letterTurn'>
            L
            </span>
            <span className='letterTurn'>
            </span>
            <span className='letterTurn'>
            D
            </span>
            <span className='letterTurn'>
            O
            </span>
            <span className='letterTurn'>
            W
            </span>
            <span className='letterTurn'>
            N
            </span>
            <span className='arrow'>
              <HiOutlineArrowSmDown/>

            </span>
            </span>
            </motion.div>

            </div>
          </section>
  )
}

export default Intro