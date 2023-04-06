import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';
import './navitems.scss'

const MobileItems = ( props ) => {

    const [isOpen, setIsOpen] = useState(false) 
    const toggleModal = ( ) => {
        setIsOpen(!isOpen)
    }

    const closeModal = () => {
        setIsOpen(false);
      };

  return (
    <nav className={props.className}>
          <ul >
            <motion.div
              initial={{opacity: 0.2}}
              animate={{ opacity: 1}}
              transition={ {duration: 1 }}
            >
              <motion.div
              initial={{x: -100}}
              animate={{ x: 0}}
              transition={ {duration: 1 }}>

              <li onClick={toggleModal}>
                <div >
                  01.
                <Link className="underline"  smooth  to='#intro' onClick={closeModal}>
                    home
                </Link>
                </div>
              </li>

              <li onClick={toggleModal}>
              <div>
                  02.
                <Link smooth to="#about" className="underline"  >about</Link>
              </div>
              
              </li>
              
              <li onClick={toggleModal}>
              <div>
                  03.
                <Link to='#projects' className="underline" smooth>projects</Link >
              </div>
              </li>
                    

        

              <li onClick={toggleModal}>
              <div>
                  04.
                <Link smooth to='#contact' className="underline"  >contact</Link >
                </div>
              </li>
            </motion.div>
            

            <motion.div
            initial={{x: -100}}
            animate={{ x: 0}}
            transition={ {duration: 2 }}>

              <li onClick={toggleModal}>
                <a className='resumeBtn' href='#'  >resume</a >
              </li>
            </motion.div>

            </motion.div>
          </ul>
        </nav>
  )
}

export default MobileItems