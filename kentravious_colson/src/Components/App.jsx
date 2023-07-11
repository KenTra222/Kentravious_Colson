import React, {useRef, useState, useEffect } from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'

import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {Footer} from './Footer/Footer'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
  
import { Canvas } from '@react-three/fiber'
import { Testimonial } from './Testimonials/Testimonial'
import Layout from './Layout/Layout'



const App = () => {  
  const [isLoading, setIsLoading] = useState(true);

  
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
      <Form/>
      </Layout>
    </Router>
  )
}

export default App