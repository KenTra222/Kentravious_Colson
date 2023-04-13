import React, {useRef, useState, useEffect } from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa'
import {Footer} from './Footer/Footer'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
import Timeline from './Timeline/Timeline'


const App = () => {  
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Do some asynchronous work here
    setIsLoading(false);
  }, []);

  return (
    <Router>
    <div  className='App-Wrapper'>  
      <LoadingScreen isLoading={isLoading} />

          <Header/>
        <main>
     
      {/*intro*/}
          <Intro  /> 
          <About/>
  

          {/*projects*/}
          <Portfolio />
 
          

          <Form  />

         <Footer/>
         
        </main>
    </div> 
    </Router>
  )
}

export default App