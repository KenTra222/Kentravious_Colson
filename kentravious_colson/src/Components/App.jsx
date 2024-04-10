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
                <li className='menu_item'><a>gallery</a></li>
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
          {/* <div className='project_wrapper'>
        
          <h2>Projects</h2>

              <section className='project_content_container'>

                <div className='title_description_wrapper'> 
                  <h3>J Black Catering</h3> 
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce vel fringilla turpis. Nullam euismod metus in augue consectetur, 
                      a luctus nunc tincidunt. Nulla facilisi. Integer ac nunc at magna 
                      molestie efficitur.
                    </p>
                  </div>

                  <div className='image_container'> 
                    <img className='image' src='/images/Jblack .png'/>  
                  </div>
              
              </section>

              <section className='project_content_container'>

                <div className='title_description_wrapper'> 
                  <h3>odmhnj</h3> 
                    <p>
                      Stands for "Oscar Devereaux Micheaux House" 
                      Fusce vel fringilla turpis. Nullam euismod metus in augue consectetur, 
                      a luctus nunc tincidunt. Nulla facilisi. Integer ac nunc at magna 
                      molestie efficitur.
                    </p>
                  </div>

                  <div className='image_container'> 
                    <img className='image' src='/images/odmhj.png'/>  
                  </div>
              
              </section>

              <section className='project_content_container'>

                <div className='title_description_wrapper'> 
                  <h3>Copious Staffing Solutions</h3> 
                    <p>
                      orem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce vel fringilla turpis. Nullam euismod metus in augue consectetur, 
                      a luctus nunc tincidunt. Nulla facilisi. Integer ac nunc at magna 
                      molestie efficitur.
                    </p>
                  </div>

                  <div className='image_container'> 
                    <img className='image' src='/images/copiousStaffing.png'/>  
                  </div>
              
              </section>

              
          </div> */}

          {/* gallery */}
          <section className='portfolio_wrapper'>
              <h2>Portfolio</h2>

              <div className="container">
                <div className="box"> </div>
                <div className="box2"></div>
                <div className="box-3"></div>
                <div className="box-4"></div>
                <div className="box-5"></div>
                <div className="box-6"></div>
                <div className="box-7"></div>
                <div className="box-8"></div>
                <div className="box-9"></div>
              </div>

              </section>

        {/* Services */}
        {/* <div className='services Wrapper'>
            <h2>My Services</h2>

          <section className='services_container'>

            <div className='card'>
              <div className='box'>
                <img className='service_image' src='/projects/cadet.jpg'/>
              </div>

              <div className='card_details'>
                <h4>Single Page Design</h4>
                <div className='service_description'> 
                  <p>$300</p>
                  <p>single page</p>
                </div>

                <div className='book_button'>
                  <a>book now</a>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='box'>
                <img className='service_image' src='/projects/cadet.jpg'/>
              </div>

              <div className='card_details'>
                <h4>Multi Page Design</h4>
                <div className='service_description'> 
                  <p>$300</p>
                  <p>single page</p>
                </div>

                <div className='book_button'>
                  <a>book now</a>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='box'>
                <img className='service_image' src='/projects/cadet.jpg'/>
              </div>

              <div className='card_details'>
                <h4>Visual Asset Creation</h4>
                <div className='service_description'> 
                  <p>$300</p>
                  <p>single page</p>
                </div>

                <div className='book_button'>
                  <a>book now</a>
                </div>
              </div>
            </div>
          </section>
        </div> */}

        {/* contact */}
        {/* <div className='wrapper' id='contact_wrapper'>
          <div>
            <h2>Contact</h2>
          </div>

          <div className='contact_info'>
            <p>Get in Touch</p>
            <div>
              <p>Phone</p>
              <p>4787443006</p>
            </div>

            <div>
              <p>Email</p>
              <p>kentraviousc@gmail</p>
            </div>
          </div>

          <div>
            embedded code
          </div>
        </div> */}
      
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