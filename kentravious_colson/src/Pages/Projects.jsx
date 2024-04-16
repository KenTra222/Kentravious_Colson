import React from 'react'

const Projects = () => {
  return (
    
    <div className='projects'>  
        {/* Projects */}
    <div className='project_wrapper'>
  
    <h2 className='page_title'>Projects</h2>

        <section className='project_content_container'>

          <div className='title_description_wrapper'> 
            <h3>J Black Catering</h3> 
              <p>
              <b> Description:</b>  Is an event catering business located in new york that believes every event is a canvas waiting to be painted with gastronomic delights
                <br/>
                <br/>

                <b> Goal:</b>  to redesign the clients website for a smoother user experience.

                <br/>
                <br/>
               <b> Plan:</b> taking designs from our UI expert then taking those designs and using CMS and embedded code
                 into the site I was able to help successfully launch our clients new online home. 
              </p>
            </div>

            <div className='image_container'> 
            <a href='https://www.jblackcatering.com/'>

              <img className='image' src='/images/Jblack .png'/>  
            </a>
            </div>
        
        </section>

        <section className='project_content_container'>

          <div className='title_description_wrapper'> 
            <h3>odmhnj</h3> 
              <p>
                <b> Description:</b> Stands for "Oscar Devereaux Micheaux House" is a new 35,000 GSF ground up mixed-use mixed-income social impact development project 
                <br/>
                <br/>
                <b> Goal:</b> To Redesign clients User interface and adding unique features to improve user engagement
                <br/>
                <br/>
                <b> Plan:</b> taking designs from project manager and using html, css, and javascript we build the site page by page with features to be unique for investors
              </p>
           
            </div>

            <div className='image_container'> 
            <a href='https://www.odmhnj.com/'>

              <img className='image' src='/images/odmhj.png'/>  
            </a>
            </div>
        
        </section>

        <section className='project_content_container'>

          <div className='title_description_wrapper'> 
            <h3>Copious Staffing Solutions</h3> 
            <p>
                <b> Description:</b> A staffing Agency dedicated to assisting job seekers and employers since 2017 
                <br/>
                <br/>
                <b> Goal:</b> To create a website from start to finish while educating client on dashboard and cms features to make their workload efficient 

                <br/>
                <br/>
                <b> Plan:</b> using competitor analysis to determine what was needed for the user experience we devised a plan to design a new site through figma and developed through web builders like wix to launch site within a month.
              </p>
            </div>

            <div className='image_container'> 
            <a href='https://www.copiousstaffingsolution.com/'>
              <img className='image' src='/images/copiousStaffing.png'/>  
            </a>
            </div>
        
        </section>

        
    </div>
    </div>
  )
}

export default Projects