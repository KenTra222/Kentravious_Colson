import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text3D} from '@react-three/drei'

class TextMaterial extends THREE.MeshBasicMaterial {
    constructor(parameters) {
      super(parameters);
      this.type = 'TextMaterial';
    }
  }

const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

function ParticleSystem({ data }) {
  const particlesRef = useRef();
  const colors = data.map(() => new THREE.Color("#64ffda"));
  const positions = data.map(() => [
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * 10 - 5
  ]);

  useFrame(() => {
    const particles = particlesRef.current.geometry.vertices;
    particles.forEach((particle, i) => {
      particle.x = positions[i][0] + Math.sin(i * 0.3);
      particle.y = positions[i][1] + Math.cos(i * 0.3);
      particle.z = positions[i][2] + Math.sin(i * 0.5);
    });
    particlesRef.current.geometry.verticesNeedUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <geometry
        attach="geometry"
        vertices={Array(data.length)
          .fill()
          .map((_, i) => new THREE.Vector3())}
      />
      <pointsMaterial
        attach="textMaterial"
        size={0.2}
        sizeAttenuation={false}
        transparent={true}
        opacity={0.8}
        vertexColors={THREE.VertexColors}
      />
      {data.map((item, i) => (
        <Text3D >
        Hello world!
        <meshNormalMaterial />
      </Text3D>
      ))}
    </points>
  );
}

export default ParticleSystem;
