"use client";
import { SpinnerIcon } from '@chakra-ui/icons';
import { Flex, Spinner, Text, Toast, useToast, Link, Badge,Button} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'


const Repos = ({reposurl}) => {
    const toast=useToast();
    const[repos, setRepos]=useState([]);
    const[loading, setLoading]=useState(false);
    const[showMore, setShowMore]=useState(false);
    console.log('repos are:', repos);

useEffect(
    ()=>{
        const fetchRepos= async()=>{
            try {
              const res= await fetch(reposurl);
              const data= await res.json();
              if(data.message) throw new Error(data.message);
              setRepos(data);
              setLoading(true);
                
            } catch (error) {
                toast({
                    title: "Error",
                    description: error.message === "Not Found" ? "User does not exist!" : error.message,
                    duration: 3000,
                    isClosable: true,
                    status: "error",
                });
            }
            finally {
                setLoading(false);
            }
            
        }
        fetchRepos();
    
    }, [reposurl, toast])

  return (
    <>
    <Text textAlign={'center'} letterSpacing={1.5} fontSize={'3xl'} fontWeight={'bold'} mt={4}color={'green.400'} >
     Repositories
    </Text>
    {loading && (
        <Flex justifyContent={'center'} >
            <Spinner size={'xl'} my={4}>

            </Spinner>

        </Flex>
    )}
    {repos.sort((a,b)=>b.stargazers_count-a.stargazers_count).map((repo,idx) =>{
        if(idx>4 && !showMore) return null;
        return(
            <Flex key={repo.id} padding={4} bg={'whiteAlpha.200'} _hover={{bg:"whiteAlpha.400"}} my={4} px={4} gap={4}
            borderRadius={4} transition={"all 0.3s ease"} justifyContent={"space-between"}  alignItems={"center"}>
    
               <Flex flex={1} direction={"column"}>
                <Link href={repo.html_url}>
                    {repo.name}
                </Link>
                <Badge fontSize={"0.7rem"} colorScheme='teal' w={'min-content'} textAlign={'center'} px={1} mt={1}>
                Language: {repo.language}
    
                </Badge>
                </Flex> 
                <Flex flex={1} gap={4} ml={6}>
                    <Badge flex={1} fontSize={'0.9rem'} colorScheme='orange' textAlign={'center'}>
                        Stars: {repo.stargazers_count}
    
                    </Badge>
                    <Badge flex={1} fontSize={'0.9rem'} colorScheme='pink' textAlign={'center'}>
                        Forks: {repo.forks_count}
    
                    </Badge>
                    <Badge flex={1} fontSize={'0.9rem'} colorScheme='cyan' textAlign={'center'}>
                        Stars: {repo.watchers_count}
    
                    </Badge>
                </Flex>
             
            </Flex>
        )
    }
      

    )}

{showMore && (
				<Flex justifyContent={"center"} my={4}>
					<Button size='md' colorScheme='whatsapp' onClick={() => setShowMore(false)}>
						Show Less
					</Button>
				</Flex>
			)}

			{!showMore && repos.length > 5 && (
				<Flex justifyContent={"center"} my={4}>
					<Button size='md' colorScheme='whatsapp' onClick={() => setShowMore(true)}>
						Show More
					</Button>
				</Flex>
			)}


    </>
  );
};

export default Repos