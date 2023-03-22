import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';


const NavItems = ( props ) => {

    const [isOpen, setIsOpen] = useState(false) 
    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className={props.className}>
          <ul >
            <motion.div
              initial={{x: -100}}
              animate={{ x: 0}}
            >

              <li onClick={toggleModal}>
                <div>
                  01.
                <Link smooth  to='#intro'>
                    home
                </Link>
                </div>
              </li>
              <li onClick={toggleModal}>
              <div>
                  02.
                <Link to='#projects' smooth>projects</Link >
                </div>
              </li>
              <li onClick={toggleModal}>
              <div>
                  03.
                <Link smooth to="#about" >about</Link>
                </div>
              </li>
              <li onClick={toggleModal}>
              <div>
                  04.
                <Link smooth to='#contact'  >contact</Link >
                </div>
              </li>
              <li onClick={toggleModal}>
                <a className='resumeBtn' href='#'  >resume</a >
              </li>
            </motion.div>
          </ul>
        </nav>
  )
}

export default NavItems