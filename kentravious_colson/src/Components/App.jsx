import React, {useRef} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {AiOutlineDown} from 'react-icons/ai'
 
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
          <section id='whyMe' className='section'>
              <h2>Why Me?</h2>           
              <div className='whyme_wrapper'> 
              <ul className='whyList'>
                <li>
                  <p>Firstly, I have customer relations experience which gives me an understanding of the needs and desires of your target audience to create products that will resonate with them. allowing me to be able to conduct effective market research, gather customer feedback, and incorporate that feedback into the product development process. This can lead to products that are more likely to succeed in the marketplace.
                  </p>
                </li>

                <li>
                  <p>Secondly, 3D modeling skills are increasingly important in product development. 3D modeling allows me to create detailed, accurate models of products before they are built, which can save time and resources in the development process.  also allowing me to create virtual prototypes that can be tested and refined before moving to the production stage.
                  </p>
                </li>

                <li>
                  <p>Finally, a product developer with both customer relations experience and 3D modeling skills can bring a unique perspective to the product development process. allowing me to consider both the customer's perspective and the technical requirements of the product, leading to products that are both user-friendly and technically sound.
                  </p>
                </li>
                <li>
                  <p>Overall, I can help your organization create products that are more likely to succeed in the marketplace, while also saving time and resources in the development process.
                  </p>
                </li>

              </ul>
            

            </div>    
    </section>

          <Form  />
          <p className='scrollArrow'> <AiOutlineDown/></p>
        </main>
    </div> 
    </Router>
  )
}

export default App