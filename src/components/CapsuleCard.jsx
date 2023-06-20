import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Flex,
  VStack,
  Badge,
} from '@chakra-ui/react';

const CapsuleCard = ({ status, launchingDate, capsuleSerial, type }) => {
  const IMAGE =
    'https://cdn.dribbble.com/users/1355613/screenshots/6038681/media/7f7da0e1095700faa024a34d27a57b7d.jpg?compress=1&resize=1600x1200&vertical=center';

  const formattedDate = new Date(launchingDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        rounded={'2xl'}
        pos={'relative'}
        zIndex={1}
        cursor={'pointer'}>
        <Box
          rounded={'2xl'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(20px)',
            zIndex: -1,
            opacity: 0.5,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(30px)',
            },
          }}>
          <Image
            rounded={'2xl'}
            height={210}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10}>
          <VStack>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}>
              {type}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {capsuleSerial}
            </Heading>
          </VStack>
          <Flex justifyContent='space-between' mt={2}>
            <Badge
              p={1}
              px={2}
              rounded={'md'}
              colorScheme={
                status === 'destroyed'
                  ? 'red'
                  : status === 'active'
                  ? 'green'
                  : status === 'retired'
                  ? 'yellow'
                  : 'gray'
              }>
              {status}
            </Badge>

            {/* <Text color={'gray.600'}>{status}</Text> */}
            <Text color={'gray.600'}>{formattedDate}</Text>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default CapsuleCard;
