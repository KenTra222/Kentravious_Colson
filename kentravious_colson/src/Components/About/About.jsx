import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import './about.scss'
import Experience from '../Experience/Experience.jsx'
import { Canvas } from "@react-three/fiber";
const About = () => {
  return (<>
    <section id='about' className='section'>
        <h2 className='section_header'> 01.   <span>All About Me!</span></h2>

         <div className='aboutContent_wrapper'> 
         <div className='bio_img_wrapper'>
         </div>
         
         <div className='bio_text'>

        
         <p>
         I'm a passionate creator who loves to build things on the internet. My journey started in 2020 while I was working at a car shop watching YouTube videos. As it turned out, I really enjoyed learning how to talk to computers, and that sparked my interest in making technology a main factor in my life.
        <br/>
        <br/>
         Since then, my passion for tech has continued to grow and evolve, and I'm always striving to stay up to date with the latest software and tools. Recently, I completed the Three.js course to further improve my knowledge and skills.
        <br/>
        <br/>
        In addition to my love for technology, I also have a passion for 3D animation, and I enjoy creating unique and engaging designs using Blender. You can check out some of my work on my portfolio.
        <br/>
        <br/>
        Currently, I work remotely with a select group of freelance clients, but I'm always open to new opportunities and challenges. If you have a project you'd like to collaborate on, feel free to reach out to me.
        </p>
        </div>
        </div>    
                
    </section>
    
  </>
   
  )
}

export default About