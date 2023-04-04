import './header.scss'
import React, {useState, useEffect} from 'react'
import NavItems from '../NavItems/NavItems';
import Modal from '../Modal/Modal';
import { FaPlaceOfWorship, FaBars } from "react-icons/fa";
import {CgMenuMotion} from 'react-icons/cg'
import {Canvas} from '@react-three/fiber'
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
        <motion.div
          animate={{
            x: [0, 0, 100, 100,100, 100, 0, 0],
            y:[-1,1,-1,1,-1,1,-1,1,-1,1,-1,1, 0],
            rotate: [0, 90, 90,90, 90,180,180, 180, 270, 270,270,360, ],
            }}         
          transition={{ 
            type: 'spring', 
            damping: 0, 
            stiffness: 800, 
            duration: 5, 
            delay: 2}}>
          <FaPlaceOfWorship 
            color='#64ffda'/>
        </motion.div>
        <span className='logo-text'>KC</span>
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
       <NavItems/>  
      </Modal>
        </div>
        
  )
}
