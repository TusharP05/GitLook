"use client"
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      p={4}
     
      bg="rgba(0, 0, 0, 0.5)" // Adjust the alpha value as needed (0 for fully transparent, 1 for fully opaque)
      color="white"
      zIndex={1}
      textAlign="center"
      mt={8}
      position="relative"
      bottom={0}
      left={0}
      width="100%"
      pointerEvents="none"
    >
      <Text fontSize="5xl" fontWeight="bold" color={'cyan'}>
        GitLook
      </Text>
      <Text mt={2} fontSize="sm" color={'teal.500'} fontWeight={'bold'}>
        by Madhavi
      </Text>
    </Box>
  );
};

export default Footer;
