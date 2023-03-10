import './header.scss'
import React, {useState, useEffect} from 'react'
import Experience from '../Experience/Experience'
import Modal from '../Modal/Modal';
import { TiThMenuOutline } from "react-icons/ti";
import { FaPlaceOfWorship } from "react-icons/fa";
import {Canvas} from '@react-three/fiber'
import {motion, useMotionValue, useVelocity } from 'framer-motion'
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

console.log(motion);
export const Header = () => {

    const [isOpen, setIsOpen] = useState(false) 


    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

    

    const   HAMBURGER_BUTTON_STYLES = {
    color: '#8a2be2',
    border: 'none',
    background: 'none',
    }

  return (
    <div>      
        <div className='header' >
    <div className='header-items'>
      <div className='header-left'>
        <motion.div
          animate={{
            x: [0, 75, 100, 100,100, 100, 0, 0],
            y:[-2,-1,-2,-1,-2,-1,-2,-1,0],
            rotate: [0, 90, 90,90, 90,180,180, 270, 270,0, 0],
            }}         
          transition={{ type: 'spring', damping: 0, stiffness: 800, duration: 3}}>
          <FaPlaceOfWorship color='#c766ffbd'/>
        </motion.div>
        <p className='logo-text'>KC</p>
      </div>

      <div className='header-center'>
        <div id='canvas_wrapper'>
        <Canvas shadows>
            <Experience/>
        </Canvas>
        </div>
          
      </div>

 
      <div className='header-right'>
          <button className='hamburger_menu' style={HAMBURGER_BUTTON_STYLES} onClick={toggleModal}>
            <TiThMenuOutline />
       
          </button>
      </div>
      </div>
    </div>   
       

      <Modal isOpen={isOpen} onClose={toggleModal}>
    <motion.div
              initial={{x: -100}}
              animate={{ x: 0}}
            >
        <nav>
          <ul >
            <motion.div
              initial={{x: -100}}
              animate={{ x: 0}}
            >

              <li><a href='#' data-text='home'>home</a ></li>
              <li><a href='' data-text='about'>about</a ></li>
              <li><a href='#project' data-text='projects'>projects</a ></li>
              <li><a href='#contact' data-text='contact'>contact</a ></li>
            </motion.div>
          </ul>
        </nav>
            </motion.div>
        </Modal>
        </div>
        
  )
}
