import React, {useState, useEffect} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import {SiAboutdotme, SiStylelint} from 'react-icons/si'
import {AiFillLike} from 'react-icons/ai'
import {ImCool2} from 'react-icons/im'
import {GiThink} from 'react-icons/gi'
import {TbHandLittleFinger} from 'react-icons/tb'

const MainBody = () => {
 const [animeImage, setAnimeImage] = useState([])

async function getApiData() {
  const response = await fetch('https://nekos.best/api/v2/neko')
  const json = await response.json()
  
  setAnimeImage(json.results[0].url)
}

useEffect(() => {
  getApiData()
}, [])

  return (
    <main>
          <section id='intro' className='section'>
            <div className='intro_contents'>
              <h1>{`<Kentravious Colson/>`}</h1>
              <p>Creative Product Developer</p>
              <p className='small'> 
              Designing and Building digital assets for small businesses
              </p>


            </div>
          </section>

          <section id='about' className='section'>
              <h2>ABOUT ME!</h2> 
                <ul className='about_ul'>

                  <li>
                    <div>
                       <SiAboutdotme/>
                    </div>
                    <p>Hugeee nerd!</p>
                  </li>

                  <li>
                    <div>
                     <SiStylelint/>
                    </div>
                    <p> Bruce Wayne is valid</p>
                  </li>
                  <li>
                    <div>
                      <AiFillLike/>
                    </div>
                       <p>Music, Anime, Chicken Sandwiches, ATL </p> 
                    
                    </li>
                  <li>
                    <div>
                      <ImCool2/> 
                    </div>
                    <p>Cool because i sweat a lot <span><TbHandLittleFinger/></span>...</p>
                    
                  </li>

                  <li>
                    <div>
                  <GiThink/>  
                  </div>
                  <p>Bad Cereal Commercials dont exist...</p>
                  </li>
                </ul>
          </section>
          
          <section id='work' className='section'>
              <h2>MY PROJECTS</h2>
                <Portfolio/>
          </section>

          <section id='contact' className='section'>
          <h2>CONTACT ME</h2>
            <Form/>
          </section>
        </main>
  )
}

export default MainBody