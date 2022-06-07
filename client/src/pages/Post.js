import React, { Component } from 'react';
import { Flex, Stack, VStack, Spacer } from '@chakra-ui/layout';
import {
  Input,
  Box,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Link,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  StackDivider,
  Text,
  Textarea,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import PostList from '../components/PostsList';
import PostForm from '../components/PostForm'

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt, FaArrowCircleLeft } from 'react-icons/fa';

import CommentList from '../components/CommentList'


const Post = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('#BFAE98', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');

    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    };

    return (
        <Stack className='postbg' pt={100}>
            
            <Container p={5} maxW='container.sm'>
                <IconButton icon={<FaArrowCircleLeft />} isRound='true' />
                <Box m={3}>
                    <FormControl isReadOnly id='comment' >
                        <FormLabel color={textcolor}> username </FormLabel>
                        <InputGroup
                            size='md'
                            boxShadow='lg'
                        >
                            <Input h='65px' backgroundColor={bgcolor}
                                variant='filled'
                                type='comment'
                                placeholder='this is my very first post yay ~~~ '
                            />
                            
                        </InputGroup>
                    </FormControl>
                </Box>

                <Divider></Divider>
                <CommentList> /</CommentList>
                {/* user #2's comment */}
                <></>
                {/* <Box m={10}>
                    <FormControl isReadOnly id='comment' >
                        <FormLabel color={textcolor}> username2 </FormLabel>
                        <InputGroup
                            size='md'
                            boxShadow='lg'
                        >
                            <Input h='65px' backgroundColor={bgcolor}
                                variant='filled'
                                type='comment'
                                placeholder='cool post'
                            />
                            
                        </InputGroup>
                    </FormControl>
                </Box> */}

                {/* user #3's comment */}
                <Box m={10}>
                    <FormControl isReadOnly id='comment' >
                        <FormLabel color={textcolor}> username2 </FormLabel>
                        <InputGroup
                            size='md'
                            boxShadow='lg'
                        >
                            <Input h='65px' backgroundColor={bgcolor}
                                variant='filled'
                                type='comment'
                                placeholder='this is my very first post yay ~~~ '
                            />
                            
                        </InputGroup>
                    </FormControl>
                </Box>

                {/* user #4's comment */}
                <Box m={10}>
                    <FormControl isReadOnly id='comment' >
                        <FormLabel color={textcolor}> username2 </FormLabel>
                        <InputGroup
                            size='md'
                            boxShadow='lg'
                        >
                            <Input h='65px' backgroundColor={bgcolor}
                                variant='filled'
                                type='comment'
                                placeholder='this is my very first post yay ~~~ '
                            />
                            
                        </InputGroup>
                    </FormControl>
                </Box>

            </Container>
        </Stack>
        
    );
};

export default Post;