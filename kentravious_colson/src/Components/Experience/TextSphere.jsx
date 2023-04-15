import React, { useEffect } from "react";
import {Center} from '@react-three/drei'
 import './TextSphere.scss'

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
     < >

      <div className="text-sphere" >
        <span className="tagcloud"></span>
      </div>
     </ >
    
  );
};

export default TextSphere;