import React from 'react';
import {
    Input,
    Avatar,
    AvatarGroup,
    Box,
    Center,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Button,
    ButtonGroup,
    IconButton,
    Image,
    Link,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    StackDivider,
    Text,
    Textarea,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react';

  import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';

const CommentList = ({ comments }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('#BFAE98', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');
    
    if (!comments.length) {
      return <h3>No Comments Yet</h3>;
    };

    return(
        <Box m={10}>
            {comments &&
                comments.map((comment) => (

                    <FormControl p={3} key={comment._id} isReadOnly id='comment' >
                        <FormLabel color={textcolor}>
                            <AvatarGroup>
                                <Avatar 
                                    bg='#1D454E'
                                    color='#E8DFD8'
                                    boxSize={7}
                                    name={comment.commentAuthor}
                                >
                                </Avatar>
                                <Text pl={5} className='indieFlower'>
                                    {comment.commentAuthor}
                                </Text>
                                <Text ml='auto'>
                                    {comment.createdAt}
                                </Text>
                            </AvatarGroup>
                        </FormLabel>
                        <InputGroup
                            size='md'
                            boxShadow='lg'
                        >
                            <Input h='65px' backgroundColor={bgcolor}
                                variant='filled'
                                type='comment'
                                placeholder={comment.commentText}
                            />
                        </InputGroup>
                    </FormControl>
            ))}
        </Box>
    )
   
     
};



export default CommentList;