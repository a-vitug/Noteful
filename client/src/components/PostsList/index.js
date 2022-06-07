import { Box, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputRightElement, InputRightAddon, IconButton, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { FaSun, FaMoon, FaGithub, FaUser, FaPaperPlane, FaHeart, FaTrashAlt } from 'react-icons/fa';



import React from 'react';
import { Link } from 'react-router-dom'
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
        <div>
            {showTitle && <h3>{title}</h3>}
            {posts &&
                posts.map((post) => (
                    <div key={post._id}>
                        <h4>
                            {/* this is where for username */}
                            {showUsername ? (

                                // this links to the actual post page
                                <Link to={`/profile/${post.postAuthor}`}>
                                    {/* this is the post author */}
                                    {post.postAuthor} <br />
                                    {/* when the posts where created */}
                                    <span> create at {post.createdAt}</span>
                                </Link>
                            ) : (
                                <>
                                    <span>
                                        You had this post on {post.createdAt}
                                    </span>
                                </>
                            )}
                        </h4>
                        <div>
                            {/* the posts text */}
                            <p>{post.postText}</p>
                        </div>
                        <Link to={`/posts/${post._id}`}>
                            click this to go
                        </Link>

                    </div>
                ))}
        </div>
    )
};
export default PostList