import React from 'react'
import { motion  } from "framer-motion"
import './intro.scss'

const Intro = () => {
  return (
    <section id='intro' className='section'>
    
            
            <div className='intro_contents'>
              <div>
                <div className='small'>
                  Hi, my name is 
                </div>
                <div>
                <h1>{`Kentravious Colson`}</h1>
                </div>
                <div>
                  <p>Creative Frontend Developer</p>
                </div>
                <p className='intro_text'> 
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </p>
              </div>
            </div>
    
          </section>
  )
}

export default Intro