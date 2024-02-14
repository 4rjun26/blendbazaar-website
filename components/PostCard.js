import React from 'react'
// import axios from 'axios';
// import PocketBase from 'pocketbase'
import { useState,useEffect } from 'react'
import styles from '../styles/Feed.module.css'
import Head from 'next/head';
// import EmojiPicker from 'emoji-picker-react';
import { BsBookmark, BsBookmarkFill,BsEye,BsEmojiSmile,BsTrash, BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineHeart,AiOutlineEye  } from 'react-icons/ai';
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { AiFillHeart,AiOutlineInfoCircle,AiFillGithub } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { LiaShareSolid } from 'react-icons/lia';
import { SlBubble } from 'react-icons/sl';
// import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import Image from 'next/image';
// import { useSession,signIn } from 'next-auth/react';
import Link from 'next/link';
import FadeInCard from './FadeInCard'
import { Quicksand } from 'next/font/google';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {useGenerationStore} from '@/state/idea-generation';

// var $ = require( "jquery" );
import {
    Tag,
    TagLabel,
    Avatar,
    Input,
    Icon,
    Popover,PopoverCloseButton,PopoverBody,PopoverHeader,initialFocusRef,PopoverTrigger,PopoverContent,
    PopoverArrow,
    Button,
    InputRightElement,
    Show,
  InputGroup,
  useDisclosure ,
  Badge,
  Menu,MenuButton,MenuList,MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
   useToast,Text,Skeleton,Stack,InputLeftElement,Box,Flex,AlertDialog,Spinner,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,

    AlertDialogContent,
    AlertDialogOverlay,
     } from '@chakra-ui/react'

const arr=[1,2,3,4];
const quicksand = Quicksand({ subsets: ['latin'], weight: '700' });
var controls=false;
export default function PostCard() {
  useEffect(() => {
//     var containers= document.querySelectorAll( 'Feed_imgcont__KQ8q2' );
//   const scene = new THREE.Scene();
//   const camera=new THREE.PerspectiveCamera(45,container.offsetWidth/ container.offsetHeight,1,1000);
// camera.position.set(10,20,10);
// const dlight=new THREE.DirectionalLight(0x242424,50);
// dlight.position.set(0,1,0);
// dlight.castShadow=true;
// scene.add(dlight);
// const dlight2=new THREE.DirectionalLight(0x242424,50);
// dlight2.position.set(0,-1,0);
// dlight2.castShadow=true;
// scene.add(dlight2);
// const dlight3=new THREE.DirectionalLight(0x242424,50);
// dlight3.position.set(1,0,0);
// dlight3.castShadow=true;
// scene.add(dlight3);
// const dlight4=new THREE.DirectionalLight(0x242424,50);
// dlight4.position.set(-1,0,0);
// dlight4.castShadow=true;
// scene.add(dlight4);
// const plight=new THREE.PointLight(0xc4c4c4,5);
// plight.position.set(0,300,500);
// const plight2=new THREE.PointLight(0xc4c4c4,5);
// plight2.position.set(500,100,0);
// const plight3=new THREE.PointLight(0xc4c4c4,5);
// plight3.position.set(0,100,-500);
// const plight4=new THREE.PointLight(0xc4c4c4,5);
// plight4.position.set(-500,300,0);
//     scene.add(camera);

//     containers.forEach(container => {
//       const renderer = new THREE.WebGLRenderer({
//         canvas: container,
//         antialias: true  
//       });
//       renderer.setSize( container.offsetWidth, container.offsetHeight );
//     });
    
      

//       let loader = new GLTFLoader();
//       loader.load('scene.gltf',function(gltf){
//        gltf.scene.position.y=-0.5;
//         scene.add(gltf.scene);

//         animate();
//       }); 
   
//   controls=new OrbitControls(camera,renderer.domElement)
//   controls.enableDamping=true
//   controls.enablePan=false
//   controls.enableZoom=true
//   controls.autoRotate=true;
//   controls.autoRotateSpeed=5;
//   controls.minDistance=5;
//   controls.maxDistance=5;
//   controls.update();


// function animate(){
//   controls.update();
//   renderer.render(scene,camera);
//   requestAnimationFrame(animate);
// }


const containers = document.querySelectorAll('.Feed_imgcont__KQ8q2');
var ind=1;
containers.forEach(container => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 1000);
  camera.position.set(10, 20, 10);

  // Lights setup (same as before)
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
const plight2=new THREE.PointLight(0xc4c4c4,5);
plight2.position.set(500,100,0);
const plight3=new THREE.PointLight(0xc4c4c4,5);
plight3.position.set(0,100,-500);
const plight4=new THREE.PointLight(0xc4c4c4,5);
plight4.position.set(-500,300,0);
    scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: container,
    antialias: true
  });
  renderer.setSize(container.offsetWidth, container.offsetHeight);

  // Loader setup (same as before)

  let loader = new GLTFLoader();
  var s="model_"+ind+"/scene.gltf";
  ind++;
  loader.load(s, function (gltf) {
    gltf.scene.position.y = -0.5;
    scene.add(gltf.scene);

    animate();
  });

  // Controls setup (same as before)

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 5;
  // controls.minDistance = -5;
  // controls.maxDistance = 1;
  controls.update();

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
});

   },[]);
  const btnRef = React.useRef()
const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <>
      {/* Comments Drawer */}
  <Drawer
        isOpen={isOpen}
        size={'md'}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader textAlign={'center'} fontSize="md">Comments</DrawerHeader>

          <DrawerBody p={'3px'}>
            
              <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"xyz"} ml={-2} mr={2} />
              <TagLabel>{"xyz"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"This is a good video."}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"abc"} ml={-2} mr={2} />
              <TagLabel>{"abc"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"Who's watching this in 2024?? :)"}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"sdc"} ml={-2} mr={2} />
              <TagLabel>{"sdc"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"Only in Ohio!! :D"}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>


          </DrawerBody>

          <DrawerFooter display={'flex'}>
          
            <InputGroup>
            
             
        <Button variant='outline' color='teal' size='sm' id='addcomment'>
        Auto reply
        </Button>
    </InputGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>



      <div className={styles.feed} id='allsites'> 
      {arr.map((ar)=>(
                    // <FadeInCard >
                        <div  className={styles.postcard}>
                    <canvas id='cnvs' className={styles.imgcont}>             
                    </canvas>
                  
                    <p className={quicksand.className}>Post</p>
                   
                  
                  
                    <div className={styles.userinfo}>
 

<Button  mr={'auto'} display={'flex'} alignItems={'center'} colorScheme='teal' justifyContent={'space-around'} size={'xs'} variant={'outline'}> <Icon as={AiOutlineEye} />&nbsp;View</Button>
<Button onClick={onOpen} display={'flex'} alignItems={'center'} colorScheme='teal' justifyContent={'space-around'} size={'xs'} variant={'outline'}> <Icon as={BsCartCheck } />&nbsp;Buy</Button>                
                    
                    </div>
                    
                    <div id='likebtndiv' className={styles.likesave}>
                        <Text display={'flex'} alignItems={'center'} mr={'auto'} style={{"fontSize":"15px","color":"rgb(128,128,128)"}}>
                        Rs.999
                        </Text>
                        
                        <Button fontSize={'lg'} colorScheme='teal' bg={'none'} variant={'ghost'} _hover={'none'}><Icon as={AiOutlineHeart}/></Button>
                       
                        <Button fontSize={'lg'} colorScheme='teal' bg={'none'} variant={'ghost'} _hover={'none'}><Icon as={BsBookmark}/></Button>
                       
                    </div> 
                    
                    </div>
                  
                    // </FadeInCard>
                 
      ))}
              </div>
           
             
     </>
  )
}
