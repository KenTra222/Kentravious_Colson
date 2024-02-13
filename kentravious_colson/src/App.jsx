import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
 
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
          <img className="BIO_PIC" src="../public/projects/ctc2.jpg"/>
         </div>
        </section>

        <section className="LANGUAGE_WRAPPER">
            <ul className="LANGUAGES_CONTAINER">
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>React</li>
              <li>Figma</li>
              <li>Blender</li>
            </ul>
        </section>

        <section className="SKILLS_WRAPPER">
          <div>
            <div className="SERVICE_PIC_WRAPPER">
              <p>image</p>
            </div>
            <p>Title</p>
            <p>description</p>
          </div>

          <div>
           <div className="SERVICE_PIC_WRAPPER">
              <p>image</p>
            </div>
            <p>Title</p>
            <p>description</p>
          </div>

          <div>
            <div className="SERVICE_PIC_WRAPPER">
              <p>image</p>
            </div>
            <p>Title</p>
            <p>description</p>
          </div>
        </section>
        
        <section className="PROJECT_WRAPPER">
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
        </section>

        <section className="ARTWORK_WRAPPER">
            <div>
              <div><p>image</p></div>
              <p>title</p>
            </div>
        </section>
        
        <section className="TESTIMONIAL_WRAPPER">
            <div>
              <p>testimony</p>

              <div>
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
