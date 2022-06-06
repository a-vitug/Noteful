import React from 'react';

const CommentList = ({ comments = [] }) => {
    if (!comments.length) {
      return <h3>No Comments Yet</h3>;
    };

    return(
      <>
             <Box m={10}>
                {comments &&
                comments.map((comment) => (
                    <FormControl isReadOnly id='comment' key={comment.id}>
                        <FormLabel color={textcolor}> {comment.commentAuthor} </FormLabel>
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
      </>
    )

     
};

export default CommentList;