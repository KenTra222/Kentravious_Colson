import React from 'react'
import './footer.scss'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
   
      <p>&copy; {new Date().getFullYear()} Kentravious Colson</p>
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/in/kentravious-colson-33802a216" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
        <li><a href="https://github.com/KenTra222" target="_blank" rel="noopener noreferrer"><BsGithub/></a></li>
       
      </ul>
    </div>
  </footer>
  )
}
