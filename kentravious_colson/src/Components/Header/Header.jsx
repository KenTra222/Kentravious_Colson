import React, {useState} from 'react'
import Experience from '../Experience/Experience'
import Modal from '../Modal/Modal';
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineDeveloperMode } from "react-icons/md";
import {Canvas} from '@react-three/fiber'
import './header.scss'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false) 
    const [isScrolling, setIsScrolling] = useState(false)

    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

    const scrollingFunction = ( ) => {
        setIsScrolling(!isScrolling)
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
        <MdOutlineDeveloperMode/>
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
        <nav>
          <ul >
              <li><a href='#' data-text='home'>home</a ></li>
              <li><a href='' data-text='about'>about</a ></li>
              <li><a href='#project' data-text='projects'>projects</a ></li>
              <li><a href='#contact' data-text='contact'>contact</a ></li>
          </ul>
        </nav>
        </Modal>
        </div>
        
  )
}
