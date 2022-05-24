import { Flex, Stack, Heading, Spacer } from '@chakra-ui/layout';
import { IconButton, Link, Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'
// import { Image } from '@chakra-ui/image';
// import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
// import { useMediaQuery } from '@chakra-ui/media-query';

import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';


function Homepage() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Stack p={5}>
            <Flex w='100%'>
                <Spacer></Spacer>
                <Link href='https://github.com/a-vitug/react-app'>
                    <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
                </Link>
                
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            </Flex>
            
        </Stack>
    );
}

export default Homepage;