import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';
import { Flex, Stack, VStack, Spacer } from '@chakra-ui/layout';
import { 
    Input,
    Box,
    Container,
    FormControl,
    FormLabel,
    Button,
    ButtonGroup,
    InputGroup,
    InputRightElement,
    useToast,
    SimpleGrid,
    StackDivider
} from '@chakra-ui/react';

import { useColorMode } from '@chakra-ui/color-mode';
// import { useMediaQuery, extendTheme } from '@chakra-ui/react'


const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const history = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [info, setInformation] = useState();

    const { colorMode, toggleColorMode } = useColorMode();
    // const theme = extendTheme({ borderRadius });
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
        if (!name || !email || !password || !confirmpassword) {
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
              name,
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
        <Container >
        {/* <SimpleGrid rows={2} spacing='40px'> */}
        <Box pl='120px'>
            <Flex 
            justify-content='flex-start'
            >
                <Box pt='140px'>
                  <Box p={3}>
                    <FormControl isRequired 
                      id="name" 
                      p='20px' 
                      border='2px'
                      borderRadius='md'
                      color={isDark ? '#5E4D3B' : '#E8DFD8'}>
                      <FormLabel>Name</FormLabel>
                      <InputGroup size="md" 
                          backgroundColor={isDark ? '#BFAE98' : '#ECE8DF'} 
                          color={isDark ? '#E8DFD8' : '#5E4D3B'}>
                      <Input
                          placeholder="Enter full name"
                          onChange={(e) => setName(e.target.value)}
                          />  
                      </InputGroup>
                    </FormControl>
                  </Box>

                  <Box p={3}>
                    <FormControl isRequired 
                      id="email"  
                      p='20px' 
                      border='2px'
                      borderRadius='md'
                      color={isDark ? '#5E4D3B' : '#E8DFD8'}>
                      <FormLabel>Email Address</FormLabel>
                        <InputGroup size="md" 
                            backgroundColor={isDark ? '#BFAE98' : '#ECE8DF'} 
                            color={isDark ? '#E8DFD8' : '#5E4D3B'}>
                        <Input
                            value={email}
                            type="email"
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            />  
                        </InputGroup>
                    </FormControl>
                  </Box>  
                  
                  <Box p={3}>
                    <FormControl isRequired 
                      id="password" 
                      p='20px' 
                      border='2px'
                      borderRadius='md'
                      color={isDark ? '#5E4D3B' : '#E8DFD8'}>
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
                  </Box>
                  
                  <Box p={3}>
                    <FormControl isRequired
                      id="password" 
                      p='20px' 
                      border='2px'
                      borderRadius='md'
                      color={isDark ? '#5E4D3B' : '#E8DFD8'}>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup 
                          size="md"
                          backgroundColor={isDark ? '#BFAE98' : '#ECE8DF'} 
                          color={isDark ? '#E8DFD8' : '#5E4D3B'}
                          >
                          <Input
                            type={show ? "text" : "password"}
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmpassword(e.target.value)}
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                    </FormControl>
                  </Box>
                  
                  
                  <VStack>
                    <ButtonGroup pt={5} alignItems='center'>
                      <Button
                      backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                        color={isDark ? '#5E4D3B' : '#E8DFD8'}
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
        </Box>
        {/* </SimpleGrid> */}
        </Container>

        
    )
};

console.log('Signup')

export default Signup;