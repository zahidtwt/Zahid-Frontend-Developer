import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import spacexlogo from '../assets/spacexlogo.png';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        px={4}
        backdropFilter='blur(10px)'
        position='fixed'
        w='100%'
        zIndex={1000}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image w={'200px'} src={spacexlogo} alt='SpaceX Logo' />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
