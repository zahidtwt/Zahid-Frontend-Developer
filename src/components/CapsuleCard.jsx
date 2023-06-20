import { useState } from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  VStack,
  Badge,
} from '@chakra-ui/react';
import CapsuleModal from './CapsuleModal';
import capsuleImg from '../assets/capsule.png';

const CapsuleCard = ({ capsule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const formattedDate = new Date(capsule.original_launch).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <Center py={6}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        rounded={'2xl'}
        pos={'relative'}
        zIndex={1}
        cursor={'pointer'}
        onClick={handleOpenModal}>
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
            backgroundImage: `url(${capsuleImg})`,
            filter: 'blur(20px)',
            zIndex: -1,
            opacity: 0.2,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(30px)',
              opacity: 0.4,
            },
          }}>
          <Image
            rounded={'2xl'}
            height={210}
            maxWidth={282}
            objectFit={'cover'}
            src={capsuleImg}
          />
        </Box>
        <Stack pt={0}>
          <VStack>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}>
              {capsule.type}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {capsule.capsule_serial}
            </Heading>
          </VStack>
          <Flex justifyContent='space-between' mt={2}>
            <Badge
              p={1}
              px={2}
              rounded={'md'}
              colorScheme={
                capsule.status === 'destroyed'
                  ? 'red'
                  : capsule.status === 'active'
                  ? 'green'
                  : capsule.status === 'retired'
                  ? 'yellow'
                  : 'gray'
              }>
              {capsule.status}
            </Badge>

            <Text color={'gray.600'}>{formattedDate}</Text>
          </Flex>
        </Stack>
      </Box>
      <CapsuleModal
        capsule={capsule}
        isOpen={isOpen}
        onClose={handleCloseModal}
      />
    </Center>
  );
};

export default CapsuleCard;
