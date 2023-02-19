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
      
      <div className='header'>
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
          <small>
            spin me
          </small>
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
                <li><a href='#about' data-text='about'>about</a ></li>
                <li><a href='#project' data-text='projects'>projects</a ></li>
                <li><a href='#contact' data-text='contact'>contact</a ></li>


            </ul>
          </nav>
        </Modal>

        <section id='intro' className='section'>
          <div className='intro_contents'>
            <h1>{`<Kentravious Colson/>`}</h1>
            <p>Creative  Frontend Product Developer</p>
            <small> HTML | CSS | JAVASCRIPT | REACT.JS | BLENDER | FIGMA | WIX </small>
          </div>
        </section>
        <section id='work' className='section'>
          <div className='work_title'>
            <h1>My Projects</h1>
            <div>
              <p>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a odit, nisi molestias debitis optio deleniti nemo aspernatur, laudantium assumenda repellendus laborum officiis quibusdam quasi odio amet. Voluptates, placeat laborum?
            </p>
            </div>
          </div>
        </section>

        <section id='about' className='section'>
          <div className='about_title'>
            <h1>Contact</h1>
            <div>
              <p>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a odit, nisi molestias debitis optio deleniti nemo aspernatur, laudantium assumenda repellendus laborum officiis quibusdam quasi odio amet. Voluptates, placeat laborum?
            </p>
            </div>
          </div>
        </section>

        <section id='contact' className='section'>
          <div className='work_title'>
            <h1>Contact</h1>
            <div>
              <p>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatum eaque assumenda. Dolorum consequuntur ipsam culpa. Quidem iste maiores temporibus culpa tenetur eius quae, dolor quas incidunt sed corrupti ipsum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a odit, nisi molestias debitis optio deleniti nemo aspernatur, laudantium assumenda repellendus laborum officiis quibusdam quasi odio amet. Voluptates, placeat laborum?
            </p>
            </div>
          </div>
        </section>
    </div>
    
  )
}

