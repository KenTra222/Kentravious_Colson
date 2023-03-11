import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import './about.scss'
const About = () => {
  return (
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
   
  )
}

export default About