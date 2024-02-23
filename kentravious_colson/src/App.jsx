import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma, SiBlender      } from "react-icons/si"
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

 

 
function App() {
  // const [section, setSection] = useState(0);
  // const [menuOpened, setMenuOpened] = useState(false);

  // useEffect(() => {
  //   setMenuOpened(false);
  // }, [section]);

   

  return (
    <>
      <header className="HEADER_WRAPPER">
        <div className="LOGO_WRAPPER">
          <p  className="LOGO">Logo</p>
        </div>

        <nav className="NAV_WRAPPER">
          <div className="NAV_ITEM">
            <a className="NAV_LINK">ABOUT</a>
          </div>
          <div className="NAV_ITEM">
            <a className="NAV_LINK">WORK</a>
          </div>
          <div className="NAV_ITEM">
            <a className="NAV_LINK">CONTACT</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="HERO_WRAPPER">
           
          <div className="ABOUT_WRAPPER">

         <div className="ABOUT_CONTENT_WRAPPER">
          <p> Web Design/Developer, Creative Artist</p>
         
          <h1>Kentravious Colson</h1>

        
          <small> Strong passion for creating user strategies, content, designs and assets <br/>
          that make your businesses / project easier for you and your clients</small>
        

          <a className="CONTACT_BUTTON"> CONTACT</a>
     
         </div>
         </div>

         <div className="BIO_PIC_WRAPPER">
          <img className="BIO_PIC" src="../projects/ctc2.jpg"/>
         </div>
        </section>

        <section className="LANGUAGE_WRAPPER">
            <ul className="LANGUAGES_CONTAINER">
              <li><SiHtml5/></li>
              <li><SiCss3/></li>
              <li><SiJavascript/></li>
              <li><SiReact/></li>
              <li><SiFigma/></li>
              <li><SiBlender/></li>
            </ul>
        </section>

        <section className="SKILLS_WRAPPER">
    

      
          <div className="SKILL">
            <div className="SERVICE_PIC_WRAPPER">
          <img className="BIO_PIC" src="../projects/ctc2.jpg"/>
              
            </div>


            <div className="SKILLS_TEXT_WRAPPER" >
            <h3>Web Design</h3>
            <p>whether you have no site or just want to redesign your old site<br/> I can create you a web home that <br/> will leave you pleased as well as have your clients trust you to deliver your a</p>
            </div>
          </div>

          <div className="SKILL">
            <div className="SERVICE_PIC_WRAPPER">
          <img className="BIO_PIC" src="../projects/ctc2.jpg"/>
              
            </div>
            <div className="SKILLS_TEXT_WRAPPER" >
            <h3>Product Modeling</h3>
            <p>Have an idea you want to see come to life? Using 3D software like blender will allow me to take your product to the next level with accurate modeling</p>
            </div>
          </div>

          <div className="SKILL">
            <div className="SERVICE_PIC_WRAPPER">
          <img className="BIO_PIC" src="../projects/ctc2.jpg"/>     
            </div>

            <div className="SKILLS_TEXT_WRAPPER" >
            <h3>Content Editing</h3>
            <p>whether you have no site or just want to redesign your old site<br/> I can create you a web home that <br/> will leave you pleased as well as have your clients trust you to deliver your a</p>
            </div>
          </div>

        </section>
        
        <section className="PROJECT_WRAPPER">
      
          <h2>Latest Work</h2>
          <article className="PROJECTS_CONTAINER">

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>

          <div>      
            <div>
             <p>Image</p>
            </div>
            <p>Title</p>
            <p>category</p>
          </div>
          </article>
        </section>

        <section className="ARTWORK_WRAPPER">
            <div>
              <div><p>image</p></div>
              <p>title</p>
            </div>
        </section>
        
        <section className="TESTIMONIAL_WRAPPER">
            <div>
              <p className="testimony">" HE SI A GREAT DEVELOPER"</p>

              <div className="CLIENT_PIC_WRAPPER">
                <p> image </p>
                <div>

                  <p>rating</p>
                  <p>name</p>
                  <p>site</p>
                </div>
              </div>
            </div>
        </section>

        <section className="CONTACT_WRAPPER">
          <div>
            <h2>Let's Work Together </h2>
            <p>contact text</p>
            <nav> 
              <p> social media bar</p>
            </nav>
          </div>

          <form>

          </form>
        </section>
      </main>
      <footer>
          footer
      </footer>
    </>
  );
}

export default App;
