import { useState } from 'react';
import { axios } from 'axios';
import { useToast } from '@chakra-ui/toast';
import { useNavigate } from 'react-router-dom';
import { Flex, Stack, VStack, Spacer } from '@chakra-ui/layout';
import {
  Input,
  Box,
  Container,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  StackDivider,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser } from 'react-icons/fa';

const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const toast = useToast();
  const navigate = useNavigate();

  const [pic, setPic] = useState(false);
  const [user, setUser] = useState();

  // uploads user's profile picture
  const uploadPic = (pics) => {
    setUser(true);
    if (pics === undefined) {
      toast({
        title: 'Please Select an Image!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    console.log(pics);
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'noteful-app');
      data.append('cloud_name', 'av-code');
      fetch('https://api.cloudinary.com/v1_1/av-code/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setUser(false);
        })
        .catch((err) => {
          console.log(err);
          setUser(false);
        });
    } else {
      toast({
        title: 'Invalid image',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setUser(false);
      return;
    }
  };

  const upload = async () => {
    setUser(true);
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/user',
        {
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: 'Successfully uploaded your profile picture',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(false);
      navigate.push('/profile');
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setUser(false);
    }
  };

  

  return (
    <Stack p={5}>
      <Flex w='100%'>
        <Spacer></Spacer>
        <IconButton
          ml={8}
          icon={<FaUser />}
          isRound='true'
          onClick={toggleColorMode}
        ></IconButton>

        <Link href='https://github.com/a-vitug/react-app'>
          <IconButton
            ml={8}
            icon={<FaGithub />}
            isRound='true'
            onClick={toggleColorMode}
          ></IconButton>
        </Link>

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound='true'
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Wrap spacing='30px'>
        {/* upload user's profile picture */}
        <WrapItem>
          <Flex flexDirection='column' p='170px'>
            <Box border='1px' p='10px'>
              <FormControl id='pic'>
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                  type='file'
                  p={1.5}
                  accept='image/*'
                  onChange={(e) => uploadPic(e.target.files[0])}
                />
              </FormControl>
              <Button
                backgroundColor='#BDD1B6'
                style={{ marginTop: 15 }}
                onClick={upload}
                isLoading={user}
              >
                {' '}
                Upload{' '}
              </Button>
            </Box>
          </Flex>
        </WrapItem>
      </Wrap>

      <Box></Box>
    </Stack>
  );
};

export default Profile;
