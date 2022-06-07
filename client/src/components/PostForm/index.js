import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, InputRightAddon, IconButton, Text } from '@chakra-ui/react';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';


import Auth from '../../utils/auth';


const PostForm = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('yellow.900', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');

    const [postText, setPostText] = useState('');
  
    const [characterCount, setCharacterCount] = useState(0);
  
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
  
        // update me object's cache
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
            postText,
            postAuthor: Auth.getProfile().data.username,
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

    return(
    <>
        <Box p='30px' w='80%'>
            {Auth.loggedIn() ? (
                                <FormControl id='post'
                                onSubmit={handleFormSubmit}>
                                    <InputGroup
                                        size='lg'
                                        boxShadow='lg'
                                    >
                                        <Input h='100px'
                                            backgroundColor='RGBA(0, 0, 0, 0.16)'
                                            variant='filled'
                                            type='post'
                                            value={postText}
                                            placeholder='Type something here... '
                                            onChange={handleChange}
                                        />
                                        <InputRightElement mr={5} p='50px'>
                                            <IconButton icon={<FaPaperPlane />} 
                                            size='lg'
                                                backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                                                color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                ) : (
                                    <p>
                                      You need to be logged in to share your posts. Please{' '}
                                      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                                    </p>
                                  )}
                            </Box>
    </>
    );
};  

export default PostForm