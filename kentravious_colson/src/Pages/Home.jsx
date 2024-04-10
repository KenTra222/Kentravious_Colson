import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>

    <div className='homepage_container'>
    <div className='image_div_Container'></div>

    <div className='hero_content_container'>

    <div className='rich_text_containter'><h1>Hey there! <br/> I'm Kentravious</h1></div>

    <div className='text_container'>
    <div ><p className='rich_text_subtitle'>Summary</p></div>
    <div ><p className='rich_text_summary'>As a Creative Frontend Web Dev with 4 years of freelancing experience, I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful.</p></div>
    </div>
    
    <div className='links_container'>

      <div id='blue_circle' className='circle_btn'><p  className='cirle_red'><NavLink to='resume'>Resume</NavLink></p></div>
      <div id='yellow_circle' className='circle_btn'><p  className='cirle_blue'><NavLink to='projects'>Projects</NavLink></p></div>
      <div id='red_circle' className='circle_btn'><p  className='cirle_yellow'><NavLink to='contact'>Contact</NavLink></p></div>
    </div>
    </div>
  </div>
    </div>
  
  )
}

export default Home