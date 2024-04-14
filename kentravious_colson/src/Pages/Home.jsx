import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>

    <div className='homepage_container'>
    <div className='image_div_Container'><img className='hero_image' src='/public/images/portfolio_pic.png'/></div>

    <div className='hero_content_container'>

    <div className='rich_text_containter'><h1 className='intro_text' id='intro'>Hey there! <br/>I'm Kentravious </h1></div>

    <div className='text_container'>
    <div ><p className='rich_text_subtitle'>Creative Developer</p></div>
    <div ><p className='rich_text_summary'>As a Creative Frontend Web Dev with 4 years of freelancing experience, I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful.</p></div>
    </div>
    
    <div className='links_container'>

       <NavLink className='link_text' to='resume'><div id='blue_circle' className='circle_btn'>Resume</div></NavLink>
      <NavLink className='link_text' to='projects'><div id='yellow_circle' className='circle_btn'>Projects</div></NavLink>
      <NavLink className='link_text' to='contact'> <div id='red_circle' className='circle_btn'>Contact</div></NavLink>
    </div>
    </div>
  </div>
    </div>
  
  )
}

export default Home