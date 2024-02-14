import React from 'react'
// import PocketBase from 'pocketbase'
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { Box, Flex,Text, Heading, Input, Button, Link as ChakraLink,useToast,Stack } from "@chakra-ui/react";

import { Pacifico } from 'next/font/google';
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });



export default function login() {

//   const { data:session } = useSession();

  const router=useRouter();
  const toast = useToast();
  const [isLoading,setIsLoading]=useState(false);

    // if(session && session.user){
      // router.push('/feed');
    // }


  return (
    <Flex align="center" justify="center" height="100vh">
         <Box textAlign={'center'} border={'1px solid black'} overflow={'auto'} p={'8px'} w={'320px'} h={'480px'} borderWidth={1} borderRadius="md" shadow="lg">
        <h1 className={pacifico.className} style={{"marginBottom":"10px","textAlign":"center","fontSize":"30px"}} >
        BlendBazaar
        </h1>
        <Stack spacing={10}>
  <Input variant='outline' placeholder='Email' />
  <Input type='password' variant='outline' placeholder='Password' />
  <Input type='password' variant='outline' placeholder='Confirm Password' />
  <Button colorScheme='teal'>Sign up</Button>
</Stack>
      <Text margin={'auto'} fontSize={'sm'} display={'inline-block'}>Already have an account?</Text>
      <Link href={'/signin'} display={'inline-block'} fontSize={'sm'}><Text color='teal' fontWeight={'bold'} margin={'auto'} fontSize={'sm'} display={'inline-block'}>&nbsp;Login</Text></Link>
        <Button mt={'60px'} variant={'outline'} leftIcon={ <FcGoogle size="1.5em"/>}  colorScheme="teal" size="md" width="full">
      Continue with Google
        </Button>
        

      </Box>

    </Flex>
  )
}
