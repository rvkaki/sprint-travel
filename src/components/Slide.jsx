import { Box, Flex, Text } from '@chakra-ui/react';

const Slide = props => {
  return (
    <Box position="relative" shadow="2xl">
      <Box
        as="img"
        src={props.src}
        alt={props.alt}
        objectFit="cover"
        h={{ base: '150px', sm: '300px', md: '400px', lg: '450px' }}
        w="900px"
      />
      <Flex
        position="absolute"
        bottom={0}
        left={0}
        w="100%"
        h="30%"
        bg="#EEEEEECC"
        direction="column"
        align="center"
        justify="space-around"
      >
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          color="black"
          fontWeight="semibold"
        >
          {props.title}
        </Text>
        {props.info ? (
          <Text fontSize={{ base: 'md', sm: 'xl', md: '2xl' }} color="black">
            {props.info}
          </Text>
        ) : null}
      </Flex>
    </Box>
  );
};

export default Slide;
