"use client";

import { Avatar, Badge, Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Repos from './Repos';

const UserProfile = ({userData}) => {
  return (
    <>
    <Flex my={16} border={"2px solid"} borderColor={"green.400"} borderRadius={5} padding={8}>
        <VStack gap={5}>
            <Avatar size={'2xl'} name={userData.name} src={userData.avatar_url}/>
            <Button colorScheme='teal' >
                <a href={userData.html_url} target='_blank'>
                 Visit Profile
                </a>

            </Button>

        </VStack>
        <VStack ml={8} alignItems={'self-start'}>
            <Flex gap={4}>
                <Badge fontSize={"0.9rem"} colorScheme='facebook' >
                    Public Repos: {userData.public_repos}
                </Badge>
                <Badge fontSize={"0.9rem"} colorScheme='pink' >
                    Public Gists: {userData.public_gists}
                </Badge>
                <Badge fontSize={"0.9rem"} colorScheme='cyan' >
                    Followers: {userData.followers}
                </Badge>
                <Badge fontSize={"0.9rem"} colorScheme='purple' >
                    Following: {userData.following}
                </Badge>

            </Flex>
            
            <Text fontSize={'2xl'} fontWeight={'bold'} mt={4} color={"green.400"}>
              {userData.name}

            </Text>

            <Text fontSize={'md'} fontWeight={'bold'} mt={4} color={"green.600"}>
              {userData.bio}

            </Text>

            <Box>
               <Text>
              <Text as={'span'} fontWeight={'bold'} color={'green.200'} mr={1}>
               Company:
              </Text>
              {userData.company || "Not Specified"}

              </Text> 
                 

           
               <Text>
              <Text as={'span'} fontWeight={'bold'} color={'green.200'} mr={1}>
               Location:
              </Text>
              {userData.location || "Not Specified"}

              </Text> 
                 

            
               <Text>
              <Text as={'span'} fontWeight={'bold'} color={'green.200'} mr={1}>
               Member Since:
              </Text>
              {new Date(userData.created_at).toLocaleDateString()}

              </Text> 
                 

            </Box>


        </VStack>
    </Flex>

    <Repos reposurl={userData.repos_url} />
    </>
  )
}

export default UserProfile