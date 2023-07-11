import {useRef}  from 'react'
import { TextureLoader } from 'three';
import { Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const ImageCube = () => {

    const groupPhotoref = useRef()

    const devPic = '/devPics/headshot3.png'
    const left  =  '/devPics/avatar0.jpeg'
    const right = '/devPics/headshot4.png'
    const back =  '/devPics/headshot6.png'
    const top = '/devPics/headshot5.png'
    const bottom = '/devPics/avatar1.png'
                
    const texture = new TextureLoader().load(devPic)
    const texture1 = new TextureLoader().load(left)
    const texture2= new TextureLoader().load(right)
    const texture3 = new TextureLoader().load(back)
    const texture4 = new TextureLoader().load(bottom)
    const texture5 = new TextureLoader().load(top)
  
    useFrame(({clock}) => {
      const elapsedTime = clock.getElapsedTime()
      groupPhotoref.current.rotation.y = elapsedTime * 0.40
      groupPhotoref.current.rotation.x = elapsedTime * 0.1

    })
    
  return (
    < >
    <Center>

        <group scale={0.7} ref={groupPhotoref}>

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