import './header.scss'
import React, {useState, useEffect} from 'react'
import NavItems from '../NavItems/NavItems';
import Modal from '../Modal/Modal';
import {CgMenuMotion} from 'react-icons/cg'
import {motion} from 'framer-motion'
import MobileItems from '../NavItems/MobileItems';

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
        <motion.div
          animate={{
            x: [0, 40, 80, 120, 160, 200, 240, 280, 0],
            y:[-1,1,-1,1,-1,1,-1,1,-1,1,-1,1, 0],
            rotate: [0, 90, 180,270, 360,450, 540,630, 0  ],
            }}         
          transition={{ 
            type: 'spring', 
            damping: 0, 
            stiffness: 800, 
            duration: 6, 
            delay: 2}}>
          {/* <FaPlaceOfWorship 
            color='#64ffda'/> */}
            K
        </motion.div>

        <span className='logo-text'>Colson</span>
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
            <MobileItems/>
      </Modal>
        </div>
        
  )
}
