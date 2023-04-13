import React,{useRef} from 'react'
import { Typewriter } from "react-simple-typewriter"
import './about.scss'
import { useInView } from 'framer-motion'


const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
 
  return (
  
    <section id='about' className='section' ref={ref}
     style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <h2 className='section_header'> 01.   <span>All About Me!</span></h2>
         
         <div className='aboutContent_wrapper'> 
         <div className='bio_img_wrapper'>
         </div>
         
         <div className='bio_text'>

        
   
        "I'm a self-taught <span className='dev_text'>Frontend Developer</span> with a passion for creating exceptional digital experiences using design systems and programming languages. My journey in tech started in 2020 while I was working at a car shop and discovered my love for learning how to talk to computers through watching YouTube videos.
        <br/>
        <br/>
        Since then, I've been on a mission to stay up-to-date with the latest software and tools, completing the Three.js course to further improve my knowledge and skills. I also have a strong interest in 3D animation and love using Blender to create unique and engaging designs.
        <br/>
        <br/>
        Currently, I work remotely with a select group of freelance clients, but I'm always open to new opportunities and challenges. If you have a project you'd like to collaborate on, please feel free to reach out to me. You can check out some of my work on my portfolio."
        </div>
        </div>    
                
    </section>
 
   
  )
}

export default About