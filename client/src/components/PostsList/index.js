import React from 'react';
import { Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, InputRightAddon, IconButton, Text } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';

const PostList = ({
    posts,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!posts.length) {
        return <h3> No Posts Yet</h3>;
    }

    return (
        <Box m={3}>
            <FormControl isReadOnly id='comment' >
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
        </Box>
    )
}

export default PostList;