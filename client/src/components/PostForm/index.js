import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FormControl, Box, Input, InputGroup, InputRightElement, IconButton, Text, Center } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME} from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = () => {
    const [postText, setPostText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('yellow.900', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');
    const color = useColorModeValue('#ECE8DF', '#BFAE98')

    const [addPost, { error }] = useMutation(ADD_POST, {
      update(cache, { data: { addPost } }) {
        try {
          const { posts } = cache.readQuery({ query: QUERY_POSTS });

          cache.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [addPost, ...posts] },
          });
        } catch (e) {
          console.error(e);
        }

        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
          const { data } = await addPost({
              variables: { 
                postText, postAuthor: Auth.getProfile().data.username,
              },
        });

          setPostText('');
        } catch (err) {
          console.error(err);
        }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;

      if (name === 'postText' && value.length <= 280) {
        setPostText(value);
        setCharacterCount(value.length);
      }
    };

    return (
      
      <Box m='30px'> 
        <Text 
          textShadow='2px 2px #BFAE98'
          className='gloria' 
          p='30px'
          pl='100px'
          fontSize='6xl'
          color={textcolor}
          > 
            What's on your mind? 
          </Text>
          {Auth.loggedIn() ? (
            <Center>
              <Box p='30px' w='80%'>
                <FormControl id='post'
                onSubmit={handleFormSubmit}>
                  <InputGroup
                    size='lg'
                    boxShadow='lg'
                    
                    >
                    <Input h='100px'
                      name='postText'
                      backgroundColor='RGBA(0, 0, 0, 0.16)'
                      variant='filled'
                      type='post'
                      placeholder='Type something here... '
                      value={postText}
                      onChange={handleChange}
              // onChange={(e) => setEmail(e.target.value)}
                      />
                    <InputRightElement mr={5} p='50px'>
                    <IconButton icon={<FaPaperPlane />} 
                      size='lg'
                      backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                      color={isDark ? '#5E4D3B' : '#E8DFD8'}
                      type="submit"
                      />    
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Box>
                </Center>
                ) : (
                  <p>
                    You need to be logged in to share your thoughts. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                  </p>
          )}
                </Box>
   
    );
    };
export default PostForm;
