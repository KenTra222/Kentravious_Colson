 
import React, {useState, useEffect} from 'react'
 import { Link, NavLink } from 'react-router-dom'
import './header.scss'
 

export const Header = (...props) => {
    
    
       
  return (
    <header className='header'> 
    {/* header */}
    <div className='title_wrapper'>
      <div className='title_ball'></div>
      <div className=''><Link className='title' to='/'>Kentravious Colson</Link></div>
    </div>    
  {/* navbar */}
    <nav className='nav_bar'>
      <ul className='menu'>
        
          <li className='menu_item'><NavLink className='nav_item' to='resume'>Resume</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='projects'>Projects</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='portfolio'>Gallery</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='contact'>Contact</NavLink></li>

      </ul>
    </nav>
  </header>
        
  )
}
