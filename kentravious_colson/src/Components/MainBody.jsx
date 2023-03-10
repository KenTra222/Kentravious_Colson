import React, {useState, useEffect} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import {SiAboutdotme, SiStylelint} from 'react-icons/si'
import {AiFillLike} from 'react-icons/ai'
import {ImCool2} from 'react-icons/im'
import {GiThink} from 'react-icons/gi'
import {TbHandLittleFinger} from 'react-icons/tb'
import { motion, useScroll, Reorder } from "framer-motion"

const MainBody = () => {
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <main>
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{  opacity: 1,  }}
            transition={{ duration: 0.75 }}
          >
          <section id='intro' className='section'>

            <div className='intro_contents'>
              <div>
                <h1>{`<Kentravious Colson/>`}</h1>
                <p>Creative Product Developer</p>
                <p className='small'> 
                Designing and Building digital assets for small businesses
                </p>
              </div>
            </div>
          </section>
          </motion.div>

          
          
          <section id='work' className='section'>
              <h2>MY PROJECTS</h2>
                <Portfolio/>
          </section>
          
          <section id='about' className='section'>
              <h2>ABOUT ME!</h2> 
                <ul className='about_ul'>
                 
                  
                    <li>
                      <div>
                        <SiAboutdotme/>
                      <p>Artist By nature</p>
                      </div>
                    </li>
                 
                    <li>
                      <div>
                      <SiStylelint/>
                    <p>Great in a suit</p> 

                      </div>
                     
                    </li>

                  <li>
                    <div>
                      <AiFillLike/>
                       <p>Music, Anime, Dancing</p> 
                    </div>
                    </li>

                      <li>
                        <div>
                          <ImCool2/> 
                        <p>Cool because i sweat a lot <span><TbHandLittleFinger/></span></p>
                        </div>
                      </li>


                    <li>
                      <div>
                        <GiThink/>  
                    <p>Bad Cereal Commercials dont exist...</p>
                    </div>
                    </li>



                </ul>
          </section>

          <section id='contact' className='section'>
          <h2>CONTACT ME</h2>
            <Form/>
          </section>
        </main>
  )
}

export default MainBody