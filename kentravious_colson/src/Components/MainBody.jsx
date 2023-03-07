import React, {useState, useEffect} from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'

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
              <p>Creative  Frontend Developer</p>
              <p className='small'> Designing and Building digital assets for small business</p>


            </div>
          </section>
          
          <section id='work' className='section'>
          
              <h2>My Projects</h2>
                <Portfolio/>
            
          </section>

          <section id='contact' className='section'>
          <h2>Contact Me</h2>
            <Form/>
          </section>
        </main>
  )
}

export default MainBody