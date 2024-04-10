 
import React, {useState, useEffect} from 'react'
 
 import { Link, NavLink } from 'react-router-dom'

 

export const Header = (...props) => {
    
    
       
  return (
    <header className='header'> 
    {/* header */}
    <div className='title_wrapper'>
      <div className='title_ball'></div>
      <div className=''><p><Link className='title' to='/'>Kentravious Colson</Link></p></div>
    </div>    
  {/* navbar */}
    <nav className='nav_bar'>
      <ul className='menu'>
        
          <li className='menu_item'><NavLink to='resume'>Resume</NavLink></li>
          <li className='menu_item'><NavLink to='projects'>Projects</NavLink></li>
          <li className='menu_item'><NavLink to='portfolio'>Gallery</NavLink></li>
          <li className='menu_item'><NavLink to='services'>Services</NavLink></li>
          <li className='menu_item'><NavLink to='contact'>Contact</NavLink></li>

      </ul>
    </nav>
  </header>
        
  )
}
