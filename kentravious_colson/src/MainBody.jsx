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
              <small> HTML | CSS | JAVASCRIPT | REACT.JS | BLENDER | FIGMA | WIX </small>
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

          <section id='about' className='section'>
            <div className='about_title'>
              <h1>Timeline</h1>
              <div>
             
              </div>
            </div>
          </section>

              <Form/>
        </main>
  )
}

export default MainBody