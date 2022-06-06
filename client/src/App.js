import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Login from './pages/auths/Login';
import Signup from './pages/auths/Signup';
import Authspage from './pages/auths/Authspage';
import Post from './pages/Post';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} className='Homepage' />
          <Route exact path='/authspage' element={<Authspage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} className='Authspage' />
          <Route exact path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} className='Login' />
          <Route exact path='/signup' element={<Signup />} className='Signup' />
          <Route exact path='/profile' element={<Profile /> } className='Profile' />
          <Route exact path='/profile/:profileId' element={<Profile /> } className='Profile' />
          <Route exact path='/post' element={<Post /> } className='Post' />
        </Routes>
      
      </div>
    </ApolloProvider>
    
      
  )
}

export default App;
