import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';
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
  Wrap,
  WrapItem
} from '@chakra-ui/react';

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';


const Signup = () => {
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
    const bgcolor = useColorModeValue('#ECE8DF', '#BFAE98')
    const isDark = colorMode === 'dark';

    // const borderRadius = {
    //   radii: {
    //     sm: '0.125rem',
    // base: '0.25rem',
    // md: '0.375rem',
    // lg: '0.5rem',
    // xl: '0.75rem',
    // '2xl': '1rem',
    // '3xl': '1.5rem',
    // full: '9999px',
    //    }
    // }

    const submitHandler = async () => {
        setInformation(true);
        if (!username || !email || !password || !confirmpassword) {
          toast({
            title: "Invalid information. Please try again.",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setInformation(false);
          return;
        }

        if (password !== confirmpassword) {
          toast({
            title: "Password must match",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
    
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            "/api/user/signup",
            {
              username,
              email,
              password,
            },
            config
          );
    
          toast({
            title: "Successfully signed up!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          setInformation(false);
          history.push("/chats");
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
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
              
              <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Box>

        <Wrap color={textcolor}>
          <Stack pt='180px' textShadow='2px 2px #BFAE98'>
            <WrapItem className='halimun'>
              <Text fontSize='90px'>welcome</Text>
            </WrapItem>
            <WrapItem noOfLines={2} textAlign='center'>
              <Text className='gloria' fontSize='60px'>to</Text>
              <Text  className='gloria' fontSize='70px'>noteful</Text>
            </WrapItem>
          </Stack>

          <WrapItem>
            <Flex flexDirection='column' p='100px' pl='200px'>
                <Box 
                  border='2px'
                  borderRadius='md'
                  boxShadow='lg'
                  color={isDark ? '#5E4D3B' : '#E8DFD8'}
                  p='100px'
                  >
                    
                    <FormControl isRequired id="username" pb={8}>

                      <FormLabel>Username</FormLabel>
                      <InputGroup size="md" 
                          backgroundColor={bgcolor} 
                          color={textcolor}
                          boxShadow='lg'>
                      <Input
                          placeholder="Enter your username"
                          onChange={(e) => setUsername(e.target.value)}
                          />  
                      </InputGroup>
                    </FormControl>

                  <FormControl isRequired id="email" pb={8}>
                    <FormLabel>Email Address</FormLabel>
                      <InputGroup size="md" 
                          backgroundColor={bgcolor} 
                          color={textcolor}
                          boxShadow='lg'>
                      <Input
                          value={email}
                          type="email"
                          placeholder="Enter your email address"
                          onChange={(e) => setEmail(e.target.value)}
                          />  
                      </InputGroup>
                  </FormControl>
                  
                  <FormControl isRequired id="password" pb={8}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md" 
                        backgroundColor={bgcolor} 
                        color={textcolor}
                        boxShadow='lg'>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}
                          backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                          color={isDark ? '#5E4D3B' : '#E8DFD8'}
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  
                  <FormControl isRequired id="password" pb={5}>
                      <FormLabel>Confirm Password</FormLabel>
                      <InputGroup 
                        size="md"
                        backgroundColor={bgcolor} 
                        color={textcolor}
                        boxShadow='lg'
                        >
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="Confirm password"
                          onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}
                            backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                            color={isDark ? '#5E4D3B' : '#E8DFD8'}
                          >
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                  </FormControl>
                  
                  <VStack>
                    <ButtonGroup pt={5} alignItems='center'>
                      <Button
                        backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                        color={isDark ? '#5E4D3B' : '#E8DFD8'}
                        boxShadow='lg'
                        width="100%"
                        variant='outline'
                        style={{ marginTop: 15 }}
                        onClick={submitHandler}
                        isLoading={info}
                        >
                          Signup
                      </Button> 
                    </ButtonGroup>
                  </VStack>

              </Box>
            </Flex>
          </WrapItem>
        </Wrap>
      </VStack>

    )
};

export default Signup;