import { useState } from 'react';
import { axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Flex, Stack, VStack } from '@chakra-ui/layout';
import { 
    Input,
    Box,
    FormControl,
    FormLabel,
    Button,
    ButtonGroup,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/react';

import { useColorMode } from '@chakra-ui/color-mode';

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [info, setInformation] = useState(false);
    const history = useNavigate();

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const submitHandler = async () => {
        setInformation(true);
        if (!email || !password) {
          toast({
            title: "Please Fill all the Fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          setInformation(false);
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
        <Stack>
        <Box ml='auto'>
            <Flex flexDirection='column' p='200px' pr='200px' >
                <Box 
                  border='2px'
                  // bgGradient={isDark ? ['linear(to-l, #C89D81, #ECE8DF)'] : ['linear(to-l, #ECE8DF, #C89D81)']}
                  // backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'} 
                  color={isDark ? '#5E4D3B' : '#E8DFD8'}
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
                          Login
                      </Button> 
                    </ButtonGroup>
                    <Box>

                    </Box>
                  </VStack>
                </Box>
            </Flex>
        </Box>
            
                        
      </Stack>
    )
}

export default Login;