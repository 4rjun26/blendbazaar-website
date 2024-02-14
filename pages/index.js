import React from 'react'
import {useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head';

import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Link from 'next/link'
import { FiDatabase } from 'react-icons/fi';
import { BsFillGearFill } from 'react-icons/bs';
import { SiMaterialdesignicons } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { MdLanguage } from 'react-icons/md';
import { FaBrain } from 'react-icons/fa';

import { FiFigma } from 'react-icons/fi';
import { SiAdobe } from 'react-icons/si';
import { SiCanva } from 'react-icons/si';

import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

import { SiPhp } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

import { GrMysql } from 'react-icons/gr';
import { DiMongodb } from 'react-icons/di';

import { FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiProcessingfoundation } from 'react-icons/si';

import { SiTensorflow } from 'react-icons/si';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import { AiFillCloseCircle } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';

import Image from 'next/image';

// import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';

var controls,controlshero=false;
// var $ = require( "jquery" );
function index() {
  useEffect(() => {
    var container= document.getElementById( 'cnvs' );
  const scene = new THREE.Scene();
  const scenehero=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(45,container.offsetWidth/ container.offsetHeight,1,1000);
camera.position.set(10,20,10);

const camerahero=new THREE.PerspectiveCamera(45,window.innerWidth/ (window.innerHeight-100),1,1000);
camera.position.set(10,20,10);

const dlight=new THREE.DirectionalLight(0x242424,50);
dlight.position.set(0,1,0);
dlight.castShadow=true;
scene.add(dlight);
const dlight2=new THREE.DirectionalLight(0x242424,50);
dlight2.position.set(0,-1,0);
dlight2.castShadow=true;
scene.add(dlight2);
const dlight3=new THREE.DirectionalLight(0x242424,50);
dlight3.position.set(1,0,0);
dlight3.castShadow=true;
scene.add(dlight3);
const dlight4=new THREE.DirectionalLight(0x242424,50);
dlight4.position.set(-1,0,0);
dlight4.castShadow=true;
scene.add(dlight4);
const plight=new THREE.PointLight(0xc4c4c4,5);
plight.position.set(0,300,500);
scenehero.add(plight);
const plight2=new THREE.PointLight(0xc4c4c4,5);
plight2.position.set(500,100,0);
scenehero.add(plight2);
const plight3=new THREE.PointLight(0xc4c4c4,5);
plight3.position.set(0,100,-500);
scenehero.add(plight3);
const plight4=new THREE.PointLight(0xc4c4c4,5);
plight4.position.set(-500,300,0);
scenehero.add(plight4);
    scene.add(camera);
    scenehero.add(camerahero);
 let canvas=document.querySelector('#cnvs23');

    const renderer=new THREE.WebGLRenderer({
      canvas:container,
      antialias:true  
    });
    const rendererhero=new THREE.WebGLRenderer({
      canvas:canvas,
      antialias:true  
    });
    renderer.setSize( container.offsetWidth, container.offsetHeight );
     rendererhero.setSize(window.innerWidth,(window.innerHeight-100));
      

      let loader = new GLTFLoader();
      let loaderhero=new GLTFLoader();
      loaderhero.load('cyberpunk_laptop.gltf',function(gltf){
       gltf.scene.position.y=-0.5;
        scenehero.add(gltf.scene);

        animatehero();
      }); 
      loader.load('scene.gltf',function(gltf){
       gltf.scene.position.y=-0.5;
        scene.add(gltf.scene);

        animate();
      }); 
   
  controls=new OrbitControls(camera,renderer.domElement)
  controls.enableDamping=true
  controls.enablePan=false
  controls.enableZoom=true
  controls.autoRotate=true;
  controls.autoRotateSpeed=5;
  controls.minDistance=5;
  controls.maxDistance=5;
  controls.update();

  controlshero=new OrbitControls(camerahero,rendererhero.domElement)
  controlshero.enableDamping=true
  controlshero.enablePan=false
  controlshero.enableZoom=true
  controlshero.autoRotate=false;
  controlshero.minDistance=4;
  controlshero.maxDistance=5;
  controlshero.update();
function animate(){
  controls.update();
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
function animatehero(){
   controlshero.update();
  rendererhero.render(scenehero,camerahero);
  requestAnimationFrame(animatehero);
}

   },[]);

 
 
  return (
    <div className={styles.body} style={{"width":"100vw","background":"black","scrollBehavior":"smooth"}}>
    
     
         <Head>
         <link href='https://fonts.googleapis.com/css?family=Sora' rel='stylesheet' />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js" />
     </Head>
     
   
     
      <div className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>
      <canvas id='cnvs23' className={styles.canvas}>
      </canvas>
       <div className={styles.namecont}>
        <h1 id="a">Hi, I'm</h1><h1 style={{"color":"rgb(54, 46, 161)"}}> Arjun</h1>
        <p>Full Stack web developer, gymbro and more...</p>
      </div>
      
    </div>
    
{/* Hero section */}

    

{/* About section */}

<div className={styles.aboutsection} id="about" style={{"transitionDuration":"0.4s"}}>
      <div className={styles.aboutcont}>
        <h1>About</h1><h1 style={{"color":"rgb(54, 46, 161)"}}> Me</h1>
        <p>Got my degree from Sardar Patel Institute of Technology and actual coding skills from the Internet.
          I'm a skilled software developer with 6+ years of coding experience and have many projects in various
          languages. 
        </p>

        <div className={styles.cardsdiv}>
          <div className={styles.abtcard}>
            <div className={styles.techstack}>
              <p><FiFigma/></p>
              <p><SiAdobe/></p>
              <p><SiCanva/></p>
            </div>
            <h2><SiMaterialdesignicons/></h2>
            <h1>Web Designer</h1>
          </div>

          <div className={styles.abtcard}>
          <div className={styles.techstack}>
              <p><FaReact/></p>
              <p><SiNextdotjs/></p>
          </div>
            <h2><CgWebsite/></h2>
          <h1>Frontend Developer</h1>
          </div>

          <div className={styles.abtcard}>
          <div className={styles.techstack}>
              <p><GrMysql/></p>
              <p><DiMongodb/></p>
          </div>
          <h2><FiDatabase/></h2>
          <h1>Database Handling</h1>
          </div>

          <div className={styles.abtcard}>
          <div className={styles.techstack}>
              <p><SiPhp/></p>
              <p><FaNodeJs/></p>
          </div>
          <h2><BsFillGearFill/></h2>
          <h1>Backend Developer</h1>
          </div>
          <div className={styles.abtcard}>
          <div className={styles.techstack}>
              <p><FaJava/></p>
              <p><FaPython/></p>
              <p><SiProcessingfoundation/></p>
          </div>
          <h2><MdLanguage/></h2>
          <h1>Other Languages</h1>
          </div>
          <div className={styles.abtcard}>
          <div className={styles.techstack}>
              <p><SiTensorflow/></p>
          </div>
          <h2><FaBrain/></h2>
          <h1>Machine Learning</h1>
          </div>
        </div>
      </div>
    </div>


{/* Works section */}
<div className={styles.contactsection} id="works" style={{"transitionDuration":"0.4s"}}>
        <div className={styles.contactcont}>
        <h1>My</h1><h1 style={{"color":"rgb(54, 46, 161)"}}> Works</h1>
          <div className={styles.worksdiv}>
            {/* Asteroids */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/asteroids.JPG'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>Asteroids</h1>
                <p>Retro style Asteroids game with score and highscore tracker. Uses basic laws of physics.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(1)}>View source code</button>
              </div>
            </div>

            {/* RayCasting */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/raycast.JPG'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>Ray Casting</h1>
                <p>Simple version of how raycasting works in FPS games. Simple maths is used to get the
                  POV of the torch/camera.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(2)}>View source code</button>
              </div>
            </div>

            {/* Maze Generator */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/maze.JPG'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>Maze Generator</h1>
                <p>A custom maze generator with always a unique solution.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(3)}>View source code</button>
              </div>
            </div>

            {/* Tetris */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/Tetris.png'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>Tetris</h1>
                <p>Retro style tetris game clone.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(4)}>View source code</button>
              </div>
            </div>

            {/* 2048 */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/2048.JPG'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>2048</h1>
                <p>Slide blocks and get till 2048.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(5)}>View source code</button>
              </div>
            </div>

            {/* Terrain */}
            <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/terrain.JPG'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>Terrain Generator</h1>
                <p>Generates rocky, random, custom terrain infinitely. Speed depends on the mouse position.
                  Runs on Processing software.
                </p>
                <button onClick={()=>openoverlay(6)}>View source code</button>
              </div>
            </div>

             {/* Fnf */}
             <div className={styles.work}>
              <div className={styles.pic}>
                <Image className={styles.image} src={'/fnf.jpg'} alt="bruh" width={1000} height={1000} />
              </div>
              <div className={styles.info}>
                <h1>FNF Bot</h1>
                <p>Bot that plays Friday Night Funkin' perfectly on hell mode.
                  Made using pure Java.
                </p>
                <button onClick={()=>openoverlay(7)}>View source code</button>
              </div>
            </div>

          </div>
        </div>
        </div>
{/* Contact section */}

    <div className={styles.contactsection} id="contactus" style={{"transitionDuration":"0.4s"}}>
        <div className={styles.contactcont}>
        <h1>Get In</h1><h1 style={{"color":"rgb(54, 46, 161)"}}> Touch</h1>
           <div className={styles.contactbox}>
          <div className={styles.box}>
            <input id="name" type='text' className={styles.name} placeholder='Your name'/>
            <input id="email" type='email' className={styles.email} placeholder='Your email'/>
            <textarea id="message" className={styles.query} placeholder='Your message'> 
            </textarea>
          <button onClick={()=>notify()} className={styles.sendbtn}>Send</button>
          <div className={styles.socialcont}>
            <Link href={'https://github.com/4rjun26'} className={styles.socials}><AiFillGithub/></Link>
            <Link href={'https://www.instagram.com/arjun_shinde_26/'} className={styles.socials}><AiFillInstagram/></Link>
            <Link href={'https://www.youtube.com/@arjuns.3752'} className={styles.socials}><AiFillYoutube/></Link>
          </div>
          <p><SiGmail/> arjundshinde26@gmail.com</p>
          </div>
          <canvas className={styles.box} id='cnvs' style={{"border":"none"}}>

          </canvas>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default index