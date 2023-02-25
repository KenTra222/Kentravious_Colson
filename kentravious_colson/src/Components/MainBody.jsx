import React from 'react'
import '../index.scss'

import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'

const MainBody = () => {
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
            <div className='work_contents'>
              <h1>My Projects</h1>
                <Portfolio/>
            </div>
          </section>


              <Form/>
        </main>
  )
}

export default MainBody