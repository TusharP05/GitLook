import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    useToast,
} from '@chakra-ui/react';

const Search = ({setUserData, setLoading}) => {
    const toast= useToast()
    const [query, setQuery] = useState('');
   
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com/users/${query}`);
            const data = await response.json();

            
            if(data.message){
                return toast({
                    title: "Error",
                    description: data.message==="Not Found" ? "User does not exist!" : data.message,
                    duration:3000,
                    isClosable:true,
                    status:"error",

                });

            }
            setUserData(data);


        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
            setIsLoading(false);
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Type a GitHub username</FormLabel>
                    <Input
                        type='text'
                        placeholder='Type a GitHub username'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <FormHelperText>And find it on GitHub.</FormHelperText>
                    <Button
                        size='md'
                        type='submit'
                        colorScheme='teal'
                        mt={4}
                        disabled={!query}
                        opacity={!query ? 0.5 : 1}
                        isLoading={isLoading}
                        loadingText='Submitting'
                    >
                        Search
                    </Button>
                </FormControl>
            </form>

          
        </Box>
    );
};

export default Search;
