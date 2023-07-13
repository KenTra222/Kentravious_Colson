import Form from './Form/Form'
import { useAtom } from 'jotai'
import Intro from './Intro/Intro'
import About from './About/About'
import Layout from './Layout/Layout'
import portfolio from './data/portfolio'
import React, {useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Portfolio, currentProjectAtom } from './Portfolio/Portfolio'

const BUTTONSTYLES = {

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

      <Intro/>
      
      <About/>
      <Portfolio/>

     <article>
      <button className='btn' onClick={prevProject}>
        prev
      </button>
  
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