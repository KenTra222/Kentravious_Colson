import React, {useRef, useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Resume from '../Pages/Resume'
import Projects from '../Pages/Projects'
import Portfolio from '../Pages/Portfolio'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import Contact from '../Pages/Contact'
const App = () => {  
  
  return (

      <BrowserRouter>
        <div className='Container'>
         <Header/>
          {/* main */}
            <main>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='resume' element={<Resume/>}/>
                  <Route path='projects' element={<Projects/>}/>
                  <Route path='portfolio' element={<Portfolio/>}/>
                  <Route path='contact' element={<Contact/>}/>
              </Routes>   
            </main>

         <Footer/>
        </div>
      </BrowserRouter>

  )
}

export default App