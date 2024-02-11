import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import useBotStore from './components/store'; 
import Header from './components/Header';

function App() {

  const { selectedBots, addBot, removeBot } = useBotStore();

  return (
    <ChakraProvider>
      <Header />
      <Flex w='100%'>
        <BotCollection onBotSelect={addBot} />
        <YourBotArmy selectedBots={selectedBots} onReleaseBot={removeBot} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
