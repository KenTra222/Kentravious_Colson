import Form from './Form/Form'
import { useAtom } from 'jotai'
import Intro from './Intro/Intro'
import About from './About/About'
import Layout from './Layout/Layout'
import portfolio from './data/portfolio'
import { Canvas } from '@react-three/fiber'
import React, {useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Portfolio, currentProjectAtom } from './Portfolio/Portfolio'

const BUTTONSTYLES = {
  border: "none",
  background: "none",
  color: "white",
  marginBottom: "-20px",
  fontSize: "1.5rem",
}



const App = () => {  
  

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)
  
  const nextProject = () => {
    setCurrentProject((currentProject + 1) % portfolio.length)
  }

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + portfolio.length) % portfolio.length)
  }



  return (
    <Router>
      <Layout>
      <section id='intro' className='section' >

      <article className='article_intro'>

        <Canvas  flat linear>

      <Intro/>
        </Canvas>
      </article>
      </section>
      
      <About/>
      <Portfolio/>

     <article className='projectBtn_div'>
      <button className='btn' onClick={prevProject}>
        prev
      </button>
  <span>Projects</span>
      <button className='btn' onClick={nextProject}>
        next
      </button>
     </article>


      <Form/>
      </Layout>
    </Router>
  )
}

export default App