import React from 'react'
import './index.scss'
import Form from './Form'

const MainBody = () => {
  return (
    <main>
          <section id='intro' className='section'>
            <div className='intro_contents'>
              <h1>{`<Kentravious Colson/>`}</h1>
              <p>Creative  Frontend Product Developer</p>
              <p className='small'> Designing and Building digital assets for small business</p>
            </div>
          </section>
          <section id='work' className='section'>
            <div className='work_contents'>
              <h1>My Projects</h1>
              <div>
                <h4>Title</h4>
              
              </div>
            </div>
          </section>


              <Form/>
        </main>
  )
}

export default MainBody