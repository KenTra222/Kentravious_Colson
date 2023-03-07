import React from 'react'
import './index'
import MainBody from './Components/MainBody';
import { Header } from './Components/Header/Header';

export default function App() {

  return (    
    <div  className='App-Wrapper'>
        <Header/>
        <MainBody/>
    </div>
  )
}

