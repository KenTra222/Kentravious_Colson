import './header.scss'
import React, {useState, useEffect} from 'react'
import Experience from '../Experience/Experience'
import Modal from '../Modal/Modal';
import { TiThMenuOutline } from "react-icons/ti";
import { FaPlaceOfWorship } from "react-icons/fa";
import {Canvas} from '@react-three/fiber'
import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';



const   HAMBURGER_BUTTON_STYLES = {
  color: ' rgba(213, 119, 250, 0.75)',
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
          transition={{ type: 'spring', damping: 0, stiffness: 800, duration: 4, delay: 2}}>
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

              <li onClick={toggleModal}>
                <Link smooth  to='#intro'>
                    home
                </Link>
              </li>
              <li onClick={toggleModal}>
                <Link to='#projects' smooth>projects</Link >
              </li>
              <li onClick={toggleModal}>
                <Link smooth to="#about" >about</Link>
              </li>
              <li onClick={toggleModal}>
                <Link smooth to='#contact'  >contact</Link >
              </li>
            </motion.div>
          </ul>
        </nav>
            </motion.div>
        </Modal>
        </div>
        
  )
}
