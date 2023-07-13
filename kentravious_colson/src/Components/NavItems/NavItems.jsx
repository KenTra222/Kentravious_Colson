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
                <Link className="underline" smooth  to='#intro'>
                    home
                </Link>
                </div>
              </li>
              </motion.div>

              <motion.div
              initial={{y: -100}}
              animate={{ y: 0}}
              transition={ {duration: 2.5 }}>
              <li >
              <div>
                  02.
                <Link smooth to="#about" className="underline"  >about</Link>
              </div>
              
              </li>
              
              <li >
              <div>
                  03.
                <Link to='#projects' className="underline" smooth>projects</Link >
              </div>
              </li>
                </motion.div>        

            <motion.div
            initial={{y: -100}}
            animate={{ y: 0}}
            transition={ {duration: 2.7 }}>

              <li >
              <div>
                  04.
                <Link smooth to='#contact' className="underline"  >contact</Link >
                </div>
              </li>
            </motion.div>

            <motion.div
            initial={{y: -100}}
            animate={{ y: 0}}
            transition={ {duration: 3 }}>

              
      
            </motion.div>

            </motion.div>
          </ul>
        </nav>
  )
}

export default NavItems