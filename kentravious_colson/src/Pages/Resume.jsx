import React from 'react'

const Resume = () => {
  return (
    <div className='resume'>

    <div> <h2 className='page_title'>Resume</h2></div>

    <section className='info_section'>
    <div className='work_section_div'><h3> Work <br className='break'/> Experience</h3></div>

    <div className='experience_content_container'>

        <div>
      <div className='experience_wrapper'>

      <div  className='year_title_container'>
        <p className='year'>2023</p>
      </div>
      
      
        <div > 
          <h4> Jr Developer - DevButter</h4> 
        
          <p className='experience_text'> 
          Devbutter is a collective of black enterprise level freelancers with years of experience in  web development that specializes in creating high quality digital services. At Dev Butter i am solely responsible for the development/redesign of client websites, creating scripts and videos for social media posts, and as well as creating 3d digital assets for the company. One of the best gigs I’ve ever had!
          </p>
      </div>
        
        
        </div>
        </div>


        <div>

      <div className='experience_wrapper'>

      
        <p className='year'>2020</p>
      
      
      
        <div > 
          <h4> Freelance - Webdesigner</h4> 
        
          <p className='experience_text'>
          As a freelance UX/UI designer and web developer, the individual focuses on empowering clients by assessing their digital needs and translating them into engaging interfaces. They transform designs into functional websites, mobile applications, and e-commerce platforms. Beyond technical skills, they believe in educating clients and creating a collaborative partnership. Their journey began in 2020, starting with oil changes but later shifting to digital asset creation. They have honed their skills and developed a strategic approach to project planning, successfully launching numerous small businesses. Their core belief is in the transformative power of technology to revolutionize businesses and connect people. They are committed to delivering exceptional freelance services that consistently exceed expectations.
          </p>
      </div>
        
        
        </div>
        </div>

        <div>
      <div className='experience_wrapper'>

      <div  className='year_title_container'>
        <p className='year'>2023</p>
      </div>
      
      
        <div > 
          <h4> Trade Customer Specialist</h4> 
        
          <p className='experience_text'>
          As a trade customer service specialist I was entrusted with the tasks of gaining data, composing customer profiles, using said information to open strong communications to schedule goods and services for our clients needs. Using hospitality, active listening and time management to ensure daily and monthly metrics were meet on a consistent basis.
          </p>
      </div>
        
        
        </div>
        </div>
    </div>
    </section>

    {/* education */}
     <section className='info_section'>
    <div className='work_section_div'><h3> Certification </h3></div>

    <div className='experience_content_container'>
      
      <div className='experience_wrapper'>
  
      <ul className='skill_list'> 
         

          <li>
            <p className='experience_text'>
          <b>   Introduction to Cloud Engineering with HTML, CSS, and Javascript </b>  - IBM
             </p>
          </li>
        
          <li>
            <p className='experience_text'>
          <b>  Frontend Developers Path </b> - Scrimba 
             </p>
          </li>

          <li>
            <p className='experience_text'>
          <b>  Tech Support Fundamentals</b> - Google Careers 

             </p>
          </li>

          <li>
            <p className='experience_text'>
            <b>Foundations of Digital marketing and E-Commerces </b>- Google Careers

             </p>
          </li>

          <li>
            <p className='experience_text'>
           <b> Attract and Engage Customers</b> - Google Careers
             </p>
          </li>
          
          <li>
            <p className='experience_text'>
              <b>Three.js Journey course completion</b> - Bruno Simon
             </p>
          </li>

          
          
      </ul>
        
        
      </div>

        
         
    </div>
    </section>

     {/* Skills */}
      <section className='info_section'>
    <div className='work_section_div'><h3> Skills and Expertise</h3></div>

    <div className='experience_content_container'>

        <div>
      <div className='experience_wrapper'>

      
        <ul className='skill_list'> 
          <li>
            <p className='experience_text'>
            Proficient in HTML5, CSS3, JavaScript, and various frontend frameworks
             </p>
          </li>

          <li>
            <p className='experience_text'>
              Skilled in UI/UX design, wireframing, and prototyping tools
             </p>
          </li>
        
          <li>
            <p className='experience_text'>
            Familiar with version control systems and web performance optimization
             </p>
          </li>

          <li>
            <p className='experience_text'>
            Proficient in HTML5, CSS3, JavaScript, and various frontend frameworks
             </p>
          </li>

          <li>
            <p className='experience_text'>
            Strong problem-solving and analytical skills with a keen eye for detail
             </p>
          </li>

          <li>
            <p className='experience_text'>
            Resourceful with content creation tools and management systems
             </p>
          </li>
          
          <li>
            <p className='experience_text'>
              Efficient in visual storytelling and scripting/mapping
             </p>
          </li>

          
          
      </ul>
        
        
        </div>
        </div>


        
    </div>
    </section>  

    </div>
  )
}

export default Resume