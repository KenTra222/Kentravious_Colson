import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { IconContext } from 'react-icons';
import { TiThMenuOutline } from "react-icons/ti";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App-Wrapper'>
      <div className='header'>
        <div className='header-left'>

          KC
        </div>
        <div className='header-center'>
          3d Component
        </div>

   
        <div className='header-right'>
            <button className='hamburger_menu'>
              <TiThMenuOutline />
            </button>
        </div>
    
      </div>      
    </div>
  </React.StrictMode>,
)

