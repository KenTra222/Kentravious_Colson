import React, {useRef, useState, useEffect } from 'react'
    
const App = () => {  
  
  return (

    <div className='Container'>
      {/* header */}
        <header className='header'> 
          <div className='title_wrapper'>
            <div className='title_ball'></div>
            <div className='title'><p><a>Kentravious Colson</a></p></div>
          </div>    
        {/* navbar */}
          <nav className='nav_bar'>
            <ul className='menu'>
                <li className='menu_item'><a>resume </a></li>
                <li className='menu_item'><a>projects</a></li>
                <li className='menu_item'><a>about</a></li>
                <li className='menu_item'><a>services</a></li>
                <li className='menu_item'><a>contact</a></li>
            </ul>
          </nav>
        </header>

      {/* main */}
        <main>
          {/* <div className='homepage_container'>
            <div className='image_div_Container'></div>

            <div className='hero_content_container'>

            <div className='rich_text_containter'><h1>Hey <br/>there!</h1></div>

            <div className='text_container'>
            <div ><p className='rich_text_subtitle'>Summary</p></div>
            <div ><p className='rich_text_summary'>As a Creative Frontend Web Dev with 4 years of freelancing experience, I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful.</p></div>
            </div>
            
            <div className='links_container'>

              <div id='blue_circle' className='circle_btn'><p  className='cirle_red'><a>Resume</a></p></div>
              <div id='yellow_circle' className='circle_btn'><p  className='cirle_blue'><a>Projects</a></p></div>
              <div id='red_circle' className='circle_btn'><p  className='cirle_yellow'><a>Contact</a></p></div>
            </div>
            </div>
          </div> */}

        {/* resume
        <div> <h2 className='page_title'>Resume</h2></div>
        <section className='info_section'>
        <div className='work_section_div'><h3> Work <br/> Experience</h3></div>

        <div className='experience_content_container'>

            <div>
          <div className='experience_wrapper'>

          <div  className='year_title_container'>
            <p>present</p>
          </div>
          
          
            <div > 
              <h4> Developer DevButter</h4> 
            
              <p className='experience_text'>As a Creative Frontend Web Dev with 4 years of freelancing experience. I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful 
              </p>
          </div>
            
            
            </div>
            </div>
  

            <div>
          <div className='experience_wrapper'>

          <div  className='year_title_container'>
            <p>present</p>
          </div>
          
          
            <div > 
              <h4> Developer DevButter</h4> 
            
              <p className='experience_text'>As a Creative Frontend Web Dev with 4 years of freelancing experience. I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful 
              </p>
          </div>
            
            
            </div>
            </div>

            <div>
          <div className='experience_wrapper'>

          <div  className='year_title_container'>
            <p>present</p>
          </div>
          
          
            <div > 
              <h4> Developer DevButter</h4> 
            
              <p className='experience_text'>As a Creative Frontend Web Dev with 4 years of freelancing experience. I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful 
              </p>
          </div>
            
            
            </div>
            </div>
        </div>
        </section>

        {/* education */}
        {/* <section className='info_section'>
        <div className='work_section_div'><h3> Education</h3></div>

        <div className='experience_content_container'>

            <div>
          <div className='experience_wrapper'>

          <div  className='year_title_container'>
            <p>2014</p>
          </div>
          
          
            <div > 
              <h4> Southwest highschool </h4> 
            
              <p className='experience_text'>As a Creative Frontend Web Dev with 4 years of freelancing experience. I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful 
              </p>
          </div>
            
            
            </div>
            </div>
  

            
        </div>
        </section>

         {/* Skills */}
         {/* <section className='info_section'>
        <div className='work_section_div'><h3> Skills and Expertise</h3></div>

        <div className='experience_content_container'>

            <div>
          <div className='experience_wrapper'>
 
          
            <div > 
             
            
              <p className='experience_text'>As a Creative Frontend Web Dev with 4 years of freelancing experience. I use my knowledge and skills in UX/UI Design, Content Management, and Coding to ensure that my clients leave with products that are not only satisfying to look at but also reliable and useful 
              </p>
          </div>
            
            
            </div>
            </div>
  

            
        </div>
        </section>  */} 

      

        {/* Projects */}
        <div>
          <h2>Projects</h2>
        </div>

        <div className='project_wrapper'>
          <div> <h3>title</h3> <p>description</p></div>
          <div> <div> image link</div></div>
        </div>

        <div className='project_wrapper'>
          <div> <h3>title</h3> <p>description</p></div>
          <div> <div> image link</div></div>
        </div>

        <div className='project_wrapper'>
          <div> <h3>title</h3> <p>description</p></div>
          <div> <div> image link</div></div>
        </div>

        <div className='project_wrapper'>
          <div> <h3>title</h3> <p>description</p></div>
          <div> <div> image link</div></div>
        </div>

        </main>

        {/* footer */}
        <footer>
          <div>
            <p>
            Phone
            </p>
            <p>
            4787443006
            </p>
          </div>
          <div>
          <p>
            Email
            </p>
            <p>
            kentraviousc@gmail.com
            </p>
          </div>
          <div>
          <p>
            social links
            </p>
            <p>
            linkedin
            </p>
          </div>
          <div>
            Developed by Kentravious Colson @2023
          </div>
        </footer>
    </div>
  )
}

export default App