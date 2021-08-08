import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { useSpring, a } from 'react-spring/three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {Canvas, extend, useThree, useFrame} from "react-three-fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BoxBufferGeometry } from 'three';
import Typist from 'react-typist';
import Sushi from '../Sushi/Sushi.jsx'





const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);



  return (
    
    <section id="hero" className="jumbotron">
     
      

      <Container>
      
      
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || ''}{' '}
           
              
            <Typist className="text-color-main" startDelay="1500">Daniel Peters UX-Designer</Typist>


           
           
            <p>based in Aichach Germany.</p>
          </h1>

          

        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
          
        </Fade>
        

        

        
</Container>
     
    </section>
  );
};

/*const Box = () => {

  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1,1,1],
    color: hovered ? 'hotpink' : 'gray',

  })

  
 

  return(
    <a.mesh 
    
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    onClick={() => setActive(!active)}
    scale={props.scale}
    castShadow
    
    
    >
      <ambientLight/>
      <spotLight position={[0, 50, 10]} penumbra={1}/>
      
        <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        <a.meshPhysicalMaterial attach="material" color={props.color}/>
      </a.mesh>
  )
  
}
const Controls = () => {
  const orbitRef = useRef();
  const{ camera, gl } = useThree();
  

  useFrame(() =>{
    orbitRef.current.update()
  }) 

  return <orbitControls   args={[camera, gl.domElement]} ref={orbitRef}/>
  
}
const Plane = () =>(
<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
<planeBufferGeometry attach="geometry" args={[100,100]}/>
        <a.meshPhysicalMaterial attach="material" color="white"/>
</mesh>
)

const Phone = () => {
  const[model, setModel] = useState();
  useEffect(() =>{
    new GLTFLoader().load("/scene.gltf", setModel)

  })
  console.log(model);
  return  model ? <primitive object={model.scene} /> : null
}*/

export default Header;
