// import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
// import { IconButton, Link } from '@chakra-ui/react';

// import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';
// import { useColorMode } from '@chakra-ui/color-mode';

// import Profile from './components/Profile';
// import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Homepage from './components/Homepage';
import Signup from './components/Signup';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      
    </div>
      
  )
}

export default App;
