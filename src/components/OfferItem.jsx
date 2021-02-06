import { Box, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const OfferItem = props => {
  console.log(props);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      w="30%"
      minW={{ base: '100%', sm: '80%', md: '60%', lg: '400px' }}
      h="100%"
      mx={4}
      my={4}
      position="relative"
      overflow="hidden"
      onClick={props.onClick}
      _hover={{
        transform: 'scale(1.05)',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
      }}
    >
      <Box
        as="img"
        src={`${process.env.REACT_APP_SERVER_URL}${props.coverImage.url}`}
        alt={props.coverImage.name}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Box
        transform="skew(-15deg)"
        position="absolute"
        top={0}
        left={-12}
        bg="gray.800"
        h="100%"
        w={isHovered ? '0px' : { base: '70%', md: '60%' }}
        transition="ease-in-out 0.5s"
      >
        <Stack
          visibility={isHovered ? 'hidden' : 'visible'}
          ml={12}
          py={{ base: 4, md: 8 }}
          px={{ base: 2, md: 4 }}
          transform="skew(15deg)"
          color={isHovered ? 'transparent' : 'white'}
          transition="visibility ease-out 0.1s, color step-end 0.4s"
        >
          <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
            {props.title}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Desde:
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
              {props.price}€
            </Text>
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Válido até:
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
              {new Date(props.validUntil).toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default OfferItem;
