import React, {useRef, useState, useEffect } from 'react'
    
const App = () => {  
  
  return (

    <div className='Container'>
      {/* header */}
        <header className='header'> 
          <div className='title_wrapper'>
            <div className='title_ball'></div>
            <div className='title'><p><a>Kentravious Colson</a></p></div>
          </div>    
        {/* navbar */}
          <nav className='nav_bar'>
            <ul className='menu'>
                <li className='menu_item'><a>resume </a></li>
                <li className='menu_item'><a>projects</a></li>
                <li className='menu_item'><a>about</a></li>
                <li className='menu_item'><a>services</a></li>
                <li className='menu_item'><a>contact</a></li>
            </ul>
          </nav>
        </header>

      {/* main */}
        <main>
          <div className='homepage_container'>
            <div className='image_div_Container'></div>

            <div className='hero_content_container'>

            <div className='rich_text_containter'><h1>Hey <br/>there!</h1></div>
            <div className='rich_text_containter'><p>Summary</p></div>
            <div className='rich_text_containter'><p>As a Creative Frontend Web Dev with 4 years of freelancing experience, I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful.</p></div>
            
            <div className='links_container'>

              <div className='circle_btn'><p><a>Resume</a></p></div>
              <div className='circle_btn'><p><a>Projects</a></p></div>
              <div className='circle_btn'><p><a>Contact</a></p></div>
            </div>
            </div>


          </div>
        </main>

        {/* footer */}
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