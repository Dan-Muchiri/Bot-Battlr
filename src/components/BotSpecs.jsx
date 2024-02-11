import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';
import useBotStore from './store';
import { Link } from 'react-router-dom';

const BotSpecs = () => {
  const { id } = useParams();
  const [bot, setBot] = useState(null);
  const { selectedBots, addSelectedBot } = useBotStore();

  useEffect(() => {
    const fetchBotDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/bots/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bot details');
        }
        const data = await response.json();
        setBot(data);
      } catch (error) {
        console.error('Error fetching bot details:', error);
      }
    };

    fetchBotDetails();
  }, [id]);

  const handleEnlistClick = () => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
        addSelectedBot(bot); 
    }
  };

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <Flex w="70%" justifyContent='center' alignItems='center'>
        <Box borderWidth="1px" borderRadius="lg" p={4} m={4} h='max-content'>
            <Image src={bot.avatar_url} alt={bot.name} borderRadius="full" boxSize="230px" />
            <Text mt={2} fontSize="md" fontWeight="bold">{bot.name}</Text>
            <Text fontSize="sm">Class: {bot.bot_class}</Text>
            <Text fontSize="sm">Health: {bot.health}</Text>
            <Text fontSize="sm">Damage: {bot.damage}</Text>
            <Text fontSize="sm">Armor: {bot.armor}</Text>
            <Text fontSize="sm">Catchphrase: {bot.catchphrase}</Text>
            <Text fontSize="sm">Created at: {bot.created_at}</Text>
            <Text fontSize="sm">Updated at: {bot.updated_at}</Text>
            <Button onClick={handleEnlistClick} colorScheme="green" size="sm" ml={0}>Enlist</Button>
            <Link to='/'><Button colorScheme="blue" size="sm" m={2}>Back to List</Button></Link>
        </Box>
    </Flex>
    
  );
};

export default BotSpecs;
