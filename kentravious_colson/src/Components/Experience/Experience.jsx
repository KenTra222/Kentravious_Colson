import React from "react";
import { Canvas } from "@react-three/fiber";
import ParticleSystem from "../ParticleSystem/ParticleSystem";
import skillsData from "../data/skills";

function Experience() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <ParticleSystem data={skillsData} />
    </Canvas>
  );
}

export default Experience;


