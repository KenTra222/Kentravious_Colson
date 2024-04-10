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

        
    </div>
    </div>
  )
}

export default Projects