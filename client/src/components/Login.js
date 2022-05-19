import { useState } from 'react';
import { axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Flex, Stack, Heading, Spacer } from '@chakra-ui/layout';
import { 
    Input,
    Box, 
    IconButton, 
    Link, 
    FormControl,
    FormLabel,
    Button,
    ButtonGroup,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/react';

import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/color-mode';

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
          toast({
            title: "Please Fill all the Fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          setLoading(false);
          return;
        }
    
        // console.log(email, password);
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            "/api/user/login",
            { email, password },
            config
          );
    
          // console.log(JSON.stringify(data));
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          setLoading(false);
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
          setLoading(false);
        }
      };

    return (
        <Stack p={5}>
            <Flex w='100%'>
                <Heading
                ml="8" size="md" fontWeight='semibold' color="cyan.400"> Noteful 
                </Heading>

                <Spacer></Spacer>
                <Link href='https://github.com/a-vitug/react-app'>
                <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
                </Link>
                
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>


        <Box p={130} >
            <Flex flexDirection='column' alignItems='center'>
                <Box p={10} fontSize='3xl'
                    color={isDark ? '#5E4D3B' : '#E8DFD8'}
                    ml={'auto'}>
                        Log In Here!
                    </Box>
                <Box 
                    backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'} 
                    color={isDark ? '#5E4D3B' : '#E8DFD8'}
                    ml={'auto'} 
                    p={20}>
                    
                    <FormControl id="email" isRequired pb='40px'>
                        <FormLabel>Email Address</FormLabel>
                        <InputGroup size="md" 
                            backgroundColor={isDark ? '#BFAE98' : '#ECE8DF'} 
                            color={isDark ? '#E8DFD8' : '#5E4D3B'}>
                        <Input
                            color='black'
                            value={email}
                            type="email"
                            placeholder="Enter your email address"
                            onChange={(e) => setEmail(e.target.value)}
                            />  
                        </InputGroup>
                        
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md" 
                            backgroundColor={isDark ? '#BFAE98' : '#ECE8DF'} 
                            color={isDark ? '#E8DFD8' : '#5E4D3B'}>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <ButtonGroup p={3} pl={20} alignItems='center'>
                       <Button
                        color={isDark ? '#5E4D3B' : '#E8DFD8'}
                        width="100%"
                        variant='outline'
                        style={{ marginTop: 15 }}
                        onClick={submitHandler}
                        isLoading={loading}
                    >
                        Login
                    </Button> 
                    </ButtonGroup>
                    
                </Box>
            </Flex>
        </Box>
            
                        
        </Stack>
    )
}

export default Login;