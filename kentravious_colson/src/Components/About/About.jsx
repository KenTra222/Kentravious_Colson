import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import './about.scss'
import Experience from '../Experience/Experience.jsx'
import { Canvas } from "@react-three/fiber";
const About = () => {
  return (<>
    <section id='about' className='section'>
        <h2 className='section_header'><span>01. </span> <span>All About Me!</span></h2>

         <div className='aboutContent_wrapper'> 
         <p>

         Hello! My name is Kentravious and I'm a passionate creator who loves to build things on the internet. My journey started in 2020 while I was working at a car shop and watching YouTube videos. As it turned out, I really enjoyed learning how to talk to computers, and that sparked my interest in making technology a main factor in my life.
         </p>
        <br/>

        <p>
        Since then, my passion for tech has continued to grow and evolve, and I'm always striving to stay up to date with the latest software and tools. Recently, I completed the Google IT Support course to further improve my knowledge and skills.
        </p>
        <br/>
        <p>
        In addition to my love for technology, I also have a passion for 3D animation, and I enjoy creating unique and engaging designs using Blender. You can check out some of my work on my portfolio.
        </p>
        <br/>
        <p>
        Currently, I work remotely with a select group of freelance clients, but I'm always open to new opportunities and challenges. If you have a project you'd like to collaborate on, feel free to reach out to me.
        </p>
            </div>    
                
    </section>
    <Canvas>


      <Experience/>
    </Canvas>
  </>
   
  )
}

export default About