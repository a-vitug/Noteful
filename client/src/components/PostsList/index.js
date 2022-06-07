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

   return (
     
    )
};
export default PostList