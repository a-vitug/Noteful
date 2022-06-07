import React from 'react';
import { Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, InputRightAddon, IconButton, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';

const PostList = ({
    posts,
    title,
    showTitle = true,
    showUsername = true,
}) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('yellow.900', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');

    if (!posts.length) {
        return <h3>No posts yet!</h3>;
    }

     return (
        <Box m={3}>
            {showTitle && <h3>{title}</h3>}
            { posts &&
                posts.map((post) => (
        <FormControl key={post._id} isReadOnly id='comment' >
            {showUsername}
            <FormLabel color={textcolor}> username1 </FormLabel>
            <InputGroup
                size='md'
                boxShadow='lg'
            >
                <Input h='65px' backgroundColor='RGBA(0, 0, 0, 0.16)'
                    variant='filled'
                    type='comment'
                    placeholder='I am booooooooored!!! '
                />
                <InputRightElement mr={5} p='33px'>
                    <IconButton
                        icon={<FaHeart />} 
                        backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                        color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                    <IconButton 
                        icon={<FaTrashAlt />} 
                        backgroundColor={isDark ? '#ECE8DF' : '#BFAE98'}
                        color={isDark ? '#5E4D3B' : '#E8DFD8'} />
                </InputRightElement>
            </InputGroup>
        </FormControl>
         ))}
    </Box>
     )
}

export default PostList;