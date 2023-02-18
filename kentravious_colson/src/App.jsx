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
                <li><p>home</p></li>
                <li><p>about</p></li>
                <li><p>projects</p></li>
                <li><p>contact</p></li>


            </ul>
          </nav>
        </Modal>
    </div>
    
  )
}

