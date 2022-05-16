import React from "react";

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
    return (
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    )
}

export default App;
