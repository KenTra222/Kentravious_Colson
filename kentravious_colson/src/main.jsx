import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App-Wrapper'>
      <div className='header'>
        <div className='header-left'>
          logo
        </div>
        <div className='header-center'>
          3d component
        </div>
        <div className='header-right'>
          hamburger menu
        </div>
      </div>      
    </div>
  </React.StrictMode>,
)

