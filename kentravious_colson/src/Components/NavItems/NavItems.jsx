import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';
import './navitems.scss'

const NavItems = ( props ) => {

    const [isOpen, setIsOpen] = useState(false) 
    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className={props.className}>
          <ul >
            <motion.div
              initial={{opacity: 0.2}}
              animate={{ opacity: 1}}
              transition={ {duration: 1 }}
            >
              <motion.div
              initial={{y: -100}}
              animate={{ y: 0}}
              transition={ {duration: 2 }}>

              <li onClick={toggleModal}>
                <div>
                  01.
                <Link smooth  to='#intro'>
                    home
                </Link>
                </div>
              </li>
              </motion.div>

              <motion.div
              initial={{y: -100}}
              animate={{ y: 0}}
              transition={ {duration: 2.5 }}>
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
                </motion.div>        

            <motion.div
            initial={{y: -100}}
            animate={{ y: 0}}
            transition={ {duration: 2.7 }}>

              <li onClick={toggleModal}>
              <div>
                  04.
                <Link smooth to='#contact'  >contact</Link >
                </div>
              </li>
            </motion.div>

            <motion.div
            initial={{y: -100}}
            animate={{ y: 0}}
            transition={ {duration: 3 }}>

              <li onClick={toggleModal}>
                <a className='resumeBtn' href='#'  >resume</a >
              </li>
            </motion.div>

            </motion.div>
          </ul>
        </nav>
  )
}

export default NavItems