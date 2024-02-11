import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import useBotStore from './store';
import { Link } from 'react-router-dom';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  
  const { removeSelectedBot } = useBotStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(' http://localhost:3000/bots');
        if (!response.ok) {
          throw new Error('Failed to fetch bots data');
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData();
  }, [bots]);


  const handleDischargeClick = (event, bot) => {
    event.stopPropagation(); 
    fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete bot');
        }
        console.log('Bot deleted successfully');
    })
    .catch(error => {
        console.error('Error deleting bot:', error);
    });

    removeSelectedBot(bot.id);
  };

  return (
    <Box height="84vh" overflowY='auto' w="70%" borderWidth="1px" p={4} m={4} borderRadius="lg">
      <Text textAlign='center' pb={2} fontSize="lg" fontWeight="bold">Bot Collection</Text>
      <Flex flexWrap="wrap" gap={2} justifyContent="center">
        {bots.map(bot => (
          <Box
            key={bot.id}
            borderWidth="1px"
            borderRadius="lg"
            p={2}
            minW="150px"
            flex="0 0 auto"
            mb={4}
            cursor="pointer"
            _hover={{ bg: 'gray.100', boxShadow: 'md' }}
          >
            <Link to={`/specs/${bot.id}`} key={bot.id}>
              <Image src={bot.avatar_url} alt={bot.name} borderRadius="full" boxSize="100px" />
              <Text mt={2} fontSize="md" fontWeight="bold">{bot.name}</Text>
              <Text fontSize="sm">{bot.bot_class}</Text>
            </Link>
            <Button colorScheme='red' size='xs' mt={2} borderRadius="md" onClick={(event) => handleDischargeClick(event, bot)}>x</Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BotCollection;
