import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="md">Bot Battlr </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
