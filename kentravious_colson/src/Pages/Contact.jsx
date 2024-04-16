import React from 'react'
import Form from '../Components/Form/Form'

const Contact = () => {
  return (
    <div className='contact'> 
    <div className='wrapper' id='contact_wrapper'>
      <div>
      <h2 className='page_title'>Contact</h2>
      </div>

      <section className='contact_section'>

      <div className='contact_info'>
     <b> <p>Get in Touch!</p></b>
      <p><u>Services</u> <br/>Web Development, Content Management, Content Creataion </p>
      
      <div>
      <p><u>Phone</u></p>
      <p className='info'>4787443006</p>
      </div>
      
      <div>
      <p><u>Email</u></p>
      <p className='info'>kentraviousc@gmail</p>
      </div>
      </div>
      
      <div className='embedded_code'>
        
        <Form/>
      </div>

      </section>
    </div> 
    </div>
  )
}

export default Contact