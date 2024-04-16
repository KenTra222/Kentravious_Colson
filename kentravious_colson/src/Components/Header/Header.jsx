 
import React, {useState, useEffect} from 'react'
 import { Link, NavLink } from 'react-router-dom'
import './header.scss'
 

export const Header = (...props) => {
    
    // to change burger classes 
    const[burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
      if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
      }
      else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
    }
       
  return (
    <header className='header'> 
    {/* header */}
    <div className='title_wrapper'>
      <div className='title_ball'></div>
      <Link className='title' to='/'>Kentravious Colson</Link>
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

    <nav className='mobile_bar'>
        <div className="burger-menu" onClick={updateMenu}> 
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class}  ></div>
        </div>
    </nav>

    <div className={menu_class}> 
      <ul className='mobile_menu' >
          <li className='menu_item'><NavLink  className='nav_item' to='resume' onClick={updateMenu} >Resume</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='projects' onClick={updateMenu} >Projects</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='portfolio' onClick={updateMenu} >Gallery</NavLink></li>
          <li className='menu_item'><NavLink className='nav_item' to='contact' onClick={updateMenu} >Contact</NavLink></li>
      </ul>
    </div>
    
  </header>
        
  )
}
