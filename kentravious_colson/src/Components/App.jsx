
import { Canvas } from '@react-three/fiber'
import React, {useRef, useState, useEffect } from 'react'
    
const App = () => {  
  
  
  return (
    <div className='Container'>
        <header className=''> 
          <div className='title_wrapper'>
            <div>ball</div>
            <div><p><span><a>Kentravious Colson</a></span></p></div>
          </div>

          <div>
            <ul>
              <li><div><a><p>resume</p></a></div></li>
              <li><div><a><p>projects</p></a></div></li>
              <li><div><a><p>about</p></a></div></li>
              <li><div><a><p>services</p></a></div></li>
              <li><div><a><p>contact</p></a></div></li>

            </ul>
          </div>
        </header>

        <main>
          <div className='homepage_container'>
            <div className='image_div_Container'></div>
            <div className='rich_text_containter'><h1>Hey There!</h1></div>
            <div className='rich_text_containter'><p>Summary</p></div>
            <div className='rich_text_containter'><p>As a Creative Frontend Web Dev with 4 years of freelancing experience, I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful.</p></div>

            <div className='circle_btn'><p><a>Resume</a></p></div>
            <div className='circle_btn'><p><a>Projects</a></p></div>
            <div className='circle_btn'><p><a>Contact</a></p></div>


          </div>
        </main>

        <footer>
          <div>
            <p>
            Phone
            </p>
            <p>
            4787443006
            </p>
          </div>
          <div>
          <p>
            Email
            </p>
            <p>
            kentraviousc@gmail.com
            </p>
          </div>
          <div>
          <p>
            social links
            </p>
            <p>
            linkedin
            </p>
          </div>
          <div>
            Developed by Kentravious Colson @2023
          </div>
        </footer>
    </div>
  )
}

export default App