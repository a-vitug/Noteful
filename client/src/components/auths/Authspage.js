import { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';
import { motion } from "framer-motion";
import { Flex, Stack, VStack, Spacer } from '@chakra-ui/layout';
import {
  Input,
  Box,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  Link,
  IconButton,
  InputGroup,
  InputRightElement,
  useToast,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';

import Login from './Login';
import Signup from './Signup';

const Authspage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [info, setInformation] = useState();

  const { colorMode, toggleColorMode } = useColorMode();
  // const theme = extendTheme({ borderRadius });
  const textcolor = useColorModeValue('#E8DFD8', 'yellow.900');
  const bgcolor = useColorModeValue('#ECE8DF', '#BFAE98');
  const isDark = colorMode === 'dark';

  const submitHandler = async () => {
    setInformation(true);
    if (!username || !email || !password || !confirmpassword) {
      toast({
        title: 'Invalid information. Please try again.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setInformation(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: 'Password must match',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/user/signup',
        {
          username,
          email,
          password,
        },
        config
      );

      toast({
        title: 'Successfully signed up!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setInformation(false);
      history.push('/profile');
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setInformation(false);
    }
  };

  return (
    <VStack>
        <Box p={5} ml='auto'>
            <Link href='https://github.com/a-vitug/react-app'>
            <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
            </Link>

            <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound='true'
            onClick={toggleColorMode}
            ></IconButton>
        </Box>

      <Wrap color={textcolor}>
        <Stack pt='180px' textShadow='2px 2px #BFAE98'>
          <WrapItem className='halimun'>
            <Text fontSize='90px'>welcome</Text>
          </WrapItem>
          <WrapItem noOfLines={2} textAlign='center'>
            <Text className='gloria' fontSize='60px'>
              to
            </Text>
            <Text className='gloria' fontSize='70px'>
              noteful
            </Text>
          </WrapItem>
        </Stack>

        <Tabs align='end' variant='unstyled'>
            <TabList m={3}>
                <Tab 
                    m={1}
                    border='2px'
                    borderRadius='md'
                    boxShadow='lg'
                    color='#BDD1B6'
                    fontWeight='bold'
                    >
                        Login
                </Tab>
                <Tab
                    m={1}
                    border='2px'
                    borderRadius='md'
                    boxShadow='lg'
                    color='#BDD1B6'
                    fontWeight='bold'
                    >
                        Signup
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Login />
                </TabPanel>
                <TabPanel>
                    <Signup />
                </TabPanel>
            </TabPanels>
            </Tabs>
      </Wrap>

    </VStack>
  );
};

export default Authspage;
