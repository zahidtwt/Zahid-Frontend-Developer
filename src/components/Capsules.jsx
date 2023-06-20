import { HStack, VStack, SimpleGrid, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useGetCapsulesQuery } from '../features/api/apiSlice';
import CapsuleCard from './CapsuleCard';
import { useSelector } from 'react-redux';
import CapsuleFilter from './CapsuleFilter';

const Capsules = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: capsules, isLoading, isError } = useGetCapsulesQuery();
  const { capsules: filters } = useSelector((state) => state);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }

  const filteredCapsules = capsules?.filter((capsule) => {
    if (filters.status.length && capsule.status !== filters.status) {
      return false;
    }
    if (filters.type.length && capsule.capsule_id !== filters.type) {
      return false;
    }
    console.log(
      capsule.original_launch,
      new Date(filters.launchingDate).toISOString()
    );
    if (
      filters.launchingDate &&
      capsule.original_launch?.slice(0, 10) !==
        new Date(filters.launchingDate).toISOString()?.slice(0, 10)
    ) {
      return false;
    }
    return true;
  });

  const capsulesPerPage = 6;
  const totalPages = Math.ceil(filteredCapsules.length / capsulesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.location = '#capsules';
  };

  const startIndex = (currentPage - 1) * capsulesPerPage;
  const endIndex = startIndex + capsulesPerPage;
  const pageCapsules = filteredCapsules.slice(startIndex, endIndex);

  return (
    <div id='capsules'>
      <VStack>
        <Text fontSize='4xl' fontWeight='bold' my={{ base: 2, md: 4 }}>
          Capsules
        </Text>
        <CapsuleFilter />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={5}>
          {pageCapsules.map((capsule, id) => (
            <CapsuleCard key={id} capsule={capsule} />
          ))}
        </SimpleGrid>
        {!pageCapsules.length && (
          <Text fontSize='xl' fontWeight='bold' my={{ base: 2, md: 4 }}>
            No capsules found!
          </Text>
        )}
        <HStack mt={4}>
          <Button
            isDisabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </Button>
          <Button
            isDisabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </Button>
        </HStack>
      </VStack>
    </div>
  );
};

export default Capsules;
