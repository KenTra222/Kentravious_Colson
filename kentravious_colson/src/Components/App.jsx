import React, {useRef, useState, useEffect } from 'react'
import Form from './Form/Form'
import { Portfolio, currentProjectAtom } from './Portfolio/Portfolio'

import About from './About/About'
import Intro from './Intro/Intro'

import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
  
import { Testimonial } from './Testimonials/Testimonial'
import Layout from './Layout/Layout'
import Gallery from './Gallery/Gallery'
import { useAtom } from 'jotai'
import portfolio from './data/portfolio'
import {GrFormPreviousLink, GrFormNextLink} from 'react-icons/gr'

const BUTTONSTYLES = {
  
}



const App = () => {  
  const [isLoading, setIsLoading] = useState(true);

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)
  
  const nextProject = () => {
    setCurrentProject((currentProject + 1) % portfolio.length)
  }

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + portfolio.length) % portfolio.length)
  }

  
  useEffect(() => {
    // Do some asynchronous work here
    setIsLoading(false);
  }, []);

  return (
    <Router>
      <Layout>

      <Intro/>
      
      <About/>
      <Portfolio/>

      <section>
        <button className='btn' onClick={prevProject}>
        
          prev
        </button>
        <button className='btn' onClick={nextProject}>

          next
    
        </button>
      </section>

      {/* <Gallery/> */}
      <Form/>
      </Layout>
    </Router>
  )
}

export default App