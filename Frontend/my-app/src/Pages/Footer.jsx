import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box backgroundColor={"#B0BEE0"}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} style={{width:"100%",height:"auto"}}>
    
      <Container as={Stack} maxW={'6xl'} py={10} style={{width:"100%",height:"auto"}}>
       
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8} style={{width:"100%",height:"auto"}}>
            <Flex >
            <Box style={{width:"35%",height:"auto"}}>
            <Flex>
          <Stack spacing={6}>
            <Box>
              <h1 style={{color:"#E040FB"}}><i>~GAMEZY~</i></h1>
            </Box>
            <Stack direction={'row'} spacing={6}>
              <br /><br />
              <div style={{display:"flex",justifyContent:"space-around",width:"40%",margin:"auto"}}>
                <sp style={{fontSize:"25px"}}><FaTwitter /> </sp>
                <sp style={{fontSize:"25px"}}> <FaYoutube /></sp>
                <sp style={{fontSize:"25px"}}><FaInstagram /></sp>
              </div>
            
                              
                
            </Stack>
            <Text style={{paddingTop:"80px",fontSize:"15px",paddingLeft:"45px",backgroundColor:"#B0BEE0"}}>
            Copyright © 2023, GAMEZY Limited. All Rights Reserved
            </Text>
          </Stack>
          </Flex>
          </Box>
         
            <Box style={{width:"65%",height:"auto",display:"flex"}}>
            <Flex>
          <Stack align={'flex-start'} style={{paddingLeft:"170px",}}>
            <h4 style={{backgroundColor:"#B0BEE0",padding:"0px"}}>Product</h4>
            <Link textDecoration={"none"} href={'#'}>Overview</Link>
            <Link textDecoration={"none"} href={'#'}>Features</Link>
            <Link textDecoration={"none"}  href={'#'}>Tutorials</Link>
            <Link textDecoration={"none"}  href={'#'}>Pricing</Link>
            <Link textDecoration={"none"}  href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'} style={{paddingLeft:"80px"}}>
          <h4 style={{backgroundColor:"#B0BEE0",padding:"0px"}}>Company</h4>
            <Link textDecoration={"none"}  href={'#'}>About</Link>
            <Link textDecoration={"none"}  href={'#'}>Press</Link>
            <Link textDecoration={"none"}  href={'#'}>Careers</Link>
            <Link  textDecoration={"none"} href={'#'}>Contact</Link>
            <Link textDecoration={"none"}  href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'} style={{paddingLeft:"80px"}}>
          <h4 style={{backgroundColor:"#B0BEE0",padding:"0px"}}>Support</h4>
            <Link textDecoration={"none"}  href={'#'}>Help Center</Link>
            <Link textDecoration={"none"}  href={'#'}>Terms of Service</Link>
            <Link textDecoration={"none"}  href={'#'}>Legal</Link>
            <Link textDecoration={"none"}  href={'#'}>Privacy Policy</Link>
            <Link textDecoration={"none"}  href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'} style={{paddingLeft:"80px"}}>
          <h4 style={{backgroundColor:"#B0BEE0",padding:"0px"}}>Follow Us</h4>
            <Link textDecoration={"none"}  href={'#'}>Facebook</Link>
            <Link textDecoration={"none"}  href={'#'}>Twitter</Link>
            <Link textDecoration={"none"}  href={'#'}>Dribbble</Link>
            <Link  textDecoration={"none"} href={'#'}>Instagram</Link>
            <Link textDecoration={"none"}  href={'#'}>LinkedIn</Link>
          </Stack>
          </Flex>
          </Box>
         
          </Flex>
        </SimpleGrid>
      
      </Container>
     
    </Box>
  );
}

