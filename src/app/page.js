"use client";
import { Button, Container, Text } from '@chakra-ui/react'

import Body from './components/Body'
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserProfile from './components/UserProfile'
import { useState } from 'react';
import Footer from './components/Footer';


export default function Home() {
  const[userData, setUserData]= useState(null);
  const[loading, setLoading]= useState(false);
  console.log(userData)
  return (
   <Container maxW='container.lg'> 

   <Navbar/>
   <Text  fontSize='4xl' textAlign='center'>
    Search Users on Github
    </Text>

    <Search setUserData={(res)=>setUserData(res)} setLoading={setLoading} />

    
  {userData &&<UserProfile userData={userData} />}

  
  
    </Container>

   



  )
}
