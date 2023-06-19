import { Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import RocketCard from './RocketCard';

const Rockets = () => {
  return (
    <>
      <VStack>
        <HStack
          flexDirection={{ base: 'column', md: 'row' }}
          spacing={{ base: 0, md: 10 }}>
          <RocketCard />
          <RocketCard />
          <RocketCard />
        </HStack>
      </VStack>
    </>
  );
};

export default Rockets;
