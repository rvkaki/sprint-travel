import { Box, Flex, Text } from '@chakra-ui/react';

const Slide = props => {
  return (
    <Box position="relative" shadow="2xl">
      <Box
        as="img"
        src={props.src}
        alt={props.alt}
        objectFit="cover"
        h={{ base: '150px', sm: '300px' }}
        w="600px"
      />
      <Flex
        position="absolute"
        bottom={0}
        left={0}
        w="100%"
        h="30%"
        bg="#EEEEEECC"
        align="center"
        justify="center"
      >
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          color="black"
          fontWeight="semibold"
        >
          {props.title}
        </Text>
      </Flex>
    </Box>
  );
};

export default Slide;
