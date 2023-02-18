import React, {useState} from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineDeveloperMode } from "react-icons/md";
import Experience from './Experience'
import Modal from './Modal';
import {Canvas} from '@react-three/fiber'


export default function App() {

    const [isOpen, setIsOpen] = useState(false) 

    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

    const   HAMBURGER_BUTTON_STYLES = {
    color: '#e0e0db',
    border: 'none',
    background: 'none',
    }

    const liststyle = 'list-style'

    const  NAV_MENU_STYLES = {
        liststyle: 'none'
    }
  return (
    
         <div  className='App-Wrapper'>
      
      <section className='header'>
      <div className='header-items'>
        <div className='header-left'>
          <MdOutlineDeveloperMode/>
          <p className='logo-text'>KC</p>
        </div>

        <div className='header-center'>
          <div id='canvas_wrapper'>
          <Canvas>
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
      </section>   
         
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <nav>
            <ul >
                <li><a href='#' data-text='home'>home</a ></li>
                <li><a href='#about' data-text='about'>about</a ></li>
                <li><a href='#project' data-text='projects'>projects</a ></li>
                <li><a href='#contact' data-text='contact'>contact</a ></li>


            </ul>
          </nav>
        </Modal>
    </div>
    
  )
}

