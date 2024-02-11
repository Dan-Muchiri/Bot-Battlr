import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy'; 
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotSpecs from './components/BotSpecs';

function App() {

  return (
    <Router>
      <ChakraProvider>
        <Header />
        <Flex w='100%'>
          <Routes>
            <Route path='/' element={<BotCollection />} />
            <Route path='/specs/:id' element={<BotSpecs />} />
          </Routes>
          <YourBotArmy />
        </Flex>
      </ChakraProvider>
    </Router>
  );
}

export default App;
