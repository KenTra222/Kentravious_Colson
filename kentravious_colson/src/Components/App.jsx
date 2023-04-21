import React, {useRef, useState, useEffect } from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {Footer} from './Footer/Footer'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
import Experience from './Experience/Experience'
import { Canvas } from '@react-three/fiber'



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

          {/* header*/}
          <Header/>
        <main>
     
          {/*intro*/}
           <Intro  /> 

          {/*experience*/}
          <Canvas className='canvas' 
            style={{ 
              backgroundColor: 'none',
              left:'0', 
              position: "absolute",
              zindex: "-100",
              width: "100vw",
              height: "150svh" }}>
            <Experience/>
          </Canvas>

          {/*About*/}
          <About/>

          {/*projects*/}
          <Portfolio />

          {/*Form*/}
          <Form  />
        </main>
         <Footer/>
    </div> 
    </Router>
  )
}

export default App