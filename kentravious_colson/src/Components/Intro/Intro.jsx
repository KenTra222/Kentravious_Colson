import React from 'react'
import { motion  } from "framer-motion"
import './intro.scss'

const Intro = () => {
  return (
    <section id='intro' className='section'>
    <motion.div
            initial={{ opacity: 0,  }}
            animate={{  opacity: 1,   }}
            transition={{ duration: 0.75 }}
          >
            
            <div className='intro_contents'>
              <div>
                <h1>{`<Kentravious Colson/>`}</h1>
                <p>Creative Product Developer</p>
                <p className='small'> 
                Designing and Building digital assets for small businesses
                </p>
              </div>
            </div>
          </motion.div>
          </section>
  )
}

export default Intro