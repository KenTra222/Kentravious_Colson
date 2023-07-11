import './header.scss'
import React, {useState, useEffect} from 'react'
import NavItems from '../NavItems/NavItems';
import Modal from '../Modal/Modal';
import {CgMenuMotion} from 'react-icons/cg'
import {motion} from 'framer-motion'


const   HAMBURGER_BUTTON_STYLES = {
  color: ' #64ffda',
  border: 'none',
  background: 'none',
  }

export const Header = (...props) => {
    const [isOpen, setIsOpen] = useState(false) 
    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }
       
  return (
    <div>      
        <div className='header' >
    <div className='header-items'>

      <div className='header-left'>
        

        <span className='logo-text'>KColson</span>
        <small>web Developer</small>
      </div>

 
      <div className='header-right'>
          <button className='hamburger_menu' style={HAMBURGER_BUTTON_STYLES} onClick={toggleModal}>
            <CgMenuMotion />
          </button>
      <NavItems className='menu'/>
      </div>
      </div>
       
    </div>   

      <Modal isOpen={isOpen} onClose={toggleModal}>
  
      </Modal>
        </div>
        
  )
}
