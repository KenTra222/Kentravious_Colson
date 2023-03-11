import React, {useRef} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
 
const App = () => {
    
  return (
    <Router>

    <div  className='App-Wrapper'>  
            
           
          
          <Header/>
    <main>
     
      {/*intro*/}
          <Intro  /> 
  
          {/*projects*/}
          <Portfolio />
 
          <About  />

          <Form  />
          <p className='scrollText'> scroll down</p>
        </main>
    </div> 
    </Router>
  )
}

export default App