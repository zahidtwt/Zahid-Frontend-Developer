import { HStack, VStack, SimpleGrid, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useGetCapsulesQuery } from '../features/api/apiSlice';
import CapsuleCard from './CapsuleCard';
import { useSelector } from 'react-redux';

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
  };

  const startIndex = (currentPage - 1) * capsulesPerPage;
  const endIndex = startIndex + capsulesPerPage;
  const pageCapsules = filteredCapsules.slice(startIndex, endIndex);

  return (
    <>
      <VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {pageCapsules.map((capsule) => (
            <CapsuleCard
              key={capsule.capsule_serial}
              capsuleSerial={capsule.capsule_serial}
              type={capsule.type}
              status={capsule.status}
              launchingDate={capsule.original_launch}
            />
          ))}
        </SimpleGrid>
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
    </>
  );
};

export default Capsules;
