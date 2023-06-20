import { useState } from 'react';
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';
const CapsuleModal = ({ capsule, isOpen, onClose }) => {
  const formattedDate = new Date(capsule.original_launch).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded={'2xl'}>
        <ModalHeader>Capsule Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={5} s>
            <Table variant={'simple'} size={'sm'}>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                {capsule.type}
              </Text>
              <Tbody>
                <Tr>
                  <Td fontWeight='bold'>Capsule Status</Td>
                  <Td textAlign='left'>{capsule.status}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Launch Date</Td>
                  <Td textAlign='left'>{formattedDate}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Landing</Td>
                  <Td textAlign='left'>{capsule.landings}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Reuse</Td>
                  <Td textAlign='left'>{capsule.reuse_count}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight='bold'>Details</Td>
                  <Td textAlign='left'>{capsule.details}</Td>
                </Tr>
              </Tbody>
            </Table>
            <Text fontSize={'lg'} fontWeight={'bold'} mt={3}>
              Missions
            </Text>
            <Table variant='simple' size={'sm'}>
              {capsule.missions.map((mission, id) => (
                <Tbody key={id}>
                  <Tr>
                    <Td fontWeight='bold'>Mission Name</Td>
                    <Td textAlign='left'>{mission.name}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight='bold'>Flight</Td>
                    <Td textAlign='left'>{mission.flight}</Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CapsuleModal;
