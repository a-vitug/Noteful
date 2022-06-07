import React from 'react';
import {
    Input,
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

const CommentList = ({ comments = [] }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const textcolor = useColorModeValue('#BFAE98', '#E8DFD8');
    const bgcolor = useColorModeValue('RGBA(0, 0, 0, 0.16)', 'RGBA(0, 0, 0, 0.36)');
    
    if (!comments.length) {
      return <h3>No Comments Yet</h3>;
    };

    return(
        <>
        <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >

      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
      </>
    )
   
     
};

export default CommentList;