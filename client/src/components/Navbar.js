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

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';


const Navbar = ({ loggedIn, setLoggedIn }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('yellow.900', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');

    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    };

    return (
        <Stack p={5}>
            <Flex w='100%'>
                <Spacer></Spacer>
                
                {loggedIn ? (
                    <IconButton
                        ml={8}
                        icon={<FaUser />}
                        isRound='true'
                        backgroundColor={bgcolor}
                    ></IconButton>
                ) : (
                    <>
                        <Link href='https://github.com/a-vitug/react-app'>
                            <IconButton
                                ml={8}
                                icon={<FaGithub />}
                                isRound='true'
                                backgroundColor={bgcolor}
                            ></IconButton>
                            </Link>

                            <IconButton
                            ml={8}
                            icon={isDark ? <FaSun /> : <FaMoon />}
                            isRound='true'
                            onClick={toggleColorMode}
                            backgroundColor={bgcolor}
                        ></IconButton>
                    </>
                )}
                

                
            </Flex>

        </Stack>
    );
};

export default Navbar;