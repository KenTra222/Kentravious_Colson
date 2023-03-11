import React, {useState, useEffect} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import { motion,  } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
 

const MainBody = () => {
  
  return (
    <main>
      {/*intro*/}
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{  opacity: 1,  }}
            transition={{ duration: 0.75 }}
          >
          <section id='intro' className='section'>

            <div className='intro_contents'>
              <div>
                <h1>{`<Kentravious Colson/>`}</h1>
                <p>Creative Product Developer</p>
                <p className='small'> 
                Designing and Building digital assets for small businesses
                </p>
              </div>
            </div>
          </section>
          </motion.div>
         

          
          {/*projects*/}
          <section id='work' className='section'>
              <h2>MY PROJECTS</h2>
                <Portfolio/>
          </section>

          {/*about*/}
          <section id='about' className='section'>
              <h2>ABOUT ME!</h2> 
                    <div className='aboutContent_wrapper'> 
                      <p>Hi I'm..</p>
                        <span>
                    <Typewriter
                    words={['Kentravious Colson', 'Yung Grilled Cheese', 'The Sunshine Kid', "It's Ya boy!!!", 'Kentravious Colson']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={3000}/>
                    </span>
                      <p>
                    If You're reading this then that means i didn't survive...Wait! wrong script....okay from the top!..I'm a Creative Product Developer (<span className='coolStuff'>I Make cool stuff on my laptop</span>). I have experience in multiple fields such as web design, project management, Computer Programming, 3D Modeling & etc to bring your ideas to life! 
                    </p>

                </div>                 
          </section>

          <section id='contact' className='section'>
          <h2>CONTACT ME</h2>
            <Form/>
          </section>
        </main>
  )
}

export default MainBody