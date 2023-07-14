import {useRef}  from 'react'
import { TextureLoader } from 'three';
import { Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber'



const ImageCube = () => {

  const {viewport } = useThree()
  const isMobile = window.innerWidth < 768
  const responsiveRatio = viewport.width / 12

    const groupPhotoref = useRef()

    const devPic = '/devPics/headshot3.png'
    const left  =  '/pics/lorenzo-herrera.jpg'
    const right = '/pics/omk.jpg'
    const back =  '/devPics/headshot6.png'
    const top = '/pics/georgie-cobbs.jpg'
    const bottom = '/pics/michael-dziedzic.jpg'
                
    const texture = new TextureLoader().load(devPic)
    const texture1 = new TextureLoader().load(left)
    const texture2= new TextureLoader().load(right)
    const texture3 = new TextureLoader().load(back)
    const texture4 = new TextureLoader().load(bottom)
    const texture5 = new TextureLoader().load(top)
  
    useFrame(({clock}) => {
      const elapsedTime = clock.getElapsedTime()
      groupPhotoref.current.rotation.y = elapsedTime * 0.40
      groupPhotoref.current.rotation.x = elapsedTime * 0.2

    })
    
  return (
    < >
    <Center>

        <group scale={isMobile? responsiveRatio : 0.7} position={[0 , isMobile? 0 : 0, isMobile? -11: -10]} ref={groupPhotoref}>

        <mesh scale={4}  position={[0, 0, 2]}>
        <planeGeometry/>
        <meshBasicMaterial map={texture}/>
        </mesh>

        <mesh scale={4}  position={[-2, 0, 0]} rotation={[0, Math.PI * 1.5, 0 ]}>
        <planeGeometry/>
        <meshBasicMaterial map={texture1}/>
        </mesh>

        <mesh scale={4} position={[2, 0, 0]} rotation={[0, Math.PI * .5, 0 ]} >
        <planeGeometry/>
        <meshBasicMaterial map={texture2}/>
        </mesh>

        <mesh scale={4} position={[0, 0, -2]} rotation={[0, Math.PI * 1, 0 ]} >
        <planeGeometry/>
        <meshBasicMaterial map={texture3}/>
        </mesh>

        <mesh scale={4}  position={[0, 2, 0]} rotation={[Math.PI * 1.5, 0, 0 ]}>
        <planeGeometry/>
        <meshBasicMaterial map={texture4}/>
        </mesh>

        <mesh scale={4} position={[0, -2, 0]} rotation={[Math.PI * .5, 0, 0 ]} >
        <planeGeometry/>
        <meshBasicMaterial map={texture5}/>
        </mesh>

        </group>
    </Center>
    </ >
  )
}

export default ImageCube