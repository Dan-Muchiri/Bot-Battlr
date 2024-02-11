import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import useBotStore from './store'; 

const YourBotArmy = () => {
  const { removeSelectedBot, selectedBots } = useBotStore();

  const handleReleaseClick = (bot) => {
    removeSelectedBot(bot.id)};

  return (
    <Box w="27%" borderWidth="1px" p={4} m={4} borderRadius="lg" height="84vh" overflowY='auto'>
      <Text textAlign='center' pb={2} fontSize="lg" fontWeight="bold">Your Bot Army</Text>
      {selectedBots.map(bot => (
        <Box
          key={bot.id}
          borderWidth="1px"
          borderRadius="lg"
          p={2}
          minW="150px"
          flex="0 0 auto"
          mb={4}
        >
          <Image src={bot.avatar_url} alt={bot.name} borderRadius="full" boxSize="100px" />
          <Text mt={2} fontSize="md" fontWeight="bold">{bot.name}</Text>
          <Text fontSize="sm">{bot.bot_class}</Text>
          <Button onClick={() => handleReleaseClick(bot)} colorScheme="red" size="sm" mt={2}>Release</Button>
        </Box>
      ))}
    </Box>
  );
};

export default YourBotArmy;
