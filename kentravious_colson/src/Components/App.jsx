import React, {useRef, useState, useEffect } from 'react'
import Form from './Form/Form'
import { Portfolio } from './Portfolio/Portfolio'
import '../index.scss'
import About from './About/About'
import Intro from './Intro/Intro'
import { Header } from './Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import {Footer} from './Footer/Footer'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx';
import Experience from './Experience/Experience'
import { Canvas } from '@react-three/fiber'
import { Testimonial } from './Testimonials/Testimonial'



const App = () => {  
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Do some asynchronous work here
    setIsLoading(false);
  }, []);

  return (
    <Router>
    <div  className='App-Wrapper'>  
      <LoadingScreen isLoading={isLoading} />

          {/* header*/}
          <Header/>
        <main>
     
          {/*intro*/}
           <Intro  /> 

          {/*experience*/}
          <Canvas className='canvas' 
            style={{ 
              backgroundColor: 'none',
              left:'0', 
              position: "absolute",
              zindex: "-100",
              width: "100vw",
              height: "150svh" }}>
            <Experience/>
          </Canvas>

          {/*About*/}
          <About/>

          {/* skills */}
             
          <div>
              <h2>Skills That Pays The Bills</h2>
            <ul>
              <li>
                <h3>UX/UI Design</h3>
                <p>Before we can even begin making websites, we need a plan. With research, competitor audits, user personas, and user flow, we can strategize how your website/application fits into the market.</p>
              </li>
              <li>
                <h3>Web Design & Content Management</h3>
                <p>Maybe we don't have time to code everything bit by bit. No problem! However, a lot of content management systems/website builders can be extremely difficult if you don't understand what you're doing. No problem! I can build your website from scratch and show you, so that all you have to do is tweak the easy stuff! I can create things like content managers so you don't have to!</p>
              </li>
              <li>
                <h3>Website Management</h3>
                <p>Time is, in fact, money. Let me help you spend it wisely! Don't have time to sit at a computer and watch all of the analytics, edit pictures, or simply check who signed up? I can speed up the process by managing your website while you simply send an email of what you want to change from the comfort of your phone.</p>
              </li>
              <li>
                <h3>Web Development</h3>
                <p>Let's all agree that features are cool, right? Implementing those features in code, however, is a big yikes! Thankfully, I've taken on the task of learning JavaScript so that you don't have to. With my knowledge of programming, I can help you add whatever crazy feature you want your users to have.</p>
              </li>
              <li>
                <h3>3D Product Design</h3>
                <p>2D images and pictures are great, but why not take it to the next level? With my expertise in Blender, I can create unique 3D products that are visually appealing and easily adaptable to meet your specific requirements.</p>
              </li>
              <li>
                <h3>Marketing Strategy</h3>
                <p>All of this seems great, but if no one knows about it, then it's as good as writing it on a sheet of paper and throwing it in the trash. While taking the Google Career Certificate course, I learned the strategies and tactics of digital marketing to help bring awareness to your project. I use journey maps and marketing funnels to increase conversion rates for your products or services.</p>
              </li>
            </ul>
          </div>

          {/*projects*/}
          <Portfolio />

          {/* services */}

          <div>
            <h2>Services</h2>
            <ul>
            <li>
                <h3>UX/UI Strategy</h3>
                <p>designed to help your businesses create intuitive and user-friendly digital experiences that resonate with your target audience. I believe that a well-planned user interface (UI) and user experience (UX) are crucial for enhancing customer satisfaction, engagement, and conversion rates.

                I am an experienced UI/UX strategists that will work closely with you to understand your business goals, target audience, and industry landscape. We will conduct in-depth research, competitor audits, and user analysis to gather insights and identify key opportunities. By understanding user behaviors, needs, and pain points, we can develop a solid strategy that aligns with your business objectives.

                During the strategy phase, we will create detailed user personas, user flows, and journey maps to visualize the user experience from start to finish. We will collaborate with you to define key user interactions, prioritize features, and establish a clear roadmap for implementation.

                This approach combines creativity, data-driven insights, and industry best practices to ensure that your digital products or services are not only visually appealing but also highly functional and user-centric. We will work with you to develop wireframes, prototypes, and interactive mockups to test and iterate on design concepts before moving into the development phase.

                With the UI/UX Strategy service, you can expect a comprehensive plan that outlines the design principles, information architecture, navigation structure, and visual aesthetics of your digital solution. Our goal is to create a seamless and delightful user experience that drives engagement, builds brand loyalty, and ultimately contributes to the success of your business.

                Whether you are launching a new website, mobile app, or digital platform, this UI/UX Strategy service will provide you with the strategic foundation necessary to create a compelling and user-friendly digital experience that resonates with your target audience.  </p>
            </li>

            <li>
                <h3>Web Design</h3>
                <p> dedicated to creating visually stunning and highly functional websites that effectively communicate your brand message and engage your target audience. Understanding that your website is the digital face of your business, and committing to delivering designs that leave a lasting impression.
                  As a  skilled web designers I will collaborate closely with you to understand your business goals, target audience, and brand identity. I believe that great web design goes beyond aesthetics and focuses on delivering a seamless user experience. Working with you to create a website that not only captures the essence of your brand but also guides visitors through a smooth and intuitive navigation journey.
                  During the design process, we will pay careful attention to visual elements such as color schemes, typography, and imagery to ensure consistency with your brand guidelines. We will also consider the overall layout and structure of the website to optimize user flow and make information easily accessible. Our goal is to create a visually appealing and user-friendly interface that encourages engagement and drives conversions.
                  I understand that responsive design is essential in today's mobile-centric world. Therefore, I will ensure that your website is fully optimized for different devices and screen sizes, providing a seamless browsing experience across desktops, tablets, and smartphones.
                  With the web design service also encompasses content management systems (CMS) and website builders. If you prefer to have control over the content and updates on your website, we can integrate a user-friendly CMS that allows you to manage and edit your website easily. We will guide you through the CMS functionalities, ensuring that you have the necessary knowledge to maintain your website efficiently.
                  With the Web Design service, you can expect a website that not only captures attention but also provides a memorable user experience. We are passionate about creating designs that align with your business objectives and resonate with your target audience. Whether you need a new website or a redesign of your existing one, our team is here to transform your vision into a captivating online presence.
                  </p>
            </li>

            <li>
                <h3>Web Development</h3>
                <p> Focused on turning your website ideas into fully functional and dynamic online platforms that drive business growth and deliver an exceptional user experience. I have a team of experienced web developers who are proficient in the latest web technologies and frameworks, ensuring that your website is built to the highest standards.
                    The development process begins with a thorough understanding of your business goals, target audience, and specific requirements. Creating custom solutions that are tailored to your unique needs. Whether you need an e-commerce website, a content management system, a web application, or a custom web solution, we have the expertise to bring your vision to life.
                    Our web development team is skilled in various programming languages such as HTML, CSS, JavaScript, and PHP, along with popular frameworks and content management systems like React, Angular, WordPress, and Drupal. Leveraging these technologies to build robust and scalable websites that are optimized for performance and user engagement.
                    Throughout the development process, we prioritize clean and maintainable code to ensure long-term stability and ease of future enhancements. We also implement best practices in web security to protect your website and user data against potential threats.
                    We understand the importance of responsive design, and we ensure that your website looks and functions flawlessly across different devices and screen sizes. By utilizing responsive design techniques, we create a seamless user experience that adapts to desktops, tablets, and smartphones.
                    Our web development service also includes thorough testing and quality assurance to ensure that your website functions as intended. We conduct rigorous testing across different browsers, devices, and user scenarios to identify and resolve any potential issues before the final launch.
                    Additionally, we offer ongoing maintenance and support to keep your website running smoothly. We can assist with updates, security patches, performance optimization, and any technical support you may require.
                    With our Web Development service, you can expect a robust, scalable, and high-performing website that meets your business objectives and exceeds user 
                  </p>
            </li>

            <li>
                <h3>3D Product Design</h3>
                <p>  My 3D Product Design service offers a comprehensive solution for businesses and individuals seeking to bring their product ideas to life through stunning and realistic visualizations. As a solo freelancer, I specialize in creating high-quality 3D models and renderings that effectively showcase the form, functionality, and aesthetic appeal of your products.

                    Working closely with you, I will collaborate to understand your product concept, design requirements, and target audience. Together, we will refine your vision and translate it into a captivating 3D representation. Whether you have a rough sketch, technical drawings, or just an idea, I have the expertise to transform it into an impressive 3D model.

                    Utilizing advanced 3D modeling software and techniques, I meticulously design and sculpt your product, paying careful attention to details, proportions, and materials. This meticulous approach ensures the creation of a realistic and accurate representation that allows you to visualize your product from every angle.

                    During the design process, I can incorporate various features and functionalities into the 3D model, enabling you to explore different options and make informed decisions. I can simulate product interactions, demonstrate assembly processes, and showcase how your product functions in real-world scenarios.

                    Once the 3D model is finalized, I proceed to create high-quality renderings that bring your product to life. My rendering techniques include realistic lighting, textures, and materials, ensuring that the visuals accurately represent the look and feel of the final product. These renderings can be effectively used for marketing materials, presentations, crowdfunding campaigns, and more.

                    In addition to 3D design, my service extends to prototyping and manufacturing assistance. If you require physical prototypes of your product, I can collaborate with prototyping services or provide guidance on manufacturing processes. With my expertise in product design and engineering, I ensure that the 3D models I create are production-ready and optimized for manufacturing.

                    With my 3D Product Design service as a solo freelancer, you can expect exceptional visual representations of your product that effectively communicate its design, features, and potential. My goal is to help you bring your product ideas to life, whether it's for concept development, marketing purposes, or manufacturing. Let me transform your vision into a stunning reality.
                </p>
            </li>

            <li>
                <h3>Marketing Strategy</h3>
                <p> Designed to help businesses develop comprehensive and effective marketing plans to drive brand awareness, engage target audiences, and achieve business objectives. Understanding that a well-crafted marketing strategy is crucial for positioning your brand in the market and maximizing your reach.
                    As an experienced  marketer I will work closely with you to understand your business goals, target audience, and competitive landscape. Conducting  thorough market research and analysis to identify key market trends, consumer insights, and opportunities for growth. With this information, we can develop a tailored marketing strategy that aligns with your brand and sets you apart from the competition.
                    During the strategy development phase, we will outline a clear roadmap and define key marketing objectives and goals. We will identify the most effective marketing channels and tactics to reach your target audience and maximize your return on investment. Our strategy may include a mix of digital marketing, content marketing, social media marketing, search engine optimization (SEO), paid advertising, and other relevant tactics.
                    We will also develop buyer personas to better understand your target audience and create messaging that resonates with them. By understanding their needs, pain points, and motivations, we can craft compelling marketing campaigns that drive engagement and conversion.
                    Measurement and analytics are integral to our marketing strategy service. We will establish key performance indicators (KPIs) and implement tracking tools to monitor the success of your marketing efforts. Through data analysis and reporting, providing  insights into campaign performance, identify areas of improvement, and make data-driven adjustments to optimize your marketing strategy.
                    The marketing strategy service also encompasses the development of customer journey maps and marketing funnels. We will map out the different touchpoints and interactions that your customers have with your brand, from initial awareness to post-purchase engagement. This allows us to identify opportunities for enhancing the customer experience and increasing conversion rates.
                    With the Marketing Strategy service, you can expect a well-rounded marketing plan that combines creativity, data-driven insights, and industry best practices. We are committed to helping you achieve your marketing goals and drive business growth. Whether you are launching a new product, expanding your market reach, or revitalizing your brand, our team is here to provide the strategic guidance and expertise needed to elevate your marketing efforts.
                    expectations. I am dedicated to delivering exceptional web solutions that enhance your online presence and drive meaningful results.
                </p>
            </li>
            </ul>
          </div>

          {/* testimonials */}

          <Testimonial/>
          <section>
            <div className='card'>
              <div className='img_cont'>
                <img/>
              </div>
              <p className='statement'>

              </p>

            </div>
          </section>

          {/*Form*/}
          <Form  />
        </main>
         <Footer/>
    </div> 
    </Router>
  )
}

export default App