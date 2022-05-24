// import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
// import { IconButton, Link } from '@chakra-ui/react';

// import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';
// import { useColorMode } from '@chakra-ui/color-mode';

// import Profile from './components/Profile';
// import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Homepage />} className='Homepage' />
          <Route path='/login' element={<Login />} className='Login' />
          <Route path='/signup' element={<Signup />} className='Signup' />
          <Route path='/profile' element={<Profile /> } className='Profile' />
        </Routes>
      
    </div>
      
  )
}

export default App;
