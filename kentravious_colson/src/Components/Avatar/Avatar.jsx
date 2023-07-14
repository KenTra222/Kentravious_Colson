import React, { useRef, useEffect } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Camera } from 'three'
import {useControls} from 'leva'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'




export function Avatar(props,position, scale) {

  const {viewport } = useThree()
  

  const isMobile = window.innerWidth < 768
  const responsiveRatio = viewport.width / 12

  // const {headFollow, cursorFollow} = useControls({
  //   headFollow: false,
  //   cursorFollow: false
  // })

  const group = useRef()

  const { nodes, materials } = useGLTF('models/avatar0.glb')
  
  const {animations: Idle} = useFBX('animations/Idle.fbx')
  Idle[0].name = "Idle"

  const {actions} = useAnimations(Idle, group)

  // head follows the cursor
  useFrame((state)=>{

      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 5)
      group.current.getObjectByName("Head").lookAt(target)
  },[])

  //animation clip
  useEffect(() => {
    actions["Idle"].reset().play()
  }, [])
  
  




  return (
    <group {...props} dispose={null} ref={group} scale={isMobile? responsiveRatio : 1.85} position={[0, isMobile? -1: -3.39, 4]}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Avatar_Transparent.geometry} material={materials.Wolf3D_Avatar_Transparent} skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('models/avatar0.glb')
