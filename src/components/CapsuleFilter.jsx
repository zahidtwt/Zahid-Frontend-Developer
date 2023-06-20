import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setStatusFilter,
  setTypeFilter,
  setLaunchingDateFilter,
  clearFilters,
} from '../features/capsules/capsulesSlice';
import { Box, Select, Input, Button } from '@chakra-ui/react';

const CapsuleFilter = () => {
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  const handleTypeChange = (e) => {
    dispatch(setTypeFilter(e.target.value));
  };

  const handleLaunchingDateChange = (e) => {
    dispatch(setLaunchingDateFilter(e.target.value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <Box
      mb={4}
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      justifyItems='center'
      backdropFilter='blur(10px)'
      justifyContent='space-between'
      alignItems='center'
      boxShadow='2xl'
      rounded='2xl  '
      p={4}
      gap={{ sm: 4, md: 32 }}>
      <Select onChange={handleStatusChange} width='150px' mr={2} py={2}>
        <option value=''>Select Status</option>
        <option value='active'>Active</option>
        <option value='retired'>Retired</option>
        <option value='destroyed'>Destroyed</option>
        <option value='unknown'>Unknown</option>
      </Select>
      <Select onChange={handleTypeChange} width='150px' mr={2} py={2}>
        <option value=''>Select Type</option>
        <option value='dragon1'>Dragon 1.0</option>
        <option value='dragon2'>Dragon 2.0</option>
      </Select>
      <Input
        type='date'
        placeholder='Launch Date'
        onChange={handleLaunchingDateChange}
        width='150px'
        mr={2}
        py={2}
      />
      <Button
        variant={'solid'}
        onClick={handleClearFilters}
        colorScheme='gray'
        size={{ base: 'sm', md: 'md' }}
        display={'block'}
        mt={2}
        w={{ base: 'full', md: '150px' }}>
        Clear
      </Button>
    </Box>
  );
};

export default CapsuleFilter;
