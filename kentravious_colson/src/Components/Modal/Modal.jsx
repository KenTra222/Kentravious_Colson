import React, {Fragment} from 'react'
import { ReactDOM } from 'react-dom'
import {MdClose} from 'react-icons/md'
import './modal.scss'



export default function  Modal ({isOpen, children, onClose})  {

    const   CLOSE_BTN_STYLES ={
        background: 'transparent',
        color: '#892be2a9',
        border: 'none'
        
    }

    
  return (
    <>
        {isOpen ? (
            <div className='modal'>
                <div className='modal_background' onClick={onClose}/>
                <div className='modal_container'>
                    <div className='modal_controls'>
                        <button className='modal_close' style={CLOSE_BTN_STYLES} onClick={onClose}>
                            <MdClose/>
                        </button>
                    </div>
                {children}
                </div>
            </div>
        ): null}
    </>
  )
}
