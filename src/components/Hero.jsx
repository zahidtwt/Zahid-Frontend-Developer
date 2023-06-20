import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import space from '../assets/space-x.json';
import Lottie from 'lottie-react';
export default function Hero() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        pb={{ base: 20, md: 5 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              Let's go beyond,
            </Text>
            <br />
            <Text as={'span'} color={'purple.400'}>
              our Imagination!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. The company was founded in 2002 to revolutionize space
            technology, with the ultimate goal of enabling people to live on
            other planets.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'purple'}
              bg={'purple.400'}
              _hover={{ bg: 'purple.500' }}
              onClick={() => {
                window.location.href = '#capsules';
              }}>
              See Launches
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={() => {
                window.location.href = 'https://www.spacex.com';
              }}>
              More Info
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box>
            <Lottie animationData={space} style={{ width: '400px' }} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
