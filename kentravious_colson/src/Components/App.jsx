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
import TextSphere from './Experience/TextSphere'


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
{/* 
      <Experience/> */}
          <Header/>
        <main>
     
      {/*intro*/}
          <Intro  /> 
          <About/>
         
          <div style={{ height: "500px", width: "500px", margin: '0 auto', background: "none" }}>
            <TextSphere />
          </div>
       


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