import React from 'react'
 import './footer.scss'
 import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    
    <footer>
       {/* footer */}
       <section className='info_div'>  

          <div>
            <p>
            Phone
            </p>
            <small>
            4787443006
            </small>
          </div>

          <div>
          <p>
            Email
            </p>
            <small>
            kentraviousc@gmail.com
            </small>
          </div>

          <div>
             <p>
            Social Links
            </p>
            <small>
              <a href='https://www.linkedin.com/in/kentravious-colson-dev/'>
                <FaLinkedin />
              </a>
            </small>
          </div>
       </section>
     
     </footer>
  )
}
