import React from 'react'
import './footer.scss'
import {FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-links">
        <p><a href="/terms-of-service">Terms of Service</a></p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p><a href="/security">Security</a></p>
      </div>
      <p>&copy; {new Date().getFullYear()} Kentravious Colson</p>
      <ul className="social-icons">
        <li><a href="https://www.linkedin.com/in/kentravious-colson-33802a216" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
       
      </ul>
    </div>
  </footer>
  )
}
