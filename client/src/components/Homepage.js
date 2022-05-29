import { Flex, Stack, HStack, Heading, Grid, GridItem, Spacer } from '@chakra-ui/layout';
import { IconButton, Link, Box, Button, Center, Divider, ButtonGroup, Container, Image, InputGroup, FormControl, FormLabel, Input, Text, InputRightElement } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { motion } from "framer-motion";
import { Formik, Form, Field,  ErrorMessage } from 'formik';

import Login from './auths/Login';
import Signup from './auths/Signup';
import { FaSun, FaMoon, FaGithub, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';

import images from './images';

export default function Homepage({ loggedIn, setLoggedIn }) {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('#E8DFD8', 'yellow.900');
    const bgcolor = useColorModeValue('#ECE8DF', '#BFAE98');

    const outerBoxStyles = {
        background:
          'url(../img/background.png) center/cover no-repeat',
    }

    return (
        <Stack p={5} sx={outerBoxStyles}>
            <Flex w='100%'>
                <Spacer></Spacer>
                <Link href='https://github.com/a-vitug/react-app'>
                    <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
                </Link>
                
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>

            {/* if logged in */}
            {/* {loggedIn ? ( */}
                <Box backdropFilter='auto' backdropBlur='3px' borderRadius='md'>
                <Box m='30px'>
                    <Text 
                        textShadow='2px 2px #BFAE98'
                        className='gloria' 
                        p='30px'
                        pl='100px'
                        fontSize='6xl'
                        color={textcolor}
                        > 
                            Hi, username! 
                    </Text>
                    <Center>
                        <Box p='30px' w='80%'>
                            <FormControl id='post'>
                                <InputGroup
                                    size='lg'
                                    boxShadow='lg'
                                >
                                    <Input h='100px'
                                        backgroundColor='RGBA(0, 0, 0, 0.16)'
                                        variant='filled'
                                        type='post'
                                        placeholder='Type something here... '
                                        // onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputRightElement mr={5} p='50px'>
                                        <IconButton icon={<FaPaperPlane />} 
                                        size='lg'
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>
                    </Center>
                </Box>

                <Divider />

                <Grid templateColumns='repeat(5, 1fr)' gap={5}>
                    <Spacer></Spacer>
                    <GridItem colSpan={3}>
                        <Text 
                            className='indie'
                            fontWeight='bold'
                            p='20px'
                            fontSize='3xl'
                            color={textcolor}
                            > 
                                Here's some news for you...
                        </Text>
                        <Box m={3}>
                            <FormControl id='comment' >
                                <FormLabel color={isDark ? '#5E4D3B' : '#E8DFD8'}> username1 </FormLabel>
                                <InputGroup
                                    size='md'
                                    boxShadow='lg'
                                >
                                    <Input h='65px' backgroundColor='RGBA(0, 0, 0, 0.16)'
                                        variant='filled'
                                        type='comment'
                                        placeholder='Type something here... '
                                    />
                                    <InputRightElement mr={5} p='33px'>
                                        <IconButton
                                            icon={<FaHeart />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                        <IconButton 
                                            icon={<FaTrashAlt />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>
                        <Box m={3}>
                            <FormControl id='comment' >
                                <FormLabel color={isDark ? '#5E4D3B' : '#E8DFD8'}> username2 </FormLabel>
                                <InputGroup
                                    size='md'
                                    boxShadow='lg'
                                >
                                    <Input h='65px' backgroundColor='RGBA(0, 0, 0, 0.16)'
                                        variant='filled'
                                        type='comment'
                                        placeholder='Type something here... '
                                    />
                                    <InputRightElement mr={5} p='33px'>
                                        <IconButton
                                            icon={<FaHeart />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                        <IconButton 
                                            icon={<FaTrashAlt />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                    </InputRightElement>
                                    
                                </InputGroup>
                            </FormControl>
                        </Box>
                        <Box m={3}>
                            <FormControl id='comment' >
                                <FormLabel color={isDark ? '#5E4D3B' : '#E8DFD8'}> username3 </FormLabel>
                                <InputGroup
                                    size='md'
                                    boxShadow='lg'
                                >
                                    <Input h='65px' backgroundColor='RGBA(0, 0, 0, 0.16)'
                                        variant='filled'
                                        type='comment'
                                        placeholder='Type something here... '
                                    />
                                    <InputRightElement mr={5} p='33px'>
                                        <IconButton
                                            icon={<FaHeart />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                        <IconButton 
                                            icon={<FaTrashAlt />} 
                                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                            color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>

                    </GridItem>

                    {/* ads */}
                    <GridItem colEnd={6}>
                        <Box m={4}>
                            <Image src='https://via.placeholder.com/150' />
                        </Box>
                        <Box m={7}>
                            <Image src='https://via.placeholder.com/150' />
                        </Box>
                    </GridItem>

                </Grid>
                

            </Box>

            {/* // else logged out
            ) : (
                
                <div>logout</div>

            )} */}
            
            
            
        </Stack>
    );
}

