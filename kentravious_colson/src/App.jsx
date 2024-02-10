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
      <header>

        <div>
          <p>Logo</p>
        </div>

        <nav>
          <div>
            <a>about</a>
          </div>
          <div>
            <a>work</a>
          </div>
          <div>
            <a>contact</a>
          </div>
        </nav>
      </header>

      <main>
         <div>
          <p> skill overview</p>
         </div>
         <div>
          <p> skill overview</p>
         </div>
         <div>
          <p> skill overview</p>
         </div>
      </main>
      <footer>
          footer
      </footer>
    </>
  );
}

export default App;
