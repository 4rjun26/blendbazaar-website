import React, { use } from 'react'

// import { useLinkPreview } from "get-link-preview";
// import PocketBase from 'pocketbase'
// import axios from 'axios';
// import { Scrollbars } from 'react-custom-scrollbars';
import { MdOutlinePersonSearch,MdOutlineExplore,MdOutlineGroup,MdBookmarkBorder,MdOutlineBookmarks } from 'react-icons/md';
import { TbSquarePlus } from 'react-icons/tb';
import styles from '../styles/Feed.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { BiLeftArrowAlt } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { BsBookmarkCheck,BsBookmark, BsLink45Deg } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TbCards } from 'react-icons/tb';
// import {DebounceInput} from 'react-debounce-input';
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';

import {
    Avatar,
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Spinner,
    Tag,TagLabel,Input,
  Menu,MenuButton,MenuList,MenuItem,
    Button,
    Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator,Box,Flex,InputGroup,InputLeftElement,InputRightElement,
    TagCloseButton,Alert,useToast,
    AlertIcon,Tooltip,Text,Show,Progress,Textarea,
  } from '@chakra-ui/react'
  

const pacifico = Roboto({ subsets: ['latin'], weight: '300' });
 function SideNavBar() {
  // var { getLinkPreviewData, loading, error, data } = useLinkPreview();
  const router = useRouter();
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const toast = useToast();
  const [userlist, setUserList] = useState([]);
  const [isPP, setIsPP] = useState(true);
  const [isSearchingUser,setisSearchingUser]=useState(false);

  const [postTags,setPostTags]=useState([]);
  const [postPeople,setPostPeople]=useState([]);
  const [previewImage,setPreviewImage] = useState('/image_placeholder.png');

  var toast_info={
    title: 'New post added.',
    status: 'success',
    duration: 1000,
    isClosable: true,
  }

  
  async function stopedTyping(){
    setisSearchingUser(true);
    const elem=document.getElementById('usernamesrch');
    if(elem.value.length!=0){
    const link='http://192.168.43.43:8090/api/collections/accounts/records?filter=(username~"'+elem.value+'")';
    const res=await fetch(link);
    const data=await res.json();
      setUserList(data.items);
    }
    else{
      setUserList([]);
    }
    setisSearchingUser(false);
  }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isPostOpen, onOpen: openPost, onClose: closePost } = useDisclosure();
    const { isOpen: isFrOpen, onOpen: openFr, onClose: closeFr } = useDisclosure();

    const btnRef = React.useRef()

    // add post
    const copyImage= async () => {
setisSearchingUser(true);
      const pb = new PocketBase("http://192.168.43.43:8090");
      await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");
     

            var clist=(postPeople.join());
            if(clist.length>0){
              clist=clist+',arjun26';
            }
            else{
              clist='arjun26';
            }
          const tlist=postTags.join();
const wlink=document.getElementById('websitelink');
const wname=document.getElementById('websitename');
          const postdata = {
            "serial": 0,
            "name": wname.value,
            "comments": "",
            "link": wlink.value,
            "creators": clist,
            "likedppl": "",
            "savedppl": "",
            "tags": tlist,
        };
        
        const record = await pb.collection('posts').create(postdata);

        setisSearchingUser(false);
       closePost();
        toast(
          toast_info
        )
        router.push('/feed');
        
    }

    function changeOption(ind){
        // if(ind==0){
        //     router.replace('/feed'); 
        // }
        // else if(ind==1){
        //     router.push('/saved'); 
        // }
         if(ind==2){
          router.push('/addsite');
        }
        if(ind==1){
          router.push('/saved');
        }
        // else if(ind==5){
        //     router.replace({
        //         query: {getProfile:"arpitjain3"},
        //      }, undefined, { scroll: false });
        // }
    }

    async function checkIfPresent(){
      setisSearchingUser(true);
      const elem=document.getElementById('userinput');
      if(elem.value.length>0){
const pb = new PocketBase('http://192.168.43.43:8090');
const resultList = await pb.collection('accounts').getList(1, 50, {
  filter: 'username = "'+elem.value+'"',
});
if(resultList.items.length>0){
  setIsPP(true);
}
else{
  setIsPP(false);
}
}

setisSearchingUser(false);
    }

  
    function addTag(){
      const elem=document.getElementById('taginput');
      if(elem.value.length>0 && postTags.includes(elem.value)==false)
      setPostTags([...postTags,elem.value]);
      elem.value="";
    }
    function removeTag(ind){
      const updatedTags = [...postTags]; // Create a shallow copy of the postTags array
      updatedTags.splice(ind, 1); // Remove the element at the 'ind' index from the copy
      setPostTags(updatedTags);
    }


    function addPeople(){
      const elem=document.getElementById('userinput');
      if(elem.value.length>0 && postPeople.includes(elem.value)==false)
      setPostPeople([...postPeople,elem.value]);
      elem.value="";
    }
    function removePeople(ind){
      const updatedTags = [...postPeople]; // Create a shallow copy of the postTags array
      updatedTags.splice(ind, 1); // Remove the element at the 'ind' index from the copy
      setPostPeople(updatedTags);
    }

  return (
    <div>
{/* Friends */}
<Show breakpoint='(max-width: 900px)'>
<Drawer
        isOpen={isFrOpen}
        placement='bottom'
        onClose={closeFr}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'white'}  borderTopLeftRadius={'20px'} borderTopRightRadius={'20px'} >
          <DrawerCloseButton color={'white'} />
          <DrawerHeader fontSize={'md'} textAlign={'center'}>People you follow</DrawerHeader>

          <DrawerBody>
          
    
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
</Show>

{/* Add Post */}
<Drawer
        isOpen={isPostOpen}
        placement='right'
        onClose={closePost}
        size='md'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'white'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader fontSize={'md'} textAlign={'center'}>Create Post
          
          </DrawerHeader>

          <DrawerBody>
        

          <Box w={'full'} h={'full'}>
          <Flex w={'full'} justifyContent={'left'} alignItems={'center'} >
          <Button ml={'auto'} variant={'unstyled'}  onClick={copyImage} isLoading={isSearchingUser}>Post</Button>
          </Flex>
          <Box w={'320px'} h={'210px'} m={'auto'} borderRadius="10px">
              <label htmlFor='image'>
              <Image style={{"width":"100%","height":"100%","objectFit":"cover","borderRadius":"10px"}} src={previewImage} width={100} height={100} alt='placeholder image'/>
            
              </label>
              
              <input id='image'
              name='image'
              type='file'
              accept='images/*'
              style={{"display":"none"}}
              onChange={(event)=>{
                if(event.target.files[0]){
                  const file=event.target.files[0];
                  const reader=new FileReader();
                  reader.onload=()=>{
                      setPreviewImage(reader.result.toString());
                  }
                  reader.readAsDataURL(file);
                  
                }
              }}
              />
             
           </Box>

          <InputGroup mt={'20px'}>
    <Input
           style={{"paddingRight":"30px"}}
         type='text' id='websitelink' fontSize={'sm'}  variant='flushed' placeholder='Link of your website'
          />
  </InputGroup>

          <Input fontSize={'sm'} mt={'10px'} id='websitename' type='text' variant='flushed' placeholder='Site Name' />
          
          
  <InputGroup mt={'20px'} mb={'10px'}>
      <Input
        pr='4.5rem'
       type='text'
        placeholder='Enter Tag'
        variant={'flushed'}
        fontSize={'sm'}
        id='taginput'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={addTag}>
         Add
        </Button>
      </InputRightElement>
    </InputGroup>
    <Tooltip hasArrow label='Tags are useful for searching. We recommend adding relevant tags for better search results.' placement='top' bg='teal' borderRadius={'10px'}>
  <Button variant={'unstyled'} size={'xs'} color={'rgb(200,200,200)'}>Why use tags?</Button>
</Tooltip>
    <Box>
    {postTags.map((tag,index)=>(
         <Tag
         size={'md'}
         variant='outline'
         colorScheme='purple'
         m={'3px'}
       >
         <TagLabel>{tag}</TagLabel>
         <TagCloseButton onClick={()=>removeTag(index)} />
       </Tag>
    ))}
    </Box>


    <InputGroup mt={'20px'} mb={'10px'}>
    {/* <DebounceInput
          minLength={1}
          element={Input}
          debounceTimeout={500}
          autoComplete='off'
          type='search'
          onChange={checkIfPresent}
          pr={'4.5rem'}
         placeholder='Add People'
         variant={'flushed'}
         fontSize={'sm'}
         id='userinput'
          /> */}
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={addPeople} isLoading={isSearchingUser} isDisabled={!isPP}>
         Add
        </Button>
      </InputRightElement>
    </InputGroup>
    <Tooltip hasArrow label='If you have a group project you can tag people and this post will be added to their profile as well.' placement='top' bg='teal' borderRadius={'10px'}>
  <Button variant={'unstyled'} fontSize={'lg'} color={'rgb(200,200,200)'}><Icon as={AiOutlineQuestionCircle}/></Button>
</Tooltip>
    {
    isPP==false ? 
    <Alert status='error' size={'xs'} borderRadius={'10px'} color={'rgb(43,43,43)'}>
    <AlertIcon />
    Username not found
  </Alert>
      :
      <></>
    }
    <Box>
    {postPeople.map((tag,index)=>(
         <Tag mb={'5px'} mt={'5px'} size='lg' width={"100%"} colorScheme='white'  fontSize='15px'>
         <Avatar src={'/avatars/avatar_'+tag+'.jpg'} size='sm' name={tag} ml={-3} mr={2} />
         <TagLabel>{tag}</TagLabel>
         <TagCloseButton onClick={()=>removePeople(index)} />
       </Tag>
    ))}
    </Box>
          </Box>

          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>


{/* Search user */}
       <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='md'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'white'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader>Seach User</DrawerHeader>

          <DrawerBody>
          {/* <DebounceInput
          minLength={2}
          element={Input}
          debounceTimeout={500}
          autoComplete='off'
          type='search'
          onChange={stopedTyping}
          id='usernamesrch' placeholder='Type here...'
          /> */}
          {isSearchingUser?
           <Spinner
  thickness='4px'
  speed='0.6s'
  color='teal'
  size='lg'
  margin={'auto'}
  marginTop={'20px'}
/> 
         : 
            <div style={{"textAlign":"left"}}>
            

       {userlist.map((user,index)=>(
            <Link key={index} href={'/profile/'+user.username} >
            <Tag mb={'5px'} mt={'5px'} _hover={{'background':"rgb(42,42,42)"}} size='lg' width={"100%"} colorScheme='white'  fontSize='15px'>
          <Avatar src={'/avatars/avatar_'+user.username+'.jpg'} size='sm' name={user.username} ml={-3} mr={2} />
          <TagLabel>{user.username}</TagLabel>
        </Tag>
            </Link>
        ))}

            </div>
            }
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className={styles.bottomnavbar}>
        <Button color={'rgb(242,242,242)'} onClick={()=>{changeOption(0)}} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineExplore}/>
        <span>Explore</span>
        </Button>
 
        <Button color={'rgb(242,242,242)'}  onClick={onOpen} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlinePersonSearch}/>
        <span>Search</span>
        </Button>
 
 
        <Button color={'rgb(242,242,242)'}  onClick={openPost} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={TbSquarePlus}/>
        <span>Add post</span>
        </Button>
 
        {/* <Menu> */}
  <Button onClick={openFr} color={'rgb(242,242,242)'} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineGroup}/>
  <span>Followings</span>
  </Button>

 
        <Button color={'rgb(242,242,242)'}   onClick={()=>{changeOption(1)}}  flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineBookmarks}/>
        <span>Saved</span>
        </Button>
 
      </div>
         <div className={styles.menu}>
                {/* <Scrollbars 
                autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
                universal={true} style={{ "width":"100%", "height":"100%"}}> */}
                    <Button h={'50px'} bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={()=>{changeOption(0)}} display={'flex'} justifyContent={'left'} w={'full'} className={pacifico.className}><Icon style={{"scale":"1.3"}} as={MdOutlineExplore}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore</Button>
                    <Link href={'/saved'}><Button  h={'50px'}   bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'}  w={'full'}   display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={MdOutlineBookmarks}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saved</Button></Link>
                    <Button   h={'50px'}  bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={openPost}  w={'full'}   display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={TbSquarePlus}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add model</Button>
                   <Button   h={'50px'}  bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={onOpen}  w={'full'}  display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={MdOutlinePersonSearch}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search</Button>
                    
                    <div className={styles.followingsdiv}>
                    <Tabs position="relative" isFitted  variant="unstyled">
    <TabList>
      <Tab fontSize={'sm'} color={'white'}>People you follow</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="1px"
      bg="white"
      borderRadius="1px"
      w={'full'}
    />
    <TabPanels>
      <TabPanel>
      
      </TabPanel>
     
    </TabPanels>
  </Tabs>
                    
                    </div>
                    {/* </Scrollbars> */}
                </div>
    </div>
  )
}

export default SideNavBar

// export async function getServerSideProps(router) {

//     const client = await MongoClient.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const db = client.db(process.env.DB_NAME);
//     var categories=db.collection('posts');
//     var accs=db.collection('accounts');

//     var f=[]; //following
//         var ac= await accs.find({"username":"arjun26"},{"following":1}).toArray();
//         ac.forEach(function(obj){
//             f=obj.following;
//         })
  
//     var followings=[];
//     followings=await accs.find({serial: { $in: f}}).toArray();
//     console.log(followings);
//          client.close();
  
//     return {
//       props: {
//           followings: followings.map((following) => ({
//             ...following,
//             _id: following._id.toString(),
//           })),
//           revalidate: 1,
//         },

//     };
//   }