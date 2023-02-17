import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { IconContext } from 'react-icons';
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineDeveloperMode } from "react-icons/md";
import Experience from './Experience'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App-Wrapper'>

      <section className='header'>
      <div className='header-items'>
        <div className='header-left'>
          <MdOutlineDeveloperMode/>
          <p className='logo-text'>KC</p>
        </div>

        <div className='header-center'>
            <Experience/>
            <small>spin me</small>
        </div>

   
        <div className='header-right'>
            <button className='hamburger_menu'>
              <TiThMenuOutline />
            </button>
        </div>
        </div>
      </section>      
    </div>
  </React.StrictMode>,
)

